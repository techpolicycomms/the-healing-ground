#!/usr/bin/env bash
#
# Brand voice guard — fail if any hard-banned word appears in user-facing copy.
# Run pre-commit or in CI. Excludes: this script, brand.ts (where the bans
# themselves can be named for documentation purposes).
#
set -euo pipefail

cd "$(dirname "$0")/.."

EXCLUDE_DIRS=(--exclude-dir=node_modules --exclude-dir=.next --exclude-dir=.git)
INCLUDE_EXT=(--include='*.tsx' --include='*.ts' --include='*.json' --include='*.mdx' --include='*.md')

# Hard bans: zero tolerance in user-facing copy.
# `coach` / `coaching` / `coach's` — except where the constants file documents the ban.
HARD_PATTERN='\bcoach(es|ing|'\''s)?\b|best version|unlock (your|to)|biohack|crush it|high vibration|\bmanifest\b|game.?changer|optimi[sz]e your'

# Collect hits, excluding allowed paths.
HITS="$(grep -rniE "$HARD_PATTERN" src/ "${INCLUDE_EXT[@]}" "${EXCLUDE_DIRS[@]}" \
  | grep -v 'src/lib/brand.ts' \
  | grep -v 'scripts/check-bans.sh' \
  || true)"

if [ -n "$HITS" ]; then
  echo "BAN VIOLATION — the following hits must be removed before committing:"
  echo "$HITS"
  exit 1
fi

# Soft cap: trauma-informed appears at most 12 times across src/.
SOFT_COUNT="$(grep -rinE 'trauma.?informed' src/ "${INCLUDE_EXT[@]}" "${EXCLUDE_DIRS[@]}" | wc -l | tr -d ' ')"
SOFT_LIMIT=12

if [ "$SOFT_COUNT" -gt "$SOFT_LIMIT" ]; then
  echo "SOFT-BAN WARNING — 'trauma-informed' appears $SOFT_COUNT times (target: <=$SOFT_LIMIT)."
  echo "Trim per the brand brief P5 before shipping."
  exit 2
fi

echo "Brand voice OK. hard-bans: 0, trauma-informed: $SOFT_COUNT/$SOFT_LIMIT."

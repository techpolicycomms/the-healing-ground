import { ServicePage, serviceMetadata } from "@/components/site/service-page";
import { servicePages } from "@/lib/site-content";

const page = servicePages["/burnout-support"];

export const metadata = serviceMetadata(page);

export default function BurnoutSupportPage() {
  return <ServicePage page={page} />;
}

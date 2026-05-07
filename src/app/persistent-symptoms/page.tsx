import { ServicePage, serviceMetadata } from "@/components/site/service-page";
import { servicePages } from "@/lib/site-content";

const page = servicePages["/persistent-symptoms"];

export const metadata = serviceMetadata(page);

export default function PersistentSymptomsPage() {
  return <ServicePage page={page} />;
}

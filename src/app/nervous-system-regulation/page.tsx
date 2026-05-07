import { ServicePage, serviceMetadata } from "@/components/site/service-page";
import { servicePages } from "@/lib/site-content";

const page = servicePages["/nervous-system-regulation"];

export const metadata = serviceMetadata(page);

export default function NervousSystemRegulationPage() {
  return <ServicePage page={page} />;
}

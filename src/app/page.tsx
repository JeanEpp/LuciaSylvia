import Accueil from "./Page/Accueil";
import Perfumes from './Page/Perfumes';
import Contacts from './Page/Contacts';
import StructuredData from './Components/StructuredData';

import type { WithContext, Organization, LocalBusiness, PostalAddress, OpeningHoursSpecification } from 'schema-dts';

const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lucia Sylvia - Parfumerie Naturelle",
  "url": "https://www.luciasylvia.fr",
  "logo": "https://www.luciasylvia.fr/favicon.ico",
  "description": "Découvrez Lucia Sylvia, votre parfumerie naturelle en ligne. Parfums artisanaux, éthiques et inspirés par la nature.",
  "sameAs": [
  ]
};

export default function Home() {
  return (
    <>
      <Accueil />
      <Perfumes />
      <Contacts />
      <StructuredData data={organizationSchema} />
    </>
  );
}

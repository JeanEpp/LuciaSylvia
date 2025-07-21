import type { WithContext, Organization } from 'schema-dts';
import Accueil from "@/app/Page/Accueil";
import Perfumes from '@/app/Page/Perfumes';
import Contacts from '@/app/Page/Contacts';
import StructuredData from '@/app/Components/StructuredData';

const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lucia Sylvia - Parfumerie Naturelle",
  "url": "https://www.luciasylvia.fr",
  "logo": "https://www.luciasylvia.fr/favicon.ico",
  "description": "Découvrez Lucia Sylvia, votre parfumerie naturelle en ligne. Parfums artisanaux, éthiques et inspirés par la nature.",
  "email": "parfumerie@luciasylvia.fr",
  "telephone": "+33 6 72 45 84 17",
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

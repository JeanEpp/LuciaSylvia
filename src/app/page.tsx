import dynamic from 'next/dynamic';
import Accueil from "./Page/Accueil";
import Perfumes from './Page/Perfumes';

/*const DynamicPerfumes = dynamic(() => import('./Page/Perfumes'), {
  loading: () => <p>Chargement des parfums...</p>
});*/
const DynamicContacts = dynamic(() => import('./Page/Contacts'), {
  loading: () => <p>Chargement des coordonnées...</p>
});

export default function Home() {
  return (
    <>
      <Accueil />
      <Perfumes />
      <DynamicContacts />
    </>
  );
}

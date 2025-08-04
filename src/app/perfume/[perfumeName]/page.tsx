import getPerfumeNames, { IEtiquette } from "@/app/etiquettes";
import PerfumeClient from "@/app/perfume/[perfumeName]/ClientPerfume";
import Contacts from '@/app/Page/Contacts';
import { carattere } from "@/app/fonts";
import { Metadata } from 'next';

export async function generateStaticParams() {
  const perfumes = await getPerfumeNames();

  return perfumes.map((perfume: IEtiquette) => ({
    perfumeName: perfume.url
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ perfumeName: string }> }): Promise<Metadata> {
  const { perfumeName } = await params;
  const etiquettes = await getPerfumeNames();
  const etiquette = etiquettes.find(e => e.url === perfumeName) ?? null;

  if (!etiquette) {
    return {
      title: 'Parfum non trouvé - Lucia Sylvia',
    };
  }

  return {
    title: `${etiquette.name} - Lucia Sylvia`,
    description: etiquette.description,
    openGraph: {
      title: etiquette.name,
      description: etiquette.description,
      images: etiquette.image,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ perfumeName: string }> }) {
  const { perfumeName } = await params;
  const perfumes = await getPerfumeNames();
  const etiquette = perfumes.find((p: IEtiquette) => p.url === perfumeName) ?? null;

  return (
    <>
      <div id="Parfums" className="h-min:screen text-center justify-items-center pt-20 content-center space-y-9">
        <h1 className={`${carattere.className} text-5xl font-semibold text-balance text-white text-center sm:text-5xl`}>{etiquette?.name ?? ""}</h1>
        <PerfumeClient etiquette={etiquette} isPriority={true}/>
      </div>
      <Contacts />
    </>
  )
}


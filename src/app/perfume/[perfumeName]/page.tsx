import getPerfumeNames, { IEtiquette } from "@/app/etiquettes";
import PerfumeClient from "@/app/perfume/[perfumeName]/ClientPerfume";
import Contacts from '@/app/Page/Contacts';

export async function generateStaticParams() {
  const perfumes = await getPerfumeNames();

  return perfumes.map((perfume: IEtiquette) => ({
    perfumeName: perfume.name
  }))
}

export default async function Page({ params }: { params: Promise<{ perfumeName: string }> }) {
  const { perfumeName } = await params;
  const perfumes = await getPerfumeNames();
  const etiquette = perfumes.find((p: IEtiquette) => p.name === perfumeName) ?? null;

  return (
    <>
      <div id="Parfums" className="h-min:screen text-center justify-items-center pt-20 content-center space-y-9">
        <h1 className={`text-5xl font-semibold text-balance text-white text-center sm:text-5xl font-carattere`}>{perfumeName ?? ""}</h1>
        <PerfumeClient etiquette={etiquette} />
      </div>
      <Contacts />
    </>
  )
}


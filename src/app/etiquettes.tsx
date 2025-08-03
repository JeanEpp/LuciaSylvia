import Data from "../../public/Etiquettes.json";

export interface IEtiquette {
    name: string;
    url: string;
    description: string;
    sku: string;
    composition: string[];
    price: number;
    availability: | 'https://schema.org/BackOrder'
    | 'https://schema.org/Discontinued'
    | 'https://schema.org/InStock'
    | 'https://schema.org/InStoreOnly'
    | 'https://schema.org/LimitedAvailability'
    | 'https://schema.org/OnlineOnly'
    | 'https://schema.org/OutOfStock'
    | 'https://schema.org/PreOrder'
    | 'https://schema.org/PreSale'
    | 'https://schema.org/SoldOut';
    image: string[];
}

interface IRawEtiquette {
    name: string;
    description: string;
    composition: string[];
    price: number;
    availability: string;
}

export default async function getPerfumeNames(): Promise<IEtiquette[]> {
  const etiquettes: IEtiquette[] = Data.Etiquettes.map((etiquette: IRawEtiquette) => {
    const url = etiquette.name.replace(/ /g, "-").replace(/é/g, "e");
    return {
      ...etiquette,
      url,
      sku: `PERFUME-${url.toUpperCase()}`,
      availability: etiquette.availability as IEtiquette["availability"],
      image: [
        "https://www.luciasylvia.fr/Flacon10ml/" + url + ".webp"
      ]
    };
  });
  return etiquettes;
}
import Data from "../../public/Etiquettes.json";

export interface IEtiquette {
    name: string;
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
    url: string;
}

export default async function getPerfumeNames() : Promise<IEtiquette[]> {
  return Data.Etiquettes as IEtiquette[];
}
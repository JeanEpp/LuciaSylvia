export default async function getPerfumeNames() {
	const res = await fetch("/Etiquettes.json");
	const data = await res.json();
   
	return data;
}
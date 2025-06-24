export default async function getPerfumeNames() {
	const res = await fetch("/LuciaSylvia/Etiquettes.json");
	const data = await res.json();
   
	return data;
}
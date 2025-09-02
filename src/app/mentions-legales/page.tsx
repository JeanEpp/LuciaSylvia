import { carattere } from "@/app/fonts";

export default async function MentionsLegales() {
    return (
        <div className="flex justify-center my-auto">
            <div className="px-6 py-8">
                <h1 className={`text-6xl font-bold mb-16 text-center ${carattere.className}`}>Mentions Légales</h1>
                <p className="mb-2"><strong>{"Nom de l'entreprise :"}</strong> Lucia Sylvia - Parfumerie Naturelle</p>
                <p className="mb-2"><strong>Propriétaire :</strong> Clara Bencteux</p>
                <p className="mb-2"><strong>Statut juridique :</strong> Micro-Entreprise</p>
                <p className="mb-2"><strong>Numéro SIREN :</strong> 943 057 976</p>
                <p className="mb-2"><strong>Adresse :</strong> BIS 15 Naymont, 88210 Ban-de-sapt, France</p>
                <p className="mb-2"><strong>Email :</strong> parfumerie@luciasylvia.fr</p>
                <p className="mb-2"><strong>Téléphone :</strong> +33 6 72 45 84 17</p>
                <p className="mb-2"><strong>Hébergeur :</strong> Github Pages</p>
                <p className="mb-2"><strong>{"Adresse de l'hébergeur :"}</strong> 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis</p>
                <p className="mb-2"><strong>{"Numéro de téléphone de l'hébergeur :"}</strong> +1 415-692-0669</p>
            </div>
        </div>
    )
}
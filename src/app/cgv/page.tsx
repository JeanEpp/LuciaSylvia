import { carattere } from "@/app/fonts";
import Accordion from "@/components/Accordion";

export default async function CGV() {
    return (
        <div className="p-6">
            <p className={`text-center flex flex-col sm:block pt-2 sm:pt-0 mb-8 text-xl font-bold`}>Conditions Générales de Vente<span className="hidden sm:inline"> -</span> <span className={`${carattere.className} text-4xl `}>Lucia Sylvia</span></p>
            <p className="mb-8">Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les commandes passées sur le site internet de Lucia Sylvia par toute personne physique ou morale non professionnelle.</p>
            <Accordion
                items={[
                    {
                        title: "Article 1. Caractéristiques essentielles des biens",
                        content: <p>La parfumerie Lucia Sylvia propose à la vente des <strong>parfums</strong> conditionnés en trois formats distincts, dont les caractéristiques (composition, format, notes olfactives) sont détaillées sur la page de chaque produit. Les photographies et descriptions des produits sont les plus fidèles possibles mais ne peuvent garantir une similitude parfaite, notamment en ce qui concerne les couleurs.</p>
                    },
                    {
                        title: "Article 2. Prix",
                        content: <p>Les prix de nos produits sont indiqués en <strong>euros (€)</strong>, toutes taxes comprises (TTC). Ils ne comprennent pas les frais de traitement et d'expédition, qui sont facturés en supplément et affichés avant la validation de la commande. Lucia Sylvia se réserve le droit de modifier ses prix à tout moment, mais les produits seront facturés sur la base des tarifs en vigueur au moment de l'enregistrement de la commande.</p>
                    },
                    {
                        title: "Article 3. Frais, date et modalités de livraison",
                        content: <>
                            <p>La livraison est effectuée par <strong>La Poste</strong>. Les commandes sont expédiées sous un délai de <strong>3 à 5 jours</strong> après validation du paiement. Les délais de livraison indicatifs sont de <strong>48h</strong> pour une livraison standard en France métropolitaine.</p>
                            <p>Les frais de livraison sont calculés en fonction du poids de la commande et du mode de livraison choisi. Ils sont indiqués au client avant la validation finale de sa commande.{/* La livraison est <strong>gratuite</strong> à partir d'un montant d'achat de [indiquer le montant]. */}</p>
                        </>
                    },
                    {
                        title: "Article 4. Modalités de paiement",
                        content: <>
                            <p>Le paiement des achats s'effectue par <strong>carte bancaire</strong> ou par <strong>virement bancaire</strong>. Nous utilisons la plateforme de paiement sécurisé SumUp, qui accepte les cartes de crédit les plus courantes. Le paiement par virement sera pris en compte après réception des fonds sur notre compte bancaire.</p>
                            <p>En cas de <strong>retard de paiement</strong>, le vendeur se réserve le droit de suspendre ou d'annuler la commande en cours. Des pénalités de retard pourront être appliquées, égales à trois fois le taux d'intérêt légal en vigueur, ainsi qu'une indemnité forfaitaire de <strong>40€</strong> pour frais de recouvrement.</p>
                        </>
                    },
                    {
                        title: "Article 5. Droit de rétractation",
                        content: <>
                            <p>Conformément à la loi, le client dispose d'un délai de <strong>14 jours</strong> à compter de la réception de sa commande pour exercer son droit de rétractation. Pour être accepté, le produit retourné doit être dans son <strong>emballage d'origine, non ouvert et non utilisé</strong>.</p>
                            <p>Les <strong>frais de retour</strong> sont à la charge du client. Le remboursement de la commande (prix des produits et frais de livraison initiaux) sera effectué dans les 14 jours suivant la réception du produit retourné et la vérification de son état.</p>
                        </>
                    },
                    {
                        title: "Article 6. Garanties légales",
                        content: <>
                            <p>Lucia Sylvia est tenue des défauts de conformité du bien au contrat dans les conditions prévues aux articles L. 217-4 et suivants du Code de la consommation, et des défauts cachés de la chose vendue dans les conditions prévues aux articles 1641 et suivants du Code civil.</p>
                            <ul>
                                <li><strong>Garantie légale de conformité :</strong> Le client bénéficie d'un délai de deux ans à compter de la délivrance du bien pour agir. Il peut choisir entre la réparation ou le remplacement du bien, sous réserve des conditions de coût prévues par l'article L. 217-9 du Code de la consommation.</li>
                                <li><strong>Garantie des vices cachés :</strong> Le client peut choisir entre la résolution de la vente ou une réduction du prix de vente, conformément à l'article 1644 du Code civil.</li>
                            </ul>
                        </>
                    },
                    {
                        title: "Article 7. Service après-vente",
                        content: <p>Pour toute question ou réclamation, le service après-vente est joignable par e-mail à l'adresse <strong>parfumerie@luciasylvia.fr</strong>. La communication avec notre service client n'est pas surtaxée.</p>
                    },
                    {
                        title: "Article 8. Règlement des litiges",
                        content: <>
                            <p>En cas de litige, le client doit d'abord s'adresser au service client de Lucia Sylvia pour trouver une solution amiable.</p>
                            <p>À défaut de résolution amiable, le client a la possibilité de recourir gratuitement à un médiateur de la consommation. Le médiateur de la consommation dont nous relevons est <strong>CNPM Médiation Consommation</strong>.</p>
                            <p>Le client peut déposer sa demande sur le site internet suivant : <a href="https://www.cnpm-mediation-consommation.eu" target="_blank" rel="noopener noreferrer">https://www.cnpm-mediation-consommation.eu</a>, ou par voie postale en écrivant à <strong>CNPM Médiation Consommation - 27, avenue de la Libération - 42400 Saint-Chamond</strong>.</p>
                            <p>À défaut de résolution amiable, tout litige sera porté devant les tribunaux français compétents. Conformément au règlement (UE) n° 524/2013, la Commission Européenne a mis en place une plateforme de règlement en ligne des litiges (RLL), facilitant le règlement extrajudiciaire indépendant des litiges en ligne entre consommateurs et professionnels de l'Union européenne : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.</p>
                        </>
                    }
                ]}
            />
        </div>
    );
}

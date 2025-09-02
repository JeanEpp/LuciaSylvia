import Accordion from "@/components/Accordion";
import { carattere } from "@/app/fonts";

export default async function Confidentialite() {
    return (
        <div className="privacy-policy">
            <div className="p-6">
                <p className={`text-center mb-8 text-xl font-bold`}>Politique de Confidentialité - <span className={`${carattere.className} text-4xl`}>Lucia Sylvia</span></p>
                <p className="mb-8">La présente politique de confidentialité a pour objectif de vous informer sur la manière dont Lucia Sylvia collecte et traite vos données personnelles.</p>
                <Accordion
                    items={[
                        {
                            title: "1. Identité et Coordonnées du Responsable du Traitement",
                            content: (
                                <section>
                                    <p>Le responsable du traitement de vos données personnelles est :</p>
                                    <address>
                                        <strong>Lucia Sylvia</strong><br />
                                        Représentée par Clara Bencteux<br />
                                        BIS 15 Naymont, 88210 Ban-de-sapt, France<br />
                                        <a href="mailto:parfumerie@luciasylvia.fr">parfumerie@luciasylvia.fr</a><br />
                                        <a href="tel:+33672458417">+33 6 72 45 84 17</a>
                                    </address>
                                    <p>Étant une micro-entreprise, il {"n'y"} a pas de Délégué à la Protection des Données (DPO) désigné.</p>
                                </section>
                            )
                        },
                        {
                            title: "2. Finalités et Bases Légales du Traitement",
                            content: (
                                <section>
                                    <p>Nous collectons et traitons vos données personnelles pour les finalités suivantes, en nous appuyant sur les bases légales correspondantes :</p>
                                    <ul className="list-disc pl-8">
                                        <li>
                                            <strong>Gestion des commandes et des transactions :</strong> Pour traiter vos achats, assurer la livraison et le suivi de vos commandes.
                                            <br />
                                            <em>Base légale :</em> Exécution du contrat de vente.
                                        </li>
                                        <li>
                                            <strong>Service après-vente et gestion des litiges :</strong> Pour répondre à vos questions, traiter vos réclamations et gérer les retours produits.
                                            <br />
                                            <em>Base légale :</em> Exécution du contrat de vente.
                                        </li>
                                        <li>
                                            <strong>Amélioration de notre service et de notre site web :</strong> Pour analyser le nombre de visites sur notre site et adapter nos offres à vos préférences.
                                            <br />
                                            <em>Base légale :</em> Notre intérêt légitime {"d'améliorer"} et de développer nos services.
                                        </li>
                                        <li>
                                            <strong>Prospection commerciale et envoi de newsletters :</strong> Si vous y avez consenti, pour vous tenir informé de nos nouveautés, offres et événements.
                                            <br />
                                            <em>Base légale :</em> Votre consentement.
                                        </li>
                                    </ul>
                                    <p>Le recueil de vos données est <strong>obligatoire</strong> pour la bonne exécution des commandes et la gestion du service après-vente. Sans ces informations (nom, adresse, mode de paiement, etc.), nous ne pourrons pas traiter votre achat ni vous assister. Le recueil de données pour la prospection commerciale est quant à lui <strong>facultatif</strong> et basé sur votre consentement.</p>
                                </section>
                            )
                        },
                        {
                            title: "3. Catégories de Données Collectées",
                            content: (
                                <section>
                                    <p>Nous collectons les données suivantes :</p>
                                    <ul className="list-disc pl-8">
                                        <li><strong>Données {"d'identification"} :</strong> nom, prénom, adresse postale, courriel, numéro de téléphone.</li>
                                        <li><strong>Données relatives aux transactions :</strong> historique {"d'achats"}, détails de vos commandes.</li>
                                        <li><strong>Données de navigation :</strong> informations relatives à votre utilisation de notre site web.</li>
                                    </ul>
                                </section>
                            )
                        },
                        {
                            title: "4. Destinataires des Données Personnelles",
                            content: (
                                <section>
                                    <p>Vos données sont destinées à Clara Bencteux de Lucia Sylvia. Elles sont également partagées avec des prestataires de services tiers qui nous aident à exploiter notre activité :</p>
                                    <ul className="list-disc pl-8">
                                        <li><strong>LWS :</strong> Notre fournisseur de services DNS.</li>
                                        <li><strong>GitHub Pages :</strong> Notre hébergeur de site web.</li>
                                        <li><strong>Google Analytics :</strong> Pour la mesure {"d'audience"} de notre site web.</li>
                                        <li><strong>SumUp :</strong> Pour le traitement des paiements.</li>
                                        <li><strong>Prestataires de services de livraison :</strong> Pour {"l'expédition"} de vos commandes.</li>
                                    </ul>
                                    <p>Chacun de ces prestataires est tenu par des obligations contractuelles de garantir la sécurité et la confidentialité de vos données.</p>
                                </section>
                            )
                        },
                        {
                            title: "5. Durée de Conservation des Données",
                            content: (
                                <section>
                                    <p>Nous conservons vos données personnelles pour la durée nécessaire à {"l'accomplissement"} des finalités pour lesquelles elles ont été collectées.</p>
                                    <ul className="list-disc pl-8">
                                        <li><strong>Les données nécessaires à la gestion de la relation client et au service après-vente</strong> sont conservées pendant toute la durée de la relation commerciale. Elles sont ensuite archivées pour la durée légale de conservation des documents comptables et juridiques, généralement 10 ans après la fin de {"l'année d'exercice"}.</li>
                                        <li><strong>Les données de prospection commerciale</strong> sont conservées pendant une durée de trois ans à compter du dernier contact de votre part.</li>
                                    </ul>
                                    <p>Pour les prestataires de services tiers, la durée de conservation est régie par leur propre politique de confidentialité.</p>
                                </section>
                            )
                        },
                        {
                            title: "6. Transfert de Données en dehors de l'UE",
                            content: (
                                <section>
                                    <p>Les données relatives à vos commandes et leur archivage sont stockées en France et ne sont pas transférées en dehors de {"l'Union"} européenne. Cependant, certains de nos prestataires de services tiers (comme Google) peuvent transférer des données en dehors de {"l'UE"}. Ces transferts sont effectués conformément à la législation en vigueur, en utilisant des garanties appropriées (telles que les clauses contractuelles types).</p>
                                </section>
                            )
                        },
                        {
                            title: "7. Vos Droits",
                            content: (
                                <section>
                                    <p>Conformément à la réglementation, vous disposez des droits suivants :</p>
                                    <ul className="list-disc pl-8">
                                        <li><strong>Droit {"d'accès"} :</strong> Demander une copie de vos données personnelles que nous détenons.</li>
                                        <li><strong>Droit de rectification :</strong> Corriger vos données si elles sont inexactes ou incomplètes.</li>
                                        <li><strong>Droit {"d'effacement"} {"(\"droit à l'oubli\")"} :</strong> Demander la suppression de vos données, sous certaines conditions.</li>
                                        <li><strong>Droit de limitation :</strong> Demander la limitation du traitement de vos données.</li>
                                        <li><strong>Droit {"d'opposition"} :</strong> Vous opposer au traitement de vos données, notamment à la prospection commerciale.</li>
                                        <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré et transmissible à un autre responsable de traitement.</li>
                                        <li><strong>Droit de retirer votre consentement :</strong> Retirer votre consentement à tout moment pour les traitements basés sur cette base légale (comme {"l'envoi"} de newsletters).</li>
                                    </ul>
                                    <p>Pour exercer ces droits, vous pouvez nous contacter par courriel à <a href="mailto:parfumerie@luciasylvia.fr">parfumerie@luciasylvia.fr</a> ou par voie postale à {"l'adresse"} indiquée ci-dessus.</p>
                                </section>
                            )
                        },
                        {
                            title: "8. Droit d'introduire une Réclamation",
                            content: (
                                <section>
                                    <p>Si vous estimez que vos droits {"n'ont"} pas été respectés, vous avez le droit {"d'introduire"} une réclamation auprès de la <strong>Commission Nationale de {"l'Informatique"} et des Libertés (CNIL)</strong>.</p>
                                </section>
                            )
                        }
                    ]}
                />
            </div>
        </div>
    )
}
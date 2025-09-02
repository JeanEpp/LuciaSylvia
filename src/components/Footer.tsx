export default async function Footer() {
    return (
        <footer className="text-white py-4 mt-auto">
            <div className="container mx-auto">
                <p className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs mt-2 text-center justify-center">
                    <span>
                        &copy; {new Date().getFullYear()} Lucia Sylvia - Parfumerie Naturelle. Tous droits réservés.
                    </span>
                    <span className="flex gap-2 justify-center">
                        <a href="/mentions-legales" className="text-gray-400 hover:text-white">
                            Mentions légales
                        </a>
                        <a href="/cgv" className="text-gray-400 hover:text-white">
                            CGV
                        </a>
                        <a href="/confidentialite" className="text-gray-400 hover:text-white">
                            Confidentialité
                        </a>
                    </span>
                </p>
            </div>
        </footer>
    );
}

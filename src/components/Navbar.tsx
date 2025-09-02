"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { carattere } from "@/app/fonts";

interface NavlinkProps {
	name: string;
	href: string;
	onClick: () => void;
}

function NavLink({ name, href, onClick }: NavlinkProps) {
	const [anchorExists, setAnchorExists] = useState(false);

	useEffect(() => {
		setAnchorExists(!!document.getElementById(name));
	}, [name]);

	if (anchorExists) {
		return (
			<ScrollLink
			    href={'#' + name}
				to={name}
				smooth={true}
				duration={700}
				offset={-60}
				className="text-base/7 sm:text-xl/6 font-semibold text-(--background) cursor-pointer"
				activeClass="text-amber-600"
				onClick={onClick}
			>
				{name}
			</ScrollLink>
		);
	} else {
		return (
			<Link
				href={href + (name ? '#' + name : "")}
				className="text-base/7 sm:text-xl/6 font-semibold text-(--background) cursor-pointer"
				onClick={() => {
					onClick();
					setAnchorExists(true);
				}}
			>
				{name}
			</Link>
		);
	}
}

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleNavLinkClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<header className="top-0 h-0 z-50 sticky">
			<nav className="w-full lg:justify-items-center px-4 sm:py-4 lg:px-6 bg-white brightness-100 backdrop-blur-sm" aria-label="Global">
				<div className="w-full flex relative justify-center gap-x-28">
					<button role="button" aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setIsOpen(!isOpen)} className="-m-2. min-h-12 mr-auto inline-flex sm:hidden items-center justify-center rounded-md p-2.5 text-gray-700">
						<span className="sr-only">Open main menu</span>
						<svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					</button>
					<div className="hidden sm:block w-1/2 sm:text-end">
						<NavLink name="Parfums" href="/" onClick={handleNavLinkClick} />
					</div>
					<Link href="/" className={`${carattere.className} absolute shadow-black shadow h-14 w-14 top-2.5 rounded-full bg-white text-black text-center text-[22px] content-center`}>
						<div className="pr-1 line" style={{ lineHeight: 2.7 }}>LS</div>
					</Link>
					<div className="hidden sm:block w-1/2">
						<NavLink name="Contacts" href="/" onClick={handleNavLinkClick} />
					</div>
				</div>
			</nav>
			<div className={`sm:hidden duration-300 fixed inset-y-0 z-50 w-full overflow-y-auto ${isOpen ? "" : "-translate-x-full md:-translate-x-[384px]"} bg-white px-6 py-6 sm:max-w-1/3 sm:ring-1 sm:ring-gray-900/10`}>
				<div className="flex items-center justify-between">
					<button role="button" aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setIsOpen(false)} className="-m-2.5 min-h-12 rounded-md p-2.5 text-gray-700">
						<span className="sr-only">Close menu</span>
						<svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div className="mt-6 flow-root">
					<div className="-my-6 divide-y divide-gray-500/10">
						<div className="flex flex-col sm:block space-y-2 py-6">
							<NavLink name="Parfums" href="/" onClick={handleNavLinkClick} />
							<NavLink name="Contacts" href="/" onClick={handleNavLinkClick} />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

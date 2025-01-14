import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { LiaBarsSolid, LiaTimesSolid } from "react-icons/lia";

const navLinks = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];

function Header() {
	const headerRef = useRef(null);
	const navOpenRef = useRef(null);
	const navCloseRef = useRef(null);
	const [activeLinkId, setActiveLinkId] = useState(null);

	useGSAP(
		() => {
			const tl = gsap.timeline();
			const mm = gsap.matchMedia();

			tl.fromTo(
				headerRef.current,
				{
					y: -100,
				},
				{
					y: 0,
					duration: 0.5,
					ease: 'power'
				}
			).from(".logo", {
				x: -20,
				opacity: 0,
				duration: 0.5,
			});

			mm.add("(min-width: 768px)", () => {
				tl.fromTo(
					".nav-link",
					{
						x: 50,
						opacity: 0,
					},
					{
						x: 0,
						opacity: 1,
						stagger: 0.1,
						duration: 0.25,
					},
					"<"
				);
			});

			mm.add("(max-width: 768px)", () => {
				tl.from(
					navOpenRef.current,
					{
						scale: 0,
						opacity: 0,
						duration: 0.5,
					},
					"<"
				);
				function animateNavOpen() {
					tl.to(navOpenRef.current, {
						scale: 0,
						opacity: 0,
						duration: 0.1,
					})
					.to(".nav-links-container", {
						x: 0,
						opacity: 1,
						duration: 0.2,
						ease: "power",
					}, '<')
						.fromTo(
							".nav-link",
							{
								x: 50,
								opacity: 0,
							},
							{
								x: 0,
								opacity: 1,
								stagger: 0.1,
								duration: 0.25,
							}
						)
						.to(navCloseRef.current, {
							scale: 1,
							opacity: 1,
							duration: 0.1,
						});
				}
				function animateNavClose() {
					tl.to(navCloseRef.current, {
						opacity: 0,
						scale: 0,
						duration: 0.1,
					})
						.to(".nav-link", {
							x: 50,
							opacity: 0,
							stagger: 0.1,
							duration: 0.25,
						}, '<')
						.to(".nav-links-container", {
							x: "100%",
							opacity: 1,
							duration: 0.2,
							ease: "power",
						})
						.to(navOpenRef.current, {
							scale: 1,
							opacity: 1,
							duration: 0.1,
						});
				}
				navOpenRef.current.addEventListener("click", animateNavOpen);
				navCloseRef.current.addEventListener("click", animateNavClose);
			});
		},
		{
			scope: headerRef,
		}
	);

	useEffect(() => {
		const sections = document.querySelectorAll("section");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.getAttribute("id");
						setActiveLinkId(id);
					}
				});
			},
			{
				threshold: 0.6, 
			}
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	return (
		<header
			ref={headerRef}
			className="fixed top-0 w-full bg-white text-neutral-700 z-10"
		>
			<nav className="flex items-center justify-between max-w-6xl mx-auto min-h-16">
				<a
					className="logo font-poppins text-teal-500 text-3xl font-semibold ms-10"
					href="#"
				>
					Hussain
				</a>
				<div
					className={`nav-links-container font-light flex font-poppins me-10 gap-10 max-md:absolute max-md:top-0 max-md:left-0 max-md:w-full max-md:bg-neutral-50 max-md:h-screen max-md:flex-col max-md:gap-0 max-md:text-center transition ease-in-out duration-300 max-md:translate-x-full z-20`}
				>
					<div ref={navCloseRef} className="nav-close-btn text-3xl h-16 w-16 cursor-pointer self-end grid place-content-center md:hidden active:bg-neutral-200 opacity-0 scale-0">
						<LiaTimesSolid />
					</div>

					{navLinks.map((link) => (
						<a
							key={link.name}
							className={`nav-link md:after:block after:h-px after:bg-teal-500 after:transition-[width] after:duration-300 ${ activeLinkId === link.name.toLowerCase() ? "text-teal-500 after:w-full max-md:bg-neutral-200" : "after:w-0 hover:after:w-full"} `}
							href={link.href}
						>
							{link.name}
						</a>
					))}
				</div>
				<button ref={navOpenRef} className="nav-open-btn h-16 w-16 text-3xl grid place-content-center md:hidden active:bg-neutral-200">
					<LiaBarsSolid />
				</button>
			</nav>
		</header>
	);
}
export default Header;

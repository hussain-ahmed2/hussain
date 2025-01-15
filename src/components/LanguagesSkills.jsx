import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaJava, FaJs, FaPhp, FaPython } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { useRef } from "react";

function LanguagesSkills() {
	const containerRef = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline();

			tl.to('.icon', {
				rotationY: 360,
				duration: 2,
				repeat: -1,
				ease: "power1.inOut",
				stagger: 0.25,
			});
		},
		{ scope: containerRef }
	);

	return (
		<div
			ref={containerRef}
			className="flex flex-wrap relative border border-neutral-500 bg-neutral-50 rounded-md justify-center"
		>
			<strong className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-b from-neutral-200 to-neutral-50 whitespace-nowrap">
				Languages
			</strong>
			<FaPython className="icon text-3xl md:text-4xl m-4" />
			<FaJava className="icon text-3xl md:text-4xl m-4" />
			<TbBrandCpp className="icon text-3xl md:text-4xl m-4" />
			<FaPhp className="icon text-3xl md:text-4xl m-4" />
			<FaJs className="icon text-3xl md:text-4xl m-4" />
		</div>
	);
}
export default LanguagesSkills;

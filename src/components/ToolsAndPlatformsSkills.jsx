import { FaGitAlt, FaGithub } from "react-icons/fa6";
import { SiNetlify, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function ToolsAndPlatformsSkills() {
	const containerRef = useRef(null);

	useGSAP(
		() => {
			const tl = gsap.timeline();

			tl.to(".icon", {
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
				Tools & Platforms
			</strong>
			<FaGitAlt className="icon text-3xl md:text-4xl m-4" />
			<VscVscode className="icon text-3xl md:text-4xl m-4" />
			<SiNetlify className="icon text-3xl md:text-4xl m-4" />
			<FaGithub className="icon text-3xl md:text-4xl m-4" />
			<SiPostman className="icon text-3xl md:text-4xl m-4" />
		</div>
	);
}
export default ToolsAndPlatformsSkills;

import LanguagesSkills from "./LanguagesSkills";
import FrontendDevelopmentSkills from "./FrontendDevelopmentSkills";
import BackendDevelopmentSkills from "./BackendDevelopmentSkills";
import ToolsAndPlatformsSkills from "./ToolsAndPlatformsSkills";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function About() {
	const textRefs = useRef([]); 
	const aboutRef = useRef(null);
	const titleRefs = useRef([]);

	const addToRefs = (el) => {
		if (el && !textRefs.current.includes(el)) {
			textRefs.current.push(el);
		}
	};

	const addToTitleRefs = (el) => {
		if (el && !titleRefs.current.includes(el)) {
			titleRefs.current.push(el);
		}
	};

	useGSAP(() => {
		textRefs.current.forEach((el, index) => {
			gsap.fromTo(
				el,
				{
					opacity: 0,
					y: 20,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.3,
					delay: index * 0.2,
					ease: "power",
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
					},
				}
			);
		});

		titleRefs.current.forEach((el, index) => {
			gsap.fromTo(
				el,
				{
					opacity: 0,
					x: -50,
				},
				{
					opacity: 1,
					x: 0,
					duration: 0.5,
					delay: index * 0.5,
					ease: "power",
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
					},
				}
			);
		});
	}, { scope: aboutRef });

	return (
		<section
			ref={aboutRef}
			id="about"
			className="mx-auto md:flex-row min-h-[calc(100vh-4rem)] text-neutral-700 px-5"
		>
			<h2 ref={addToTitleRefs}  className="text-3xl font-bold text-neutral-800 mb-4">
				About Me
			</h2>
			<p ref={addToRefs} className="text-neutral-700 mb-4 text-justify">
				Hi, I{"'"}m <strong>Hussain Ahmed</strong>, a web developer with
				a passion for AI and open-source projects. I graduated in
				Computer Science and Engineering from Varendra University, where
				I built projects like an online shopping system, weather app,
				and Wordle game.
			</p>
			<p ref={addToRefs} className="mb-4 text-justify">
				I{"'"}m skilled in Python, Java, C++, PHP, React, and web
				technologies like HTML, CSS, and JavaScript. Currently, I’m
				working on projects like {"'"}Emoji World{"'"} and an
				event-based app for showcasing events in Bangladesh.
			</p>
			<p ref={addToRefs} className="">
				I{"'"}m always excited to learn and collaborate. Feel free to
				reach out to connect!
			</p>
			<h2 ref={addToTitleRefs} className="text-2xl font-bold mt-6 mb-4">Technical Skills</h2>
			<ul className="text-neutral-600">
				<li ref={addToRefs} className="mb-5 max-w-xl md:text-lg mx-auto">
					<LanguagesSkills />
				</li>
				<li ref={addToRefs} className="mb-5 max-w-xl md:text-lg mx-auto">
					<FrontendDevelopmentSkills />
				</li>
				<li ref={addToRefs} className="mb-5 max-w-xl md:text-lg mx-auto">
					<BackendDevelopmentSkills />
				</li>
				<li ref={addToRefs} className="mb-5 max-w-xl md:text-lg mx-auto">
					<ToolsAndPlatformsSkills />
				</li>
			</ul>
			<p ref={addToRefs} className="mb-4">
				<strong>Other Skills:</strong> Responsive Design, Problem
				Solving, Debugging, Teaching
			</p>
			<p ref={addToRefs} className="text-gray-600 font-roboto">
				I aim to combine creativity and technical expertise to deliver
				impactful solutions. Let’s create something amazing together!
			</p>
		</section>
	);
}
export default About;

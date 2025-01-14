import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaNode, FaPhp, FaPython, FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiNetlify, SiPostman, SiVite } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

function About() {
	return (
		<section
			id="about"
			className="mx-auto md:flex-row min-h-[calc(100vh-64px)] text-neutral-700 px-5"
		>
			<h2 className="text-3xl font-bold text-neutral-800 mb-4">
				About Me
			</h2>
			<p className="text-neutral-700 mb-4 text-justify">
				Hi, I'm <strong>Hussain Ahmed</strong>, a web developer with a
				passion for AI and open-source projects. I graduated in Computer
				Science and Engineering from Varendra University, where I built
				projects like an online shopping system, weather app, and Wordle
				game.
			</p>
			<p className="mb-4 text-justify">
				I'm skilled in Python, Java, C++, PHP, React, and web
				technologies like HTML, CSS, and JavaScript. Currently, I’m
				working on projects like 'Emoji World' and an event-based app
				for showcasing events in Bangladesh.
			</p>
			<p className="">
				I'm always excited to learn and collaborate. Feel free to reach
				out to connect!
			</p>
			<h2 className="text-2xl font-bold mt-6 mb-4">Technical Skills</h2>
			<ul className="text-neutral-600 mb-4 flex flex-col gap-3">
				<li className="flex gap-2 items-center flex-wrap">
					<strong>Languages:</strong>
					<FaPython className="text-3xl" />
					<FaJava className="text-3xl" />
					<TbBrandCpp className="text-3xl" />
					<FaPhp className="text-3xl" />
					<FaJs className="text-3xl" />
				</li>
				<li className="flex gap-2 items-center flex-wrap">
					<strong>Frontend Development:</strong>
					<FaHtml5 className="text-3xl" />
					<FaCss3 className="text-3xl" />
					<RiTailwindCssFill className="text-3xl" />
					<FaJs className="text-3xl" />
					<FaReact className="text-3xl" />
					<SiVite className="text-3xl" />
				</li>
				<li className="flex gap-2 items-center flex-wrap">
					<strong>Backend Development:</strong>
					<FaNode className="text-3xl" />
					<FaPhp className="text-3xl" />
					<SiMysql className="text-3xl" />
				</li>
				<li className="flex gap-2 items-center flex-wrap">
					<strong>Tools & Platforms:</strong>
					<FaGitAlt className="text-3xl" />
					<VscVscode className="text-3xl" />
					<SiNetlify className="text-3xl" />
					<FaGithub className="text-3xl" />
					<SiPostman className="text-3xl" />
				</li>
				<li>
					<strong>Other Skills:</strong> Responsive Design, Problem
					Solving, Debugging, Teaching
				</li>
			</ul>
			<p className="text-gray-600 font-roboto">
				I aim to combine creativity and technical expertise to deliver
				impactful solutions. Let’s create something amazing together!
			</p>
		</section>
	);
}
export default About;

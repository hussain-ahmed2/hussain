import { FaFileDownload } from "react-icons/fa";
import ProfilePicture from "../assets/profile-pic.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ReactTyped } from "react-typed";

function Home() {
	const homeRef = useRef();

	useGSAP(
		() => {
			const tl = gsap.timeline();
			const mm = gsap.matchMedia();

			tl.from(".profile-img", {
				opacity: 0,
				scale: 0,
				duration: 0.5,
				ease: "power",
			}).from(".word", {
				opacity: 0,
				x: 10,
				duration: 0.5,
				stagger: 0.1,
				ease: "elastic",
			});

			mm.add("(min-width: 768px)", () => {});
		},
		{ scope: homeRef }
	);

	return (
		<section
			ref={homeRef}
			id="home"
			className="mx-auto font-roboto container flex flex-col items-center justify-evenly md:gap-4 md:flex-row min-h-[calc(100vh-4rem)] p-5"
		>
			<div className="flex aspect-square items-center justify-center md:w-96 w-72 h-72 md:h-96 px-4">
				<img
					className="profile-img bg-white rounded-full"
					src={ProfilePicture}
					alt="Profile Picture"
				/>
			</div>
			<div className="p-4 max-md:text-center">
				<div className="text-2xl font-bold flex flex-col">
					<p className="word text-amber-500">Hi, I{"'"}m </p>
					<p className="word text-4xl font-poppins">
						<span className="text-teal-500">Hussain</span> Ahmed
					</p>
				</div>
				<p className="word text-2xl font-medium mt-2">
					<ReactTyped
						strings={[
							"Front-end Developer",
							"React Enthusiast",
							"Tailwind CSS Expert",
							"Problem Solver",
						]}
						typeSpeed={50}
						backSpeed={30}
						loop
					/>
				</p>

				<div className="word flex items-center gap-2 mt-3 cursor-default max-md:justify-center">
					Download my{" "}
					<a
						className="flex items-center gap-2 underline text-teal-600 hover:text-teal-500 transition duration-300 ease-in-out "
						href="resume.pdf"
						target="_blank"
					>
						resume
						<FaFileDownload />
					</a>
				</div>
				<div className="word flex items-center gap-2 mt-4 max-md:justify-center">
					<p className="text-sm">Find me on</p>
					<div className="flex items-center gap-2 text-3xl">
						<a
							href="http://github.com/hussain-ahmed2"
							target="_blank"
							className="text-neutral-700 hover:text-neutral-500 transition duration-300 ease-in-out"
							rel="noopener noreferrer"
						>
							<FaGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/hussainahmed2/"
							target="_blank"
							className="text-sky-700 hover:text-sky-500 transition duration-300 ease-in-out"
							rel="noopener noreferrer"
						>
							<FaLinkedin />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Home;

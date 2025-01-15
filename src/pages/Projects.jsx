import Project from '../components/Project';
import projects from '../data/projects-data';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Projects() {
    const sectionRef = useRef(null);
    const projectRefs = useRef([]);

    const addToProjectRefs = (el) => {
        if (el && !projectRefs.current.includes(el)) {
            projectRefs.current.push(el);
        }
    };

	useGSAP(
		() => {
			const tl = gsap.timeline();

            projectRefs.current.forEach((el, index) => {
                tl.fromTo(
					el,
					{
						opacity: 0,
						y: 50,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.3,
						delay: 0.2 * index,
						ease: "power",
						scrollTrigger: {
							trigger: el,
							start: "top 90%",
						},
					}
				);
            });
		},
		{ scope: sectionRef }
	);
  return (
		<section
			ref={sectionRef}
			id="projects"
			className="min-h-[calc(100vh-4rem)] container mx-auto p-5"
		>
			<h1 className="text-3xl font-bold mb-6">Projects</h1>
			<div className="border border-neutral-300 container mx-auto bg-neutral-100 rounded-xl p-4">
				<p className='mb-6 text-lg text-center font-medium font-poppins'>This is a collection of projects that I have worked on.</p>
				<div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
					{projects.map((project) => (
						<Project
							key={project.id}
							{...project}
							addToProjectRefs={addToProjectRefs}
						/>
					))}
				</div>
			</div>
		</section>
  );
}
export default Projects;

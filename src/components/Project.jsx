import PropTypes from "prop-types";

function Project({
	title,
	thumbnail,
	description,
	live,
	repo,
	addToProjectRefs,
}) {
	return (
		<div
			ref={addToProjectRefs}
			className="border group border-neutral-300 transition duration-300 shadow hover:shadow-lg rounded-md p-4 bg-white hover:bg-teal-100 hover:border-teal-300"
		>
			<div className="overflow-hidden aspect-video">
				<img
					className="mb-4 w-full h-full group-hover:scale-105 transition duration-300"
					src={thumbnail}
					alt={title}
				/>
			</div>

			<h2 className="text text-xl font-inter font-bold mt-2">{title}</h2>
			<p className="line-clamp-2 mt-1 mb-2">{description}</p>

			<div className="flex justify-between font-roboto">
				<a
					className="px-4 py-1 bg-emerald-500 rounded text-white transition-colors hover:bg-emerald-600"
					href={live}
					target="_blank"
					rel="noopener noreferrer"
				>
					Live
				</a>
				<a
					className="px-4 py-1 bg-purple-500 rounded text-white transition-colors hover:bg-purple-600"
					href={repo}
					target="_blank"
					rel="noopener noreferrer"
				>
					Repo
				</a>
			</div>
		</div>
	);
}
export default Project;

Project.propTypes = {
	title: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	live: PropTypes.string.isRequired,
	repo: PropTypes.string.isRequired,
	addToProjectRefs: PropTypes.func,
};

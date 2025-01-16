import { MdMail, MdPhone } from "react-icons/md";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const textRefs = useRef([]);
	const sectionRef = useRef(null);
	const headerRef = useRef(null);

	const addToRefs = (el) => {
		if (el && !textRefs.current.includes(el)) {
			textRefs.current.push(el);
		}
	};

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	useGSAP(
		() => {
			gsap.fromTo(
				headerRef.current,
				{
					opacity: 0,
					x: 50,
				},
				{
					opacity: 1,
					x: 0,
					duration: 0.5,
					ease: "power",
					scrollTrigger: {
						trigger: headerRef.current,
						start: "top 90%",
					},
				}
			);

			textRefs.current.forEach((el, index) => {
				gsap.fromTo(
					el,
					{
						opacity: 0,
						y: 50,
					},
					{
						opacity: 1,
						y: 0,
						duration: 0.5,
						delay: index * 0.1,
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
			id="contact"
			className="min-h-[calc(100vh-4rem)] p-5 mx-auto container"
		>
			<h1 ref={headerRef} className="text-3xl font-bold">
				Contact
			</h1>
			<p ref={addToRefs} className="my-3 text-center">
				Feel free to reach out! I’d love to hear from you.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
				<div className="">
					<p ref={addToRefs} className="mb-3 text-xl font-semibold">
						Contact me via
					</p>
					<p ref={addToRefs} className="flex gap-4 items-center mb-2">
						<span className="flex items-center gap-1">
							<span className="text-2xl">
								<MdMail />
							</span>
							Email:
						</span>
						<a href="mailto:hussainahmed.vu@gmail.com">
							hussainahmed.vu@gmail.com
						</a>
					</p>
					<p ref={addToRefs} className="flex gap-4 items-center mb-2">
						<span className="flex items-center gap-1">
							<span className="text-2xl">
								<MdPhone />
							</span>
							Phone:
						</span>
						<a href="tel:+88 018 741 174 18">+88 018 741 174 18</a>
					</p>
				</div>

				<div className="">
					<p
						ref={addToRefs}
						className="text-xl font-semibold mb-3 text-center"
					>
						Send me a message
					</p>

					<form
						ref={addToRefs}
						className="flex flex-col gap-4 border border-neutral-300 rounded-md p-5 mx-auto container max-w-2xl bg-neutral-50 shadow-md"
						onSubmit={handleSubmit}
					>
						<div className="flex flex-col mb-2 gap-1">
							<label htmlFor="name">Name</label>
							<input
								className="w-full border border-neutral-300 px-2 py-1 rounded outline-none focus:ring-2 ring-teal-500"
								type="text"
								name="name"
								id="name"
								placeholder="Enter your name"
								onChange={handleChange}
								value={formData.name}
								required
							/>
						</div>

						<div className="flex flex-col mb-2 gap-1">
							<label htmlFor="email">Email</label>
							<input
								className="w-full border border-neutral-300 px-2 py-1 rounded outline-none focus:ring-2 ring-teal-500"
								type="email"
								name="email"
								id="email"
								placeholder="Enter your email"
								onChange={handleChange}
								value={formData.email}
								required
								pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
							/>
						</div>

						<div className="flex flex-col mb-2 gap-1">
							<label htmlFor="message">Message</label>
							<textarea
								className="w-full border border-neutral-300 px-2 py-1 rounded outline-none focus:ring-2 ring-teal-500"
								type="text"
								rows="5"
								cols="30"
								name="message"
								id="message"
								placeholder="Enter your message"
								onChange={handleChange}
								value={formData.message}
								required
							/>
						</div>

						<button
							className="border bg-teal-500 text-white px-4 py-2 hover:bg-teal-600 transform"
							type="submit"
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
export default Contact;

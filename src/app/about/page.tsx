import Image from "next/image";
import srmu from "@/../public/srmu.jpg";
export default function page() {
	return (
		<div className="h-full flex flex-col gap-10 w-full p-10">
			<div className="w-full flex flex-col items-center justify-center text-white">
				<h1 className="text-center w-full text-6xl font-semibold">About Us</h1>
				<br />
				<p className="text-center md:w-1/2 w-full px-10">
				Blending academic excellence with real-world experience to shape future-ready leaders.
				</p>
			</div>
			<div className="flex flex-col gap-4 py-10 bg-white/40 rounded-3xl">
				<div className="w-full flex flex-col lg:flex-row px-5 gap-7 items-center justify-around ">
					<div className="order-2 lg:order-1 w-full lg:w-1/2">
						<h3 className="text-2xl font-bold uppercase leading-10 tracking-widest">
							Shri Ramswaroop Memorial University
							<br />
							<address className="text-sm capitalize ">Deva Road, Tindola, Barabanki, Uttar Pradesh, India - 225003</address>
						</h3>
						<p className="text-justify py-2 text-lg">
							<strong>Shri Ramswaroop Memorial University</strong> believes inimparting quality education to its students. The institute has its quality procedures such as learning
							material development including lab manuals, lecture notes, and exposure of students to the information available on the internet. SRMU has been delivering education to all
							ages of young minds in engineering & management fields of education. Our emphasis is that even though students come from different backgrounds when they go out, they are
							perfect professionals and worthy citizens of this great country India.
						</p>
					</div>
					<Image src={srmu} height={350} width={600} className="order-1 lg:order-2 rounded-xl" alt="Shri Ramswaroop Memorial University" />
				</div>
				<div className="w-full flex flex-col lg:flex-row p-10 gap-7 items-center justify-around rounded-3xl">
					<div className="order-2 w-full lg:w-1/2">
						<h3 className="text-2xl font-bold uppercase leading-10 tracking-widest">
							Computer Science and Engineering
							<br />
							<address className="text-sm capitalize ">Deva Road, Tindola, Barabanki, Uttar Pradesh, India - 225003</address>
						</h3>
						<p className="text-justify py-2 text-lg normal-case">
							Division of computer science and engineering was set up in the year 2012, with the target of giving quality training in the field of computer sciences. The division expects
							to be the center of excellence in giving worldwide standard training and conference in the field of software engineering and designing subsequently focuses to deliver
							internationally capable and self-restrained pc engineers. With quickly developing innovation and constant requirement for advancement, the office has consistently created
							quality experts, standing firm on significant footholds in the data innovation industry in india and abroad.
						</p>
					</div>
					<Image src={srmu} height={350} width={600} className="order-1 rounded-xl" alt="Shri Ramswaroop Memorial University" />
				</div>
				<hr />
				<div className="w-full flex flex-col px-10 pt-5 gap-7 items-center justify-around">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.463069273348!2d81.09534802544081!3d26.952231326623643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995ee81add328f%3A0xbe8acc99218572c9!2sShri%20Ramswaroop%20Memorial%20University%20(SRMU)!5e0!3m2!1sen!2sin!4v1730651130528!5m2!1sen!2sin"
						width={1200}
						height={300}
						loading={"lazy"}
						className="w-full rounded-xl"></iframe>
				</div>
			</div>
		</div>
	);
}

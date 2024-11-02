import image from "@/../public/About-img.png";
import Image from "next/image";
import srmu from "@/../public/srmu.jpg";
export default function page() {
	return (
		<div className="h-full flex flex-col gap-10 w-full p-10">
			<div className="w-full flex flex-row items-center justify-around">
				<h1 className="text-center w-1/3 text-6xl font-semibold">About Us</h1>
				<Image src={image} width={250} className="hidden lg:block scale-150" alt="Robot" />
			</div>
			<div className="flex flex-col gap-10 ">
				<div className="w-full flex flex-col lg:flex-row p-10 gap-7 items-center justify-center bg-white/20 rounded-3xl">
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
				<div className="w-full flex flex-col lg:flex-row p-10 gap-7 items-center justify-center bg-white/20 rounded-3xl">
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
			</div>
		</div>
	);
}

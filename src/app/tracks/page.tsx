import Track from "@/components/Track";
import { faFileInvoice, faCube, faImages, faShield } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import TrackBg from '@/../public/tracks.svg';
const tracks = [
	{
		icon: faFileInvoice,
		title: "Track-1",
		content: "Internet of Things / Blockchain, ML, AI, Computer Vision and Image Processing, Robotics /Automation, Vehicular Ad-hoc Networks",
	},
	{
		icon: faCube,
		title: "Track-2",
		content: "Distributed System and Security, Security and Privacy preservation in 5G networks, Security and Privacy for Cyber-Physical System",
	},
	{
		icon: faImages,
		title: "Track-3",
		content: "3D Printing and Additive Manufacturing, Renewable Energy, Multi-Micro Grid. VLSI/ Nanotechnology, Industry 4.0 and Network Security",
	},
	{
		icon: faShield,
		title: "Track-4",
		content:
			"Pharmaceutical and Green Chemistry, Recent advances in Natural Product, AI, in Pharmacy, Computational Biology and Biotechnology, PharmaTech and Product Development, Genetics & Molecular Biology",
	},
];
export default function page() {
	return (
		<div className="h-full flex flex-col gap-10 w-full p-10 items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center text-white">
				<h1 className="text-center w-full text-6xl font-semibold">Tracks</h1>
				<br />
				<p className="text-center md:w-1/2 w-full px-10">
					We continue in the Four-track format with keynote speakers being selected from both the community, and prominent researchers of related fields and influential managers in
					companies.
				</p>
			</div>
			<div className="flex flex-col lg:flex-row items-start justify-evenly lg:px-28 text-center px-10 py-20 gap-10 rounded-3xl bg-white/40">
				<div className="lg:w-1/3 w-full gap-5 flex flex-col items-center order-2 lg:order-1">
					{tracks.map((e, index) => {
						return <Track icon={e.icon} key={index} title={e.title} content={e.content} />;
					})}
				</div>
				<div className="lg:w-1/3 w-full order-1 lg:order-2 ">
					<Image src={TrackBg} alt="" height={500} width={500} />
				</div>

			</div>
		</div>
	);
}

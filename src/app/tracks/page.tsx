import Track from "@/components/Track";
import { faFileInvoice, faCube, faImages, faShield } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

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
		<div className="h-full flex flex-col gap-10 w-full p-10">
			<div className="w-full flex flex-col items-center justify-center">
				<h1 className="text-center w-full text-6xl font-semibold">Tracks</h1>
				<br />
				<p>
					We continue in the Four-track format with keynote speakers being selected from both the community, and prominent researchers of related fields and influential managers in
					companies.
				</p>
			</div>
			<div className="flex flex-col lg:flex-row px-28 py-10 gap-10 ">
				<div className="lg:w-1/2 w-full ">
					{tracks.map((e, index) => {
						return <Track icon={e.icon} key={index} title={e.title} content={e.content} />;
					})}
				</div>
				<div className="lg:w-1/2 w-full ">
					{tracks.map((e, index) => {
						return <Track icon={e.icon} key={index} title={e.title} content={e.content} />;
					})}
				</div>

			</div>
		</div>
	);
}

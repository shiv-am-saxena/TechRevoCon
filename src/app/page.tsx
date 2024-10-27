import Image from "next/image";
import Logo from "@/../public/logo (1).png";
import Link from "next/link";
export default function page() {
	return (
		<div className="flex flex-col lg:flex-row w-full">
			<div className="w-full lg:w-1/2 p-10 flex items-center justify-center">
				<Image src={Logo} height={150} width={150} className="hover:scale-125 h-fit w-fit duration-300" alt="Tech Revolution Conference" />
			</div>
			<div className="flex-shrink-0 flex flex-col gap-3">
				<h6>#CYBERCOM24 (IEEE Record. 63683)</h6>
				<h1>International Conference on Cybernation & Computation</h1>
				<h2>15-16, November, 2024</h2>
				<h3>HYBRID MODE</h3>
				<div className="lg:w-1/3 w-full pr-5 flex text-white justify-between items-center">
					<Link href="/about" className="px-5 hover:text-black hover:bg-white duration-300 text-semibold py-3 rounded-[25px] bg-sky-700">About</Link>
					<Link href="/tracks"  className="px-5 w-32 py-3 ml-0 hover:ml-8 duration-300">Tracks →</Link>
				</div>
				<p>
					Article Submission Link (CMT): <a className="text-blue-900" href="https://cmt3.research.microsoft.com/CYBERCOM2024/Submission/Index">https://cmt3.research.microsoft.com/CYBERCOM2024/Submission/Index</a>
				</p>
				<p className="text-red-600 font-semibold text-xl">Extended Submission Deadline: 30, September, 2024</p>
			</div>
		</div>
	);
}

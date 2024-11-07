import Image from "next/image";
import Logo from "@/../public/logo (1).png";
import Link from "next/link";
export default function page() {
	return (
		<div className="flex flex-col lg:flex-row w-full">
			<div className="w-full lg:w-1/2 p-10 flex items-center justify-center">
				<Image src={Logo} height={200} width={200} className="lg:scale-[1.15] lg:hover:scale-[1.25] h-fit w-fit duration-300" alt="Tech Revolution Conference" />
			</div>
			<div className="flex p-5 w-full lg:w-1/2 text-white text-center lg:text-left items-center lg:items-start flex-col gap-6 font-semibold">
				<h6 className="font-semibold tracking-wider text-white text-xl">#CYBERCOM24 (IEEE Record. 63683)</h6>
				<h1 className="text-3xl leading-[50px] text-white tracking-widest font-semibold"><span className="font-bold text-4xl lg:text-6xl uppercase">International Conference</span><br /> on Tech Revolution</h1>
				<h2 className="text-3xl text-white">15-16, November, 2025</h2>
				<h3 className="text-4xl font-bold text-red-600">HYBRID MODE</h3>
				<div className="md:w-2/3 lg:w-1/2 w-fit gap-5 py-3 px-10 lg:px-0 text-lg flex flex-wrap text-white justify-between items-start capitalize">
					<Link href="#" className="px-7 hover:text-[#740fd6e6] border-2 border-white hover:border-white duration-300 text-semibold py-3 rounded-md bg-transparent hover:bg-white">Submit your paper</Link>
					<Link href="/about" className="px-7 hover:text-[#740fd6e6] border-2 border-white hover:border-white duration-300 text-semibold py-3 rounded-md bg-transparent hover:bg-white">About</Link>
					<Link href="/registration" className="px-7 hover:text-[#740fd6e6] border-2 border-white hover:border-white duration-300 text-semibold py-3 rounded-md bg-transparent hover:bg-white">Registration</Link>
					<Link href="/about" className="px-7 hover:text-[#740fd6e6] border-2 border-white hover:border-white duration-300 text-semibold py-3 rounded-md bg-transparent hover:bg-white">Tracks</Link>
				</div>
				<p className="w-full hidden text-xl">
					Article Submission Link (CMT): <a className="text-blue-900" href="https://cmt3.research.microsoft.com/CYBERCOM2024/Submission/Index">Link</a>
				</p>
				<p className="text-red-600 hidden font-semibold text-xl">Extended Submission Deadline: 30, September, 2024</p>
			</div>
		</div>
	);
}

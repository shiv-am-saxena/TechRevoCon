import Image from "next/image";
import React from "react";
import Rbot from "@/../public/Nav-img.png";
export default function Robot() {
	return (
		<Image src={Rbot} className="hidden z-10 lg:block lg:absolute blur-3xl opacity-0 top-10 xl:left-2 2xl:left-32 hover:opacity-100 hover:blur-0 hover:-top-10 duration-500 " height={100} width={75} alt="Tech Revolution Conference" />
	);
}

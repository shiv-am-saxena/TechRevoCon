import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Track({icon, title, content} : {icon:IconProp, title:string, content:string}) {
	return (
		<div className="flex items-center flex-col lg:flex-row lg:space-x-8">
			<div className="text-[#740fd6e6]">
				<FontAwesomeIcon className="w-10 h-10" icon={icon}/>
			</div>
			<div>
				<h3 className="text-2xl font-bold text-center lg:text-left">{title}</h3>
				<p className="text-black text-justify font-medium">{content}</p>
			</div>
		</div>
	);
}

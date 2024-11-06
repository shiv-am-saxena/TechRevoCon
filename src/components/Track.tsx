import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Track({icon, title, content} : {icon:IconProp, title:string, content:string}) {
	return (
		<div className="flex items-start space-x-4">
			<div className="text-indigo-500">
				<FontAwesomeIcon className="w-8 h-8" icon={icon} />
			</div>
			<div>
				<h3 className="text-xl font-semibold">{title}</h3>
				<p className="text-gray-600">{content}</p>
			</div>
		</div>
	);
}

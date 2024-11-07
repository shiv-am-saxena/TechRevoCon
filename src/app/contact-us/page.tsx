import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function page() {
	return (
		<div className="h-full flex flex-col gap-10 w-full p-10 items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center text-white">
				<h1 className="text-center w-full text-6xl font-semibold">Contact Us</h1>
				<br />
				<p className="text-center lg:w-1/2 w-full px-5 hidden">Guiding you towards excellence with clarity, integrity, and respect our principles for a successful and supportive community.</p>
			</div>
			<div className="flex flex-col justify-center items-center gap-6 p-5 lg:px-28 lg:py-20 bg-white/40 rounded-xl w-full">
				<div className="flex flex-col lg:flex-row justify-center items-center gap-6 w-full">
					<div className="flex flex-col h-64 items-center text-center p-6 bg-white shadow-lg rounded-lg w-full sm:w-2/3 lg:w-1/3 border border-gray-200">
						<FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-600 text-3xl mb-4" />
						<h2 className="text-lg font-semibold text-gray-800">ADDRESS FOR CORRESPONDENCE</h2>
						<p className="text-gray-600 mt-2">
							TechRevoCon-2025,
							<br />
							Shri Ramswaroop Memorial University,
							<br />
							Deva Road, Tindola, Barabanki, Uttar Pradesh, India - 225003
						</p>
					</div>

					<div className="flex flex-col h-64 items-center justify-center text-center p-6 bg-white shadow-lg rounded-lg w-full sm:w-2/3 lg:w-1/3 border border-gray-200">
						<FontAwesomeIcon icon={faEnvelope} className="text-purple-600 text-3xl mb-4" />
						<h2 className="text-lg font-semibold text-gray-800">Email</h2>
						<a className="text-gray-600 mt-2" href="mailto:shivam2003official@gmail.com">hodcse@srmu.ac.in</a>
					</div>

					<div className="flex flex-col h-64 items-center justify-center text-center p-6 bg-white shadow-lg rounded-lg w-full sm:w-2/3 lg:w-1/3 border border-gray-200">
						<FontAwesomeIcon icon={faPhone} className="text-purple-600 text-3xl mb-4" />
						<h2 className="text-lg font-semibold text-gray-800">CONTACT NUMBERS</h2>
						<p className="text-gray-600 mt-2">
							Dr. Satya Bhushan Verma +91 8840170302
							<br />
							Dr. Bipin Kumar Singh +91 8392006007
							<br />
							Dr. Ganesh Chandra +91 7355150794
							<br />
							Mr. Brijesh Pandey +91 8874205379
						</p>
					</div>
				</div>
				<div className="w-full flex items-center justify-around">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.463069273348!2d81.09534802544081!3d26.952231326623643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995ee81add328f%3A0xbe8acc99218572c9!2sShri%20Ramswaroop%20Memorial%20University%20(SRMU)!5e0!3m2!1sen!2sin!4v1730651130528!5m2!1sen!2sin"
						width={1200}
						height={200}
						loading={"lazy"}
						className="w-full rounded-xl"></iframe>
				</div>
			</div>
		</div>
	);
}

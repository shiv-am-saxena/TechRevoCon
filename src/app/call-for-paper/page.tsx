import { faFileDownload, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

export default function page() {
	return (
		<div className="h-full flex flex-col gap-10 w-full p-10 items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center text-white">
				<h1 className="text-center w-full text-6xl font-semibold">Call For Paper</h1>
				<br />
				<p className="text-center lg:w-1/2 w-full px-5">International Conference on Tech Revolution-2025.</p>
			</div>
			<div className="flex flex-col justify-center items-center gap-6 p-5 lg:px-28 lg:py-20 bg-white/40 rounded-xl w-full">
				<p className="text-center text-sm lg:text-base font-medium text-white mb-10 px-5">
					The conference ICEICT-2022 is being organized by the Dept of Computer Science & Engineering, Goel Institute of Technology, Lucknow, Uttar Pradesh, during 13-14 May-2022. It will
					feature world-class keynote speakers, special sessions, along with regular/oral paper presentations. The conference welcomes paper submissions from researchers, practitioners,
					academicians, and students, covering myriad tracks in the field of Computer Science and Engineering and associated research areas. Original unpublished manuscripts, not currently
					under review in any other journal or conference.
				</p>

				<div className="flex flex-col lg:flex-row justify-center items-center gap-6 w-full max-w-5xl">
					<div className="flex flex-col items-center text-center p-10 bg-white shadow-lg rounded-lg w-full lg:w-1/3 border border-gray-200">
						<FontAwesomeIcon icon={faUser} className="text-blue-600 text-3xl mb-4" />
						<h2 className="text-lg font-semibold text-gray-800">Participants Registration</h2>
						<a href="https://forms.gle/n7r3AWFsXza6F3NPA" className="text-blue-500 mt-2 hover:underline" target="_blank" rel="noopener noreferrer">
							Link{" "}
						</a>
					</div>

					<div className="flex flex-col items-center text-center p-10 bg-white shadow-lg rounded-lg w-full lg:w-1/3 border border-gray-200">
						<FontAwesomeIcon icon={faFileDownload} className="text-orange-500 text-3xl mb-4" />
						<h2 className="text-lg font-semibold text-gray-800">Download Template</h2>
						<p className="text-gray-600 mt-2">Template in Word</p>
					</div>

					<div className="flex flex-col items-center text-center p-10 bg-white shadow-lg rounded-lg w-full lg:w-1/3 border border-gray-200">
						<FontAwesomeIcon icon={faFileAlt} className="text-pink-600 text-3xl mb-4" />
						<h2 className="text-lg font-semibold text-gray-800">Download Copyright Form</h2>
						<p className="text-gray-600 mt-2">Copyright Form</p>
					</div>
				</div>
			</div>
		</div>
	);
}

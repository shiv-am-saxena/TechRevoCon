export default function page() {
	return (
		<div className="h-full flex flex-col gap-10 w-full p-10 items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center text-white">
				<h1 className="text-center w-full text-6xl font-semibold">Guidelines</h1>
				<br />
				<p className="text-center lg:w-1/2 w-full px-5">Guiding you towards excellence with clarity, integrity, and respect our principles for a successful and supportive community.</p>
			</div>
			<div className="flex flex-col items-start justify-evenly lg:px-28 px-5 lg:py-20 py-5 gap-10 rounded-3xl bg-white/40">
				<div>
					<h3 className="font-medium text-xl">Important Points for manuscript prepration</h3>
					<ul className="list-disc pl-5 text-justify flex flex-col gap-1">
						<li>Paper must be an unpublished novel research work and it should be written in either British or American style English but not on both.</li>
						<li>Anyone author should be assigned as a Corresponding Author for any future communication with the conference. The number of authors in a manuscript should not exceed 6.</li>
						<li>Full paper submission should contain 6-8 pages.</li>
						<li>Avoid including affiliation/acknowledgement footnotes. If it cannot be avoided, insert them at the end of the text, just above the references.</li>
						<li>Any tables or figures must vbe numbered and it should be of high quality.</li>
						<li>
							Author should ensure that the article has been thoroughly reviewed for typographical and grammatical mistakes before submitting it. If English is not your first language,
							have a native English speaker to proofread your paper. Paper will be returned if the level of English is deemed insufficient for publication.
						</li>
						<li>
							All the articles will be submitted through CMT (LINK). However, if anyone encounters ant problem while submission may contact at{" "}
							<a href="mailto:cybercom@gehu.ac.in" className="text-blue-700 font-semibold">cybercom@gehu.ac.in</a>. All the accepted and presented papers of TechRevoCon-2025 will be submitted to inclusion into IEEE Xplore
							subject to meeting IEEE Xplore's scope. **Indexing: Scopus
						</li>
					</ul>
				</div>
				<div>
					<h4 className="font-medium text-xl">Paper Formatting</h4>
					<ul className="list-disc pl-5 text-justify flex flex-col gap-1">
						<li>Articles may be edited for clarity and grammatical accuracy, and it should be copy edited according to the publisher manuscript style.</li>
						<li>Papers must be written in a Times New Roman font, single spacing: justified alignment according to the aforementioned template.</li>
						<li>
							Each Paper has to be broken down into the following sections when you submit:
							<ol  className="list-decimal pl-5 text-justify flex flex-col gap-1">
								<li>Abstract</li>
								<li>Background, Motivation and Objective</li>
								<li>Statement of Contribution/Methods</li>
								<li>Results, Discussions and Conclusion</li>
								<li>Future Research Direction</li>
							</ol>
						</li>
						<li>The manuscript should be prepared in IEEE format using MS WORD.</li>
						<li>
							The figures / graphs / plots in the manuscript MUST be of good resolution (600 dpi or more), tables MUST NOT be in pictorial format. Text in figures should not be too
							small, and preferably of equal size as text of the article.
						</li>
						<li>Figures, text, or the tables MUST be visible within boundary of the text area of the page and MUST NOT go beyond it.</li>
						<li>
							Do NOT use any Social / Academic titles (e.g. Mr.,Ms.,Dr.,Prof. etc) preceding the author names. Do NOT mention the position of a person (e.g., research scholar, student,
							assistant professor, professor, IEEE member, IEEE student member etc.) in the affiliation.
						</li>
						<li>
							Mention full address, affiliation, and email of ALL authors, specify a corresponding author with the corresponding e-mail ID. [Once an article is accepted, the publisher
							will send the proofreading of article to this e-mail]. Articles must be written in spell checked and grammatically correct English.
						</li>
						<li>
							All references, figures, and tables should be numbered in sequence starting from 1 and MUST be duly cited / referred within the text. <br />
							<a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/Conference-template-A4.doc" className="text-blue-700 font-semibold">Download Paper Template (Microsoft Word)</a>
						</li>
					</ul>
				</div>
				<div>
					<h4 className="font-medium text-xl">Review Process</h4>
					<ul  className="list-disc pl-5 text-justify flex flex-col gap-1">
						<li>To ensure high scientific quality, all papers will be reviewed by the Scientific Committee Members.</li>
						<li>
							Once the reviewing process is complete, the corresponding author of each paper will be notified of the acceptance/revision/rejection by e-mail. The authors are required to
							follow the reviews in order to improve their paper before their final submission.
						</li>
					</ul>
				</div>
				<div>
					<h4 className="font-medium text-xl">Notification of Acceptance or Rejection</h4>
					<ul className="list-disc pl-5 text-justify flex flex-col gap-1">
						<li>
							On or before the scheduled date, the organizing committee will notify the corresponding author of the acceptance or rejection of the paper to the conference program. When
							the paper is accepted in CYBERCOM, the corresponding author is encouraged to update the paper to meet any recommendations provided by the reviewers.
						</li>
						<li>
							Rejection may be due to different reasons: Out of Scope, high plagiarism. The paper once rejected by the conference committee will never be considered for the conference.
							Authors of the rejected paper should avoid making new submission with the already rejected paper.
						</li>
					</ul>
				</div>
				<div>
					<h4 className="font-medium text-xl">Academic Ethics and Conference Policy:</h4>
					<ul className="list-disc pl-5 text-justify flex flex-col gap-1">
						<li>
							The authors should abide to the guidelines mentioned below before submitting the paper, if any dispute arises during peer review or after acceptance and publication and if
							authors are unable to give a valid explanation, CYBERCOM retains the right to remove a submission from the editing process.
						</li>
					</ul>
				</div>
				<div>
					<h4 className="font-medium text-xl">Plagiarism</h4>
					<ul className="list-disc pl-5 text-justify flex flex-col gap-1">
						<li>Acceptable plagiarism range is less than 10% (excluding references) with 0% AI Plagiarism.</li>
						<li>Plagiarism, image manipulation, and data fabrication are not tolerated.</li>
						<li>
							Plagiarism includes copying research ideas, text, images, or data from another source/research literature, even from the author's own publications without giving any credit
							to the original source.
						</li>
						<li>
							Text copied from another source must be reused within quotations, and the original source must be referenced. If the design of a research, or the structure or language of
							the publication, was inspired by previous research, the corresponding works must be explicitly cited.
						</li>
						<li>If plagiarism is detected during the peer review process, the manuscript will be rejected. If plagiarism is detected after publication, we will retract the paper.</li>
					</ul>
				</div>
				<div>
					<h4 className="font-medium text-xl">Copyright</h4>
					<ul className="list-disc pl-5 text-justify flex flex-col gap-1">
						<li>
							As an author/editor of a work, you may be responsible for overseeing the inclusion of third party content. By 'third party content' we mean any work that you have not
							created yourself and which you have reproduced or adapted from other sources.
						</li>
						<li>
							Authors remain fully responsible for ensuring that they have obtained, documented and paid for (when applicable), all necessary rights to use third party content in their
							works. If authors chose to reuse third party content from a previous edition of their work, they are also responsible for ensuring they obtained permission from the third
							party for new editions.
						</li>
					</ul>
				</div>
				<div>
					<h5 className="font-medium text-xl">Note:</h5>
					<ul className="list-disc pl-5 text-justify flex flex-col gap-1">
						<li>
							In no case organizing institute or any of the organizing team members will be responsible, if the article is rejected at any phase due to quality issues, before or after
							acceptance.Additionally, please note that in order to promote offline presentations, only presenters who are presenting offline will be provided with the kit.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

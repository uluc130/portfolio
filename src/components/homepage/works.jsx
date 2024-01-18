import React from "react";
import { faBriefcase, faCertificate, faSchool } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<><div className="works">
			<Card
				icon={faSchool}
				title="Education"
				body={<div className="works-body">
					<div className="work">
						<img
							src="bogazici-university-logo.jpeg"
							alt="bogazici"
							className="work-image" />
						<div className="work-title">Bogazici University</div>
						<div className="work-subtitle">
							B.Sc. in Management Information Systems
						</div>
						<div className="work-duration">1999 - 2003</div>
					</div>

					<div className="work">
						<img
							src="Galatasaray_highschool_logo.png"
							alt="twitter"
							className="work-image" />
						<div className="work-title">Galatasaray Highschool</div>
						<div className="work-subtitle">

						</div>
						<div className="work-duration">1990 - 1998</div>
					</div>
				</div>} />

		</div><div className="works">
				<Card
					icon={faCertificate}
					title="Certifications"
					body={<div className="works-body">
						<div className="work">
							<img
								src="coursera-Logo_600x600.svg.png"
								alt="bogazici"
								className="work-image" />
							<div className="work-title">Meta iOS Developer Specialization</div>
							<div className="work-subtitle">
								Coursera
							</div>
							<div className="work-duration">September 2023</div>
						</div>

						<div className="work">
							<img
								src="Udemy-Logo.png"
								alt="udemy"
								className="work-image" />
							<div className="work-title">SwiftUI & Node.JS FullStack</div>
							<div className="work-subtitle">
								Udemy
							</div>
							<div className="work-duration">October 2023</div>
						</div>
					</div>} />

			</div></>
		
	);
};

export default Works;

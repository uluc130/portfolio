import React from "react";
import { faBriefcase, faCertificate, faSchool } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Card from "./common/card";
import INFO from "../data/user";

import "./homepage/styles/works.css"

const Certifications = () => {
	return (
		<>
		<div className="works">
				<Card
					icon={faCertificate}
					title="Certifications"
					body={<div className="works-body">
						<Link to={INFO.certifications[0].link}>
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
						</Link>
						<Link to={INFO.certifications[1].link}>
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
						</Link>
					</div>} />

		</div>
	</>
		
	);
};

export default Certifications;

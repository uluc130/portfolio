import React from "react";

import Project from "./project";

import INFO from "../../data/user";
import Card from "../common/card";
import { faBriefcase, faCertificate, faProjectDiagram, faSchool } from "@fortawesome/free-solid-svg-icons";

import "./styles/allProjects.css";
import { faRProject } from "@fortawesome/free-brands-svg-icons";

const AllProjects = () => {
	return (
		<Card
				icon={faProjectDiagram}
				title="Latest Work"
				body={
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
		}
		/>

	);
};

export default AllProjects;

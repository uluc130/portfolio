import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import TechStack from "../components/techStack";

import INFO from "../data/user";
import SEO from "../data/seo";
import Works from "../components/homepage/works";


import "./styles/about.css";
import Certifications from "../components/certifications";
import { faBold } from "@fortawesome/free-solid-svg-icons";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
									<p className="bold-text">Other Facts</p>
									<ul>
										<li>I am a triathlete. One sport was not enough, so I swim, bike and run 🏊🚴‍♂️🏃‍♂️</li>
										<li>My experience in sport, has taught me the importance of hard work, dedication, and perseverance and planning.</li>
										<li>I am fluent in Turkish, English, French an Italian</li>
										<li>I am very proud to be father to a sweet girl, and husband to a lovely wife.</li>
										<li>My favorite colors are 🟨🟥 </li>
									</ul>
								</div>
								
								
								<div className="homepage-techstack">
									<TechStack/>
								</div>
								<div className="homepage-works">
									<Works />
									<Certifications />
								</div>
								
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpeg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;

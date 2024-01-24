import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import ContactUs from "../components/contactForm";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={64} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							<p>
							You can use the contact form below to get in touch. Simply fill out the
							required fields and I'll get back to you as soon as
							possible. Alternatively, please feel free to email me directly at
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>.
							</p>
							
						</div>
							
					</div>
					<div className="row">
						<div className="column">
								<div className="contactus-container">
									<ContactUs/>
								</div>
								
						</div>
						<div className="column">
							<div className="socials-container">
								<div className="contact-socials">
									<Socials />
								</div>
							</div>
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

export default Contact;

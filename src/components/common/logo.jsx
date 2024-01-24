import React from "react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		  };
		});
	const imageElement = (
		<img src={INFO.main.logo} alt="logo" className="logo" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
			{/* <div>
				<h2>Width: {windowWidth}</h2>
				
    		</div> */}
		</React.Fragment>
	);
};

export default Logo;

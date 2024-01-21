import { faNode, faSwift } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faCertificate, faProjectDiagram, faSchool } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import INFO from "../data/user";
import "../components/techStack.css"
import Card from "./common/card";


const TechStack = () => {
    return (
        <>
            <div>
            
                                    <div className="techStack-container">
                                        
                                           <Card
                                            icon={faBriefcase}
                                            title="My Tech Stack"
                                            body={
                                                <div className="tech-items">
                                            {INFO.techStack.map((tech) => (
                                                        <div className="tech-item-body">
                                                            <FontAwesomeIcon 
                                                                icon={tech.logo}
                                                                className="item-icon"
                                                                title={tech.name}
                                                            />
                                                            <div className="item-name">
                                                                {tech.name}
                                                            </div>
                                                        </div>
                                                        

                                                    ))}
                                           </div>
                                            }
                                            />

                                           
                                            
                                        
                                        
                                    </div>
                                    
                
            </div>

        </>
    );
};
export default TechStack;


import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

export default () => (
    <div className="icons-container">
        <ul className="network-icon">
            <li>
                <a href="https://www.linkedin.com/in/davidsilveragabriel/" className="hvr-grow">
                    <LinkedInIcon fontSize="large"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/DavidSilveraGabriel" className="hvr-grow">
                    <GitHubIcon fontSize="large"/>
                </a>
            </li>
            <li>
                <a href="https://docs.google.com/document/d/1JNiHcGirVjN4OmUs5n9jfRKhaX7Ofhr0hdVUsatEa3Q/edit?usp=sharing"
                 className="hvr-grow">
                    <BusinessCenterIcon fontSize="large"/>
                </a>
            </li>
        </ul>
    </div>
)
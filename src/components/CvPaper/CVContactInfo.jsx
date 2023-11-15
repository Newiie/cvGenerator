/* eslint-disable react/prop-types */
import { faEnvelope, faLink, faLocationPin, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Paper.css'
export default function CVContactInfo({CVInfo}) {
    return <div className="cv-contact-info">
         <div className="CVCI-Item">
            <FontAwesomeIcon icon={faEnvelope} className="clr-blue"/>
            <p className="cv-text">{CVInfo.email ? CVInfo.email : "jethrocenas@gmail.com"}</p>
         </div>
         <div className="CVCI-Item">
            <FontAwesomeIcon icon={faMobile} className="clr-blue"/>
            <p className="cv-text">{CVInfo.phoneNum ? CVInfo.phoneNum : "09610875651"}</p>
         </div>
         <div className="CVCI-Item">
            <FontAwesomeIcon icon={faLocationPin} className="clr-blue"/>
            <p className="cv-text">{CVInfo.location ? CVInfo.location : "Philippines"}</p>
         </div>
         <div className="CVCI-Item">
            <FontAwesomeIcon icon={faLink} className="clr-blue"/>
            <p className="cv-text">{CVInfo.link ? CVInfo.link : "linkedin.sample.com/johndoe"}</p>
         </div>
    </div>
}
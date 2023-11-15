/* eslint-disable react/prop-types */
import CVBasicInfo from "./CVBasicInfo";
import CVContactInfo from "./CVContactInfo";
import CVEducBackg from "./CVEducBackg";
import CVTEchSkills from "./CVTechSkills";
import CVWorkExp from "./CVWorkExp";

export default function PaperItem({BIInfo, CVInfo, WEInfo, EDInfo}) {
    return <div id="paperItem">
        <CVBasicInfo BIInfo={BIInfo} />
        <CVContactInfo CVInfo={CVInfo}/>
        <div className="paperBelow">
            <CVEducBackg EDInfo={EDInfo} />
            <CVWorkExp  WEInfo={WEInfo}/>
        </div>
        <CVTEchSkills />
    </div>
}
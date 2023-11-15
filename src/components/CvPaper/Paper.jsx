/* eslint-disable react/prop-types */
import './Paper.css'
import PaperItem from './PaperItem'

export default function Paper({BIInfo, CVInfo, WEInfo, EDInfo}) {
    return <div id="paper-container">
        <PaperItem BIInfo={BIInfo} CVInfo={CVInfo}  WEInfo={WEInfo} EDInfo={EDInfo}/>
    </div>
    
}
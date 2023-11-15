/* eslint-disable react/prop-types */
import './Paper.css'

export default function CVEducBackg({EDInfo}) {
    return <div>
        <h1 className="cv-header">Education Background</h1>
        {   EDInfo.length > 0 ? (EDInfo.map(educ => {
                return <div className="cv-educ-content" key={educ.univ}>
                <div className="cv-info-container">
                    <div className="cv-info-title">
                        <li className='fw-bold fs-300 ff-montseratt | cveb-title'>{educ.univ}</li>
                        <p className='fw-thin ff-raleway fs-300 | cveb-subtitle'>{educ.program}</p>
                    </div>
                    <div className="fw-thin fs-200 fstyle-italic | cv-date">{educ.startYear}-{educ.gradYear}</div>
                </div>
                <ul className='addinfo-list'>
                    {
                        educ.awards.map(resp => {
                            return <li key={resp}>{resp}</li>
                        })
                    }
                </ul>
            </div>
            })) : (<div className="cv-educ-content">
            <div className="cv-info-container">
                <div className="cv-info-title">
                    <li className='fw-bold fs-300 ff-montseratt | cveb-title'>Cebu Institute of University</li>
                    <p className='fw-thin ff-raleway fs-300 | cveb-subtitle'>University of London</p>
                </div>
                <div className="fw-thin fs-200 fstyle-italic | cv-date">Jul 2010-present</div>
            </div>
            <ul className   ='addinfo-list'>
                <li>asd</li>
                <li>asd</li>
            </ul>
        </div>)
        } 
    </div>
}
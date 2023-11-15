/* eslint-disable react/prop-types */


export default function CVWorkExp({WEInfo}) {
    return <div>
        <h1 className="cv-header">Work Experience</h1>
            {  WEInfo.length > 0 ? WEInfo.map(weExp => {
                return <div className="cv-educ-content" key={weExp.pos}>
                <div className="cv-info-container">
                    <div className="cv-info-title">
                        <li className='fw-bold fs-300 ff-montseratt | cveb-title'>{weExp.pos}</li>
                        <p className='fw-thin ff-raleway fs-300 | cveb-subtitle'>{weExp.org}</p>
                    </div>
                    <div className="fw-thin fs-200 fstyle-italic | cv-date">{weExp.WESYear}-{weExp.WEEndYear}</div>
                </div>
                <ul className='addinfo-list'>
                    {
                        weExp.respo.map(resp => {
                            return <li key={resp}>{resp}</li>
                        })
                    }
                </ul>
            </div>
            }) : <div className="cv-educ-content" >
            <div className="cv-info-container">
                <div className="cv-info-title">
                    <li className='fw-bold fs-300 ff-montseratt | cveb-title'>Web Developer</li>
                    <p className='fw-thin ff-raleway fs-300 | cveb-subtitle'>Accentyre</p>
                </div>
                <div className="fw-thin fs-200 fstyle-italic | cv-date">July 2023 - present</div>
            </div>
            <ul className='addinfo-list'>
                <li>asd</li>
                <li>asd</li>
            </ul>
        </div>
        
        }
    </div>
}
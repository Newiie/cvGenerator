/* eslint-disable react/prop-types */
export default function ContactInfoForm({CVInfo, setCVInfo}) {

    return (
        <form action="" className='form-body text-clr'>
            <h1 className="form-header">Contact Info</h1>
            <label htmlFor="ci-email" className="formLabel">
                <span className='text'>Email: </span>
                <input value={CVInfo.email} onChange={(e) => setCVInfo({...CVInfo, email: e.target.value})} type="text" id='ci-email' name='ci-email' placeholder="johndoe@gmail.com" />
            </label>
            <label htmlFor="ci-phnNumber" className="formLabel">
                <span className='text'>Phone Number:</span>
                <input value={CVInfo.phoneNum} onChange={(e) => setCVInfo({...CVInfo, phoneNum: e.target.value})} type="text" id='ci-phnNumber' name='ci-phnNumber' placeholder="Doe" />
            </label>
            <label htmlFor="ci-location" className="formLabel">
                <span className='text'>Location:</span>
                <input value={CVInfo.location} onChange={(e) => setCVInfo({...CVInfo, location: e.target.value})} type="text" id='ci-location' name='ci-location' placeholder="London, UK" />
            </label>
            <label htmlFor="ci-website" className="formLabel">
                <span className='text'>Website:</span>
                <input value={CVInfo.link} onChange={(e) => setCVInfo({...CVInfo, link: e.target.value})} type="text" id='ci-website' name='ci-website' placeholder="linkedin.sample.com/johndoe" />
            </label>
        </form>
    )
}
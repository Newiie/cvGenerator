/* eslint-disable react/prop-types */
import './Form.css'

export default function BasicInfoForm({BIInfo, setBIInfo}) {


    return (
        <form action="" className='form-body text-clr'>
            <h1 className="form-header">Basic Info</h1>
            <label htmlFor="bi-firstName" className="formLabel">
                <span className='text'>First name:</span>
                <input value={BIInfo.Fname} onChange={(event) => setBIInfo({...BIInfo, Fname: event.target.value})} type="text" id='bi-firstName' name='bi-firstName' placeholder="John" />
            </label>
            <label htmlFor="bi-lastName" className="formLabel">
                <span className='text'>Last name:</span>
                <input onChange={(e) => setBIInfo({...BIInfo, Lname: e.target.value})} value={BIInfo.Lname} type="text" id='bi-lastName  ' name='bi-lastName' placeholder="Doe" />
            </label>
            <label htmlFor="bi-profTitle" className="formLabel">
                <span className='text'>Professional title:</span>
                <input onChange={(e) => setBIInfo({...BIInfo, ProfTitle: e.target.value})} value={BIInfo.ProfTItle} type="text" id='bi-profTitle' name='bi-profTitle' placeholder="Business Manager" />
            </label>
            <label htmlFor="bi-summary" className="formLabel">
                <span className='text'>Give a summary about yourself</span>
                <textarea value={BIInfo.Summary} onChange={(e) => setBIInfo({...BIInfo, Summary: e.target.value})} className="input-textarea" type="text" id='bi-summary' name='bi-summary' placeholder="Web developer" />
            </label>
        </form>
    );
}

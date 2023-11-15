/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import AdditionalInput from "./AdditionalInput";
import ToggleButton from "./ToggleButton";

export default function WorkExperienceInput({handleAddWorkExp}) {

    const [weObj, setWeObj] = useState({
        pos: '',
        org: '',
        WESYear: '',
        WEEndYear: '',
        respo: []
    });

    const handleAddRespo = (newRespo) => {
        setWeObj((prevExp) => ({
            ...prevExp,
            respo: [...prevExp.respo, newRespo]
        }))
    }

    const handleDeleteRespo = (key) => {
        const newRespo = weObj.respo.filter(res => res != key)
        setWeObj((prevWE) => ({
            ...prevWE,
            respo: newRespo
        }))
    }
    
    console.log(weObj)
    const [errHandler, setErrHandler] = useState({
        posErr: false,
        orgErr: false,
        sYearErr: false,
        eYearErr: false
    })

    const [hidden, setHidden] = useState(false);

    const handleHiddenOnClick = () => {
        setHidden(!hidden);
        (!hidden) ? setErrHandler(errHandler => ({...errHandler, eYearErr: false})) : '';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        (e.target.wePosition.value == '') ? setErrHandler({...errHandler, posErr: true}) :
        setErrHandler((errHandler) => ({...errHandler, posErr: false}));

        (e.target.weOrg.value == '') ? setErrHandler((errHandler) => ({...errHandler, orgErr: true})) :
        setErrHandler((errHandler) => ({...errHandler, orgErr: false}));

        // (e.target.weSyear.value == '') ? setErrHandler((errHandler) => ({...errHandler, sYearErr: true})) :
        // setErrHandler((errHandler) => ({...errHandler, sYearErr: false}));

        setErrHandler((errHandler) => ({
            ...errHandler,
            sYearErr: e.target.weSyear.value === ''
        }))
        
        if (e.target.weEndYear) {
            setErrHandler((errHandler) => ({
                ...errHandler,
                eYearErr: e.target.weEndYear.value === ''
            }));
            console.log("return end year error")
            if (e.target.weEndYear.value == '') return;
        } 

        if (e.target.wePosition.value == '' || e.target.weOrg.value == '' || e.target.weSyear.value == '') {
            console.log("return")
            return;
        }

        handleAddWorkExp({
            ...weObj,
            pos: e.target.wePosition.value,
            org: e.target.weOrg.value,
            WESYear: e.target.weSyear.value,
            WEEndYear: (e.target.weEndYear) ? e.target.weEndYear.value : "present"
        });
        console.log("done")
    }   

    return (
        <form action="" className='form-body text-clr' onSubmit={e => handleSubmit(e)}>
        <h1 className="form-header">Work Experience</h1>
        <label htmlFor="wePosition" className="formLabel">
            <span className='text'>Title/Position:</span>
            <input type="text" id='wePosition' name='wePosition' placeholder="johndoe@gmail.com" />
        </label>
        {errHandler.posErr && <p className="errorMessage">The Title/Position is required!</p>}

        <label htmlFor="weOrg" className="formLabel">
            <span className='text'>Workplace/Company/Organization</span>
            <input type="text" id='weOrg' name='weOrg' placeholder="Business Analyst" />
        </label>
        {errHandler.orgErr && <p className="errorMessage">The Workplace/Company/Organization is required!</p>}

        <label htmlFor="weSyear" className="formLabel">
            <span className='text'>Starting Year:</span>
            <input type="date" id='weSyear' name='weSyear' />
        </label>
        {errHandler.sYearErr && <p className="errorMessage">Starting Year is required!</p>}

        <label htmlFor="" className="formToggleBtn">
            <p>On-Going</p>
            <ToggleButton handleHiddenOnClick={handleHiddenOnClick}/>
        </label>

        {!hidden && <label htmlFor="weEndYear" className="formLabel">
            <span className='text'>End Year:</span>
            <input type="date" id='weEndYear' name='weEndYear' />
        </label>}
        {errHandler.eYearErr && <p className="errorMessage">End Year is required!</p>}

        <label htmlFor="weRespo" className="formLabel">
            <ul className="awardsContainer">
                {weObj.respo.map(res => {
                    return <li key={res}>
                        {res}
                        <FontAwesomeIcon icon={faCircleXmark} onClick={() => handleDeleteRespo(res)} className="cursor-pointer"/>
                    </li>
                })}
            </ul>
            <span className='text'>List your job responsibilities</span>
            <AdditionalInput handleAddAward={handleAddRespo} />
        </label>
        <button type="submit" className="buttonSubmit">Submit Work Background</button>
    </form>
    )
}
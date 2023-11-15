/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import AdditionalInput from "./AdditionalInput";
import ToggleButton from "./ToggleButton";

export default function EducationBackground({EDInfo, handleAddAward={handleAddAward}}) {

    const [EDObj, setEDObj] = useState({
        univ: '',
        program: '',
        startYear: '',
        gradYear: '',
        GPA: '',
        awards: []
    })

    const handleAddAwardObj = (newAward) => {
        setEDObj((prevExp) => ({
            ...prevExp,
            awards: [...prevExp.awards, newAward]
        }))
    }

    const handleDeletionAward = (key) => {
        const newRespo = EDObj.awards.filter(res => res != key)
        setEDObj((prevWE) => ({
            ...prevWE,
            awards: newRespo
        }))
    }


    const [errHandler, setErrHandler] = useState({
        edOrgErr: true,
        edCourseErr: true,
        edSyearErr: true,
        edGradYearErr: true,
    })

    const [gradHidden, setGradHidden] = useState(false);

    const handleHiddenOnClick = () => {
        setGradHidden(!gradHidden);
        (!gradHidden) ? setErrHandler({...errHandler, edGradYearErr: true}) : '';
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        
        // EDORG ERROR
        (e.target.edOrg.value == '') ?
         setErrHandler({...errHandler, edOrgErr: false}) :
         setErrHandler((errHandler) => ({...errHandler, edOrgErr: true}));

        (e.target.edCourse.value == '') ? 
        setErrHandler((errHandler) => ({...errHandler, edCourseErr: false})) :
        setErrHandler((errHandler) => ({...errHandler, edCourseErr: true}));

        (e.target.edSyear.value == '') ?
        setErrHandler((errHandler) => ({...errHandler, edSyearErr: false})) :
        setErrHandler((errHandler) => ({...errHandler, edSyearErr: true}));


        if (e.target.edGradYear) {
            setErrHandler((errHandler) => ({
                ...errHandler,
                edGradYearErr: e.target.edGradYear.value !== ''
            }))
            if (e.target.edGradYear.value === '') return;
        }

        handleAddAward({
            ...EDObj,
            univ: e.target.edOrg.value,
            program: e.target.edCourse.value,
            startYear: e.target.edSyear.value,
            gradYear: (e.target.edGradYear) ? e.target.edGradYear.value : "present",
            GPA: (e.target.edGpa) ? e.target.edGpa.value : "",
        })
        console.log(errHandler.edGradYearErr)
        console.log(e.target.edOrg.value);
        console.log(e.target.edSyear.value);
    }

    return (
        <form action="" className='form-body text-clr' onSubmit={(e) => handleOnSubmit(e)}>
            <h1 className="form-header">Education Background</h1>
            {EDInfo.map((ed, index) => {
                return <li key={index}>{ed.univ}</li>
            })}
            <label htmlFor="edOrg" className="formLabel">
                <span className='text'>University/Institution/Organization</span>
                <input type="text" id='edOrg' name='edOrg' placeholder="University of London" />
            </label>
            {!errHandler.edOrgErr && <p className="errorMessage">The Univ/Inst/Org is required</p>}
            <label htmlFor="edCourse" className="formLabel">
                <span className='text'>Program/Degree/Course</span>
                <input type="text" id='edCourse' name='edCourse' placeholder="Ph.D of Philosophy" />
            </label>
            {!errHandler.edCourseErr && <p className="errorMessage">The Program/Degree/Course is required</p>}
            <label htmlFor="edSyear" className="formLabel">
                <span className='text'>Starting Year:</span>
                <input type="date" id='edSyear' name='edSyear' />
            </label>
            {!errHandler.edSyearErr && <p className="errorMessage">You need to have starting year!</p>}
            <label htmlFor="" className="formToggleBtn">
                <p>On-Going</p>
                <ToggleButton handleHiddenOnClick={handleHiddenOnClick} />
            </label>

            {/* Grad Hidden */}
            {!gradHidden && <label htmlFor="edGradYear" className="formLabel">
                <span className='text'>Graduating Year:</span>
                <input type="date" id='edGradYear' name='edGradYear' />
            </label>}
            {!errHandler.edGradYearErr && <p className="errorMessage">You need to have Graduating year!</p>}

            <label htmlFor="edGpa" className="formLabel">
                <span className='text'>GPA (optional):</span>
                <input type="text" id='edGpa' name='edGpa' placeholder="3.9/4.0" />
            </label>
            <label htmlFor="edAwards" className="formLabel">
                <ul className="awardsContainer">
                    {EDObj.awards.map(award => {
                        return <li key={award}>{award}
                        <FontAwesomeIcon icon={faCircleXmark} id={award} className="cursor-pointer" onClick={() => handleDeletionAward(award)}/>
                        </li>
                    })}
                </ul>
                <span className='text'>Additional info (ex.awards, courses, thesis project)</span>
                <AdditionalInput handleAddAward={handleAddAwardObj}/>
            </label>
            <button type="submit" className="buttonSubmit">Submit Education Background</button>
        </form>
    )
}
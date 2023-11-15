/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import './AdditionalInput.css'

export default function AdditionalInput({handleAddAward}) {

    const handleOnClick = (e) => {
        e.preventDefault();
        console.log(e.target.closest(".addtnl-input-container"))
        const sibling = e.target.closest(".addtnl-input-container").querySelector('.addtnlInput');
        const newAward = sibling.value.trim();
        handleAddAward(newAward);
        sibling.value = '';
    }

    return (
        <div className="addtnl-input-container" >
            <input type="text" className="addtnlInput" placeholder="Press enter to submit an item.."/>
            <FontAwesomeIcon icon={faCirclePlus} className="fa-circle-plus" onClick={(e) => handleOnClick(e)}/>
        </div>
    )
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import BasicInfoForm from './components/BasicInfoForm'
import ContactInfoForm from './components/ContactInfoForm'
import EducationBackground from './components/EducationBackground'
import Header from './components/Header'
import OtherInfo from './components/OtherInfo'
import TechnicalSkillsForm from './components/TechnicalSkillsForm'
import WorkExperienceInput from './components/WorkExperienceInput'
import { faEye, faPrint } from '@fortawesome/free-solid-svg-icons'
import Paper from './components/CvPaper/Paper'
import { useState } from 'react'
import Clock from './Clock'

function App() {
  const [BIInfo, setBIInfo] = useState([{
    Fname: '',
    Lname: '',
    ProfTitle: '',
    Summary: ''
  }]);
  
  const [CVInfo, setCVInfo] = useState({
    email: '',
    phoneNum: '',
    location: '', 
    link: ''
  })

  const [EDInfo, setEDInfo] = useState([])
  
  const handleAddAward = (exp) => {
    setEDInfo(prevEduc => [...prevEduc, exp])
  }


  console.log("EDINFO", EDInfo);
  const [WEInfo, setWEInfo] = useState([]);

  const handleAddWorkExp = (exp) => {
    setWEInfo(prevWorkExp => [...prevWorkExp, exp])
  }

  // console.log(WEInfo)

  return (
    <>
    <div id='App'>
      
      <div id="cv">
        <Header />
        {/* <Clock /> */}
        <BasicInfoForm BIInfo={BIInfo} setBIInfo={setBIInfo}/>
        <ContactInfoForm CVInfo={CVInfo} setCVInfo={setCVInfo} />
        <EducationBackground  EDInfo={EDInfo} handleAddAward={handleAddAward} />
        <WorkExperienceInput WEInfo={WEInfo} handleAddWorkExp={handleAddWorkExp} />
        <TechnicalSkillsForm />
        <OtherInfo />
      </div>
      <Paper BIInfo={BIInfo} CVInfo={CVInfo} EDInfo={EDInfo} WEInfo={WEInfo} />
    </div>
    <div className="btn-prev-container">
    <div className="toggle-preview-btn">
        <FontAwesomeIcon icon={faEye} className='fa-eye' />
        <FontAwesomeIcon icon={faPrint} className='fa-eye hidden' />
    </div>
  </div>
  </>
  )
}

export default App

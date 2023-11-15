/* eslint-disable react/prop-types */

export default function CVBasicInfo({BIInfo}) {
    return <div>
        <h1 className="full-name-BI clr-blue">{BIInfo.Fname ? BIInfo.Fname :  "John"} {BIInfo.Lname ? BIInfo.Lname : "Doe"}</h1>
          
        <h3 className="prof-title-BI clr-blue ff-montseratt">{BIInfo.ProfTitle ? BIInfo.ProfTitle : "Business Manager"}</h3>
        <p className="cv-text | cvBI-self">{BIInfo.Summary ? BIInfo.Summary :  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corporis eligendi quos natus consectetur sint eum nobis dolore neque error reiciendis explicabo ex minima quae fugit, corrupti, temporibus soluta blanditiis."}</p>
    </div>
}
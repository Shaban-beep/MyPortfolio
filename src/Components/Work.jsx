import "./WorkCardStyles.css";
import React from 'react'
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"
// import {NavLink} from 'react-router-dom';

const Work = () => {
    // inshort work mn box ki cheezien banae aur card ko aik component mn banaya phir
    //card ka structure bana k img ka link ,title ,text, aur button k links wagaira aik alehda component mn as API banaye phir as props pass kiya
    // phir Work mn a kr aik card pe map method run kiya,aur values pe focus kiya 
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val, ind)=>{
                return(
            <WorkCard
            key ={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            source={val.sources}
                />
            )})}
        </div>
      
    </div>
  )
}

export default Work

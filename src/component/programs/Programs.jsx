import React from 'react'
import "./programs.css"
import{ programsData} from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"
const Programs = () => {
  return (
    <div className="programs" id='Programs'>
       <div className="programs-header">
         <span className='stroke-text'>EXPLORE OUR</span>
         <span >PROGRAMS</span>
         <span className='stroke-text'>TO SHAPE YOU</span>
        </div> 
        <div className="programs-cards">
            {programsData.map(prog=>(
                <div className="card">
                    {prog.image}
                    <span>{prog.heading}</span>
                    <span>{prog.details}</span>
                    <div className='join-now'>
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>

            ))}
        </div>
    </div>
  )
}

export default Programs
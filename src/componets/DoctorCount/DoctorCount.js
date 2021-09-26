import { counter } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import "./DoctorCount.css"
const DoctorCount = (props) => {
    
    const{count}=props;
    
    let total=0;
    for(const doctor of count){
        total=total + parseInt(doctor.salary)

    
     }
    return (
        <div>
              <h5 className="top-count"> <i class="far fa-user text-black mt-5 text-warning"></i> Add to Doctor:{props.count.length}</h5>

            <h5>Total Salary:${total}</h5> 
             <button className="button"> Buy Now</button> 
             
        </div>
    );
};

export default DoctorCount;
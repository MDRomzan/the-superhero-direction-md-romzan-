import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import DoctorCount from '../DoctorCount/DoctorCount';
import "./Main.css"
const Main = () => {
    const [doctors,setDoctor]=useState([]);
    const [count,setCount]=useState([]);
   
   


useEffect(()=>{
    fetch("/bestDcotor.json")
    .then(res =>res.json())
    .then(data =>setDoctor(data))

},[]);
const handleAddToCart=(doctor)=>{
   const newCount=[...count, doctor];
   setCount(newCount);
   

}


    return (
        <section className="container">
                
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            {
                           doctors.map(doctor => <Doctor 
                            key={doctor.id}
                            doctor={doctor}
                            handleAddToCart={handleAddToCart}  >
                             
                            </Doctor>)  
                         }     
                        </div>
                         
                            
                    </div>
                     <div className="col-md-3">
                         
                         <DoctorCount count={count}></DoctorCount> 
                        

                     </div>  
                </div>
        </section>
       
       
    );
};

export default Main;
import React from 'react';
import "./Doctor.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'





const Doctor = (props) => {
    // console.log(props);
     const icon = < FontAwesomeIcon icon = {
         faShoppingCart
     }
     />
    
    const{name,img,salary,Country,Specialist,Profession,age}=props.doctor;

    
    return (
        <div className="col-md-4 bg-add">
            <div className="doctor">
                <img className="img mx-auto" src={img}  />
           <h5 className="text-center">Name:{name}</h5>
           <h6 className="text-center">Profession:{Profession}</h6>
           <h6 className="text-center">age:{age}</h6>
           <h6 className="text-center">Specialist:{Specialist}</h6>
           <h6 className="text-center">Country:{Country}</h6>
           <h6 className="text-center">Salary:${salary}</h6>
           <button 
           onClick={() => props.handleAddToCart(props.doctor)} className="btn-button mx-auto text-center"> Add to Cart {icon} </button>
            <div className="d-flex justify-content-around ">
                <i class="fab fa-pinterest-square text-danger my-3"></i>
                <i class="fab fa-instagram text-warning  my-3"></i>
           </div>
             
            </div>
            
            

        </div>
    );
};

export default Doctor;
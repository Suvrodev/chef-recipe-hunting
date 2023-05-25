import React from 'react';
import './ChefCard.css'
import { Link } from 'react-router-dom';
import { FaRegThumbsUp } from 'react-icons/fa';

const ChefCard = ({chf}) => {
  //  console.log(chf)
   // console.log(chf.length)
    const {id,name,experience,picture_url,num_of_recipes,like_number}=chf;

    // const check=()=>{
    //     console.log({id})
    // }
    
    return (
        <div className='displayCard'>
            <img src={picture_url} alt="" />
            <h4 className='text-center mt-2 fw-bold chefName' > {name} </h4>
            <p className='text-center mt-2 fw-bold'>Experience: {experience} </p>
            <p className='text-center mt-2 fw-bold'>Number of Recipes: {num_of_recipes} </p>

            <div className='cardBottom'>
                <span className='d-flex align-items-center text-primary'> <FaRegThumbsUp/> {<div className='ms-2 likeNumber'>{like_number}</div>} </span>
                <Link to={`/${id}`}> <button className='btn btn-primary'>View Recipes</button></Link>
            </div>

        </div>
    );
};

export default ChefCard;
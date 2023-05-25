import React, { useState } from 'react';
import './BranchCard.css'
import japan from '../../../assets/japan_res.jpg'
import Japan_Flag from '../../../assets/fjapan.png'
import { Rating } from '@smastrom/react-rating';
import { ToastContainer, toast } from 'react-toastify';
import { FaRegThumbsUp } from 'react-icons/fa';

const BranchCard = ({b}) => {
    // console.log("CHECK")
    // console.log(props.send)
    const {id,place,image,flag,name,desc,rating}=b;

    const [like,setLike]=useState(true)

    const handleLike=()=>{
        setLike(!like)
        console.log(like)
        toast("Likeed This Branch")
    }
    return (
        <div className='branchCard'>
            <div className="TitleFlag">
                <h1 className='branchCardTitle'> {place} </h1>
                <img className='flag' src={flag} alt="" />
            </div>
            <div className='branchCardImage_'>
              <img className='branchCardImage' src={image} alt="" />
            </div>

             <h5 className='res_name'> {name} </h5>
             <p className=''>Short Description</p>
             <p className='descTitle'> {desc} </p>

             <div className="branchCardFooter">
                <div className="ResRating d-flex align-items-center gap-1"> 
                   <Rating style={{ maxWidth: 120 || 0 }} value={Math.round(rating)} />
                   {rating}
                </div>
                <button onClick={handleLike} disabled={!like} className='btn btn-primary'> <FaRegThumbsUp/> </button>
                <ToastContainer/>
             </div>
        </div>
    );
};

export default BranchCard;
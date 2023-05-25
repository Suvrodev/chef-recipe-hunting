import React, { useState } from 'react';
import './Recipe.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Recipe = ({recipe}) => {
    const {recipe_image,recipe_name,rating,ingredients,cooking_instructions}=recipe
    console.log(recipe_image)

   const [favorite,setFavorite]=useState(false)

   const handleFavorite=()=>{
      toast("Favorite")
      setFavorite(!favorite)
      console.log(favorite)
   }
    return (
        <div className='recipeCard mb-2'>
           <div className='recipeImage'>
             <img src={recipe_image} alt="" />
             <h4 className='text-center recipeName'>{recipe_name}</h4>
             <span className='rating'>
                <span className='fw-bold'>Ratting</span>
                <Rating style={{ maxWidth: 150 || 0 }} value={Math.round(rating)} />
                <span>{rating}</span>

                <button onClick={handleFavorite} className='btn btn-success' disabled={favorite}> Favorite </button>
               <ToastContainer/>
             </span>
          </div>
         
           
          <div className='majorPart'>
            <div className='ingredients'>
                <p className='fw-bold text-center'>Ingredients </p>
                <ul>
                    {
                     ingredients.map(i=> <li key={i}>{i}</li> )
                    }
                </ul>
            </div>

            <div className='cookingMethod'>
                <p className='fw-bold text-center'>Method of Cooking</p>
                <ul>
                    {
                        cooking_instructions.map(c=> <li key={c}>{c}</li> )
                    }
                </ul>
            </div>
          </div>


         {/* <div className="recipeFooter">
           <div className='d-flex justify-content-center align-items-center gap-1'>
               <span className='fw-bold'>Ratting</span>
               <Rating style={{ maxWidth: 150 || 0 }} value={Math.round(rating)} />
               <span>{rating}</span>
           </div>

           <button onClick={handleFavorite} className='btn btn-success' disabled={favorite}> Favorite This Recipe </button>
           <ToastContainer/>
         </div> */}
        </div>
    );
};

export default Recipe;
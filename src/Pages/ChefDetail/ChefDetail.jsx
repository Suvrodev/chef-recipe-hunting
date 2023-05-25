import React, { useEffect, useState } from 'react';
import './ChefDetail.css'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FaHandPointRight, FaRegThumbsUp } from 'react-icons/fa';
import Recipe from '../Recipe/Recipe';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ChefDetail = () => {
    const {id}=useParams()
    const navigate=useNavigate();
   // console.log(id)

    const [chefData,setChefData]=useState("")

    useEffect(()=>{
        fetch(`https://chef-recipe-hunting-server-suvrodev.vercel.app/chef/${id}`)
        .then(res=>res.json())
        .then(data=>setChefData(data))
        .catch(err=>{
            console.log(err)
            navigate('/login/error')
        })
    },[])

  //  console.log(chefData)
    const {name,experience,picture_url,num_of_recipes,like_number,recipes,desc}=chefData;
   // console.log(chefData)
    //console.log(recipes)
    // if(recipes){
    //     console.log(recipes[0])
    // }
    return (
        <Container>
            <div className='chefBanner'>
                <div className="chefInfo">
                    <div className="chefInfo_">
                        <h1 className='name'>{name}</h1>
                        <h4> {experience} Experience </h4>
                        <p className='fw-bold'>Number of Recipes: {num_of_recipes} </p>
                        <small className='fw-bold d-flex align-items-center gap-2'> Got Like: {like_number} <FaRegThumbsUp/> </small>
                    </div>
                    <div className="chefInfoDesc">
                        <h4>Description</h4>
                        <p><small>{desc}</small></p>
                    </div>

                  
                </div>
                <div className="chefPic">
                    <LazyLoadImage
                        className="chefImage"
                        src={picture_url} // use normal <img> attributes as props
                    />

                {/* <LazyLoad offset={300} threshold={0.95}>
                    <img className='chefImage' src={picture_url} alt="" />
                </LazyLoad> */}
                
                </div>
            </div>

            <h1 className='recipeListTitle'> <span className='name_'>{name}'s</span> Recipe List</h1>

            {
                recipes && 
                recipes.map(recipe=> <Recipe
                key={recipe.recipe_id}
                recipe={recipe}
                ></Recipe> )
            }
            
        </Container>

    );
};

export default ChefDetail;
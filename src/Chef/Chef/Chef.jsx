import React, { useEffect, useState } from 'react';
import './Chef.css'
import { Container } from 'react-bootstrap';
import ChefCard from '../ChefCatd/ChefCard';

const Chef = () => {

    const [chef,setChef]=useState([])

    useEffect(()=>{
        fetch('https://chef-recipe-hunting-server-suvrodev.vercel.app/chef')
        .then(res=>res.json())
        .then(data=>setChef(data))
        .catch(err=>console.log(err))
    },[])
  //  console.log(chef)
 //  console.log( chef.length)
    return (
        <Container>
            {/* <h1>Chef Number: {chef.length} </h1> */}
            <h1 className='availableShapeTitle'>Our Available Chef</h1>
          <div className='chefContainer mt-5'>
            {
                chef.map(chf=> <ChefCard
                key={chf.id}
                chf={chf}
                ></ChefCard>  )
            }
          </div>
        </Container>
    );
};

export default Chef;
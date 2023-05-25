import React, { useEffect, useState } from "react";
import "./Branch.css";
import { Container } from "react-bootstrap";
import HorizontalScroll from "react-scroll-horizontal";
import BranchCard from "../BranchCard/BranchCard";

import london_res from '../../../assets/london_res.jpg';
import finland_res from '../../../assets/finland_res.webp'
import washington_res from '../../../assets/wasington_res.jpg'
import mumbai_res from '../../../assets/mumbai_res.webp'
import canbera_res from '../../../assets/canbera_res.jpg'
import Beiging_res from '../../../assets/china_res.jpg'
import japan_res from '../../../assets/japan_res.jpg'
import nz_res from '../../../assets/new_zealand.jpg'

import flag_england from '../../../assets/fengland.png'
import flag_finland from '../../../assets/ffinland.webp'
import flag_usa from '../../../assets/fusa.webp'
import flag_india from '../../../assets/fIndia.jpg'
import flag_austrelia from '../../../assets/faustrelia.webp'
import flag_china from '../../../assets/fchina.webp'
import flag_japan from '../../../assets/fjapan.png'
import flag_nz from '../../../assets/f_nz.png'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



// const england={
//     name: "London",
//     flag: flag_england,
//     res_Image: london_res,
//     res_Name: "London Restaurant",
//     desc: "London 90% People Like it",
//     rating: 5
// }
// const finland={
//     name: "Finlnad",
//     flag: flag_finland,
//     res_Image: finland_res,
//     res_Name: "Finland Restaurant",
//     desc: "Finland 80% People Like it",
//     rating: 4.3
// }
// const usa={
//     name: "USA",
//     flag: flag_usa,
//     res_Image: washington_res,
//     res_Name: "Washington Restaurant",
//     desc: "Washington 90% People Like it",
//     rating: 5
// }
// const india={
//     name: "Mumbai",
//     flag: flag_india,
//     res_Image: mumbai_res,
//     res_Name: "Mumbai Restaurant",
//     desc: "Mumbai 85% People Like it",
//     rating: 4.5
// }
// const australia={
//     name: "Canbera",
//     flag: flag_austrelia,
//     res_Image: canbera_res,
//     res_Name: "Canbera Restaurant",
//     desc: "Autrilian 90% People Like it",
//     rating: 5
// }
// const china={
//     name: "Beiging",
//     flag: flag_china,
//     res_Image: london_res,
//     res_Name: "Baiging Restaurant",
//     desc: "Chinas 90% People Like it",
//     rating: 5
// }
// const japan={
//     name: "Japan",
//     flag: flag_japan,
//     res_Image: japan_res,
//     res_Name: "Japan Restaurant",
//     desc: "London 75% People Like it",
//     rating: 4.2
// }

// const NZ={
//     name: "New Zealand",
//     flag: flag_nz,
//     res_Image: nz_res,
//     res_Name: "Quiue Restaurant",
//     desc: "New Zealand 90% People Like it",
//     rating: 5
// }




const Branch = () => {
 // const child = { width: `22em`, height: `100%` };

  const [branch,setBranch]=useState([]);

  useEffect(()=>{
    fetch('/branch.json')
    .then(res=>res.json())
    .then(data=>setBranch(data))
    .catch(err=>console.log(err))
  },[])
  //console.log(branch)

  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1

    className: "horizental",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 2,
    speed: 500,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 0,
            slidesToScroll: 0,
            initialSlide: 0,
            // dots: true
            
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            // dots: true
          }
        }
      ]
  };


  return (
    <Container>
        <div className="parent">
            <h1 className="branch_Title availableShapeTitle">Our Others Branch</h1>
            <p className="scroll_mouse">Scroll Mouse</p>
            <HorizontalScroll className="horizental">

                {
                    branch.map(b=> <div className="child" key={b.id} > <BranchCard b={b}> </BranchCard> </div>      )
                }
            </HorizontalScroll>

            {/* SLick Start */}
            {/* <Slider {...settings} className="horizental" >
                 {
                    branch.map(b=> <div className="child" key={b.id} > <BranchCard b={b}> </BranchCard> </div>      )
                 }
            </Slider> */}
            {/* SLick End */}
        </div>
    </Container>
  );
};

export default Branch;

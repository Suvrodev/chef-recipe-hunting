import React, { useContext, useState } from "react";
import "./NavBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

import image from '../../../src/assets/Image.png'
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  const {user,logOut}=useContext(AuthContext)
  const [showName,setShowName]=useState(false)
 // console.log(user)
  //const {displayName}=user;

  const handleLogOut=()=>{
    logOut()
    .then(res=>console.log(res))
    .catch(error=>console.log(error.message))
  }

  const displayName=()=>{
    setShowName(true)
    console.log(showName)
  }
  const hideName=()=>{
    setShowName(false)
    console.log(showName)
  }
  //console.log(user)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="m-3 p-lg-4 rounded-2 navBar" >
      <Container>
        <Navbar.Brand > <Link to='/' className="webName fw-bold text-decoration-none ">Suvrodeb Food House</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`mx-auto d-lg-flex align-items-lg-center `}>

            <NavLink className={({isActive})=>isActive?'link mb-sm-2 text-primary':'link mb-sm-2'} to={'/'}>Home</NavLink>
            <NavLink className={({isActive})=> isActive?'link ms-lg-3 mb-sm-2 text-primary':'link ms-lg-3 mb-sm-2'} to='/blogs'>Blogs</NavLink>
        
            <div className="d-flex  align-items-start " >
              { user?
               
                   <div className="under_sm">
                        {
                          user.photoURL?
                          <span>
                              <img onMouseEnter={displayName} onMouseLeave={hideName} className="profile_image ms-lg-3" src={user.photoURL} alt="" />
                              {
                              //  console.log('Profile Image Exist')
                              }
                          </span>
                          :
                          <span className="profile_image ms-lg-3" onMouseEnter={displayName} onMouseLeave={hideName} ><FaUser/></span>
                        }
                        <span className={showName? 'visible ' : ' noVisible'} > {user.displayName && user.displayName} </span>
                        {/* <img title={user?.displayName} onMouseEnter={displayName} onMouseLeave={hideName} className="profile_image ms-lg-3" src={user.photoURL} alt="" /> */}
                        {/* <span className={showName? 'visible ' : ' noVisible'} > {user.displayName && user.displayName} </span> */}
                        <button onClick={handleLogOut} className="btn btn-primary ms-lg-3">Logout</button>
                    </div>
                 
                  :
                  <Link className="link ms-lg-3" to='/login'>  <button className="btn btn-primary">Login</button>  </Link>
                }
            </div>
          
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
};

export default NavBar;

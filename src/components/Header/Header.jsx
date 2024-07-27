import { HomeRounded, Telegram } from '@mui/icons-material';
import React, { useState } from 'react'
import './Header.css'
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from '../Button/Button';
import Data from '../utils/Data';
import { Link } from 'react-scroll';

const Header = () => {
    const [menuLinks]=useState([
        
        {
            title:"ABOUT",
            link:"about",
            id:1,
        },
        {
            title:"PROJECTS",
            link:"project",
            id:2,
        },
        {
            title:"SKILLS",
            link:"skill",
            id:3,
        },
        // {
        //     title:"SERVICES",
        //     link:"service",
        //     id:4
        // },
        {
            title:"CONTACT",
            link:"contact",
            id:4,
        },
    ]);
    const [expanded,setExpanded]=useState(false);
    const handleLinkClick=()=>{
        setExpanded(false);
    };
    
  return (
    
    <Navbar expand='lg' sticky='top' className='header' expanded={expanded}>
        <Link to='home' smooth={true} spy={true} offset={-63} duration={0} className='header_navlink'  activeClass="homeactive" onClick={handleLinkClick}>
            <Navbar.Brand className='header_home'>
                <HomeRounded />
            </Navbar.Brand>
        </Link>

        <Navbar.Toggle className='bg-white'  aria-controls='basic-navbar-nav' onClick={()=>setExpanded(expanded?false:true)}/>

        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='header_left'>
            {menuLinks.map((link)=>(
                <Link key={link.id} to={link.link} smooth={true} spy={true} duration={0} className='header_link' activeClass="active" onClick={handleLinkClick} >{link.title}</Link>
            ))}
            </Nav>

            <div className='header_right'>
                
                {Object.keys(Data.socials).map(key=>(
                    <a className='site' href={Data.socials[key].link} target='_blank' rel='noopener noreferrer' key={key}>{Data.socials[key].icon}</a>
                ))}
                
                <div>
                <CustomButton text={'Hire Me'} icon={<Telegram />} href={Data.socials.LinkedIn.link} target='_blank' rel='noopener noreferrer' onClick={handleLinkClick}/>
                </div>
                
            </div>
        </Navbar.Collapse>
    </Navbar>
    
  );
}

export default Header

import { Button } from '@mui/material'
import React from 'react'
import './Button.css'


const CustomButton = ({href,icon,text,onClick,target, rel}) => {
  return (
    <a href={href} target={target} rel={rel} onClick={onClick} className='custom-button-link'>
    <Button className='custom_btn' endIcon={icon ? <div className='btn_icon_container'>{icon}</div>: null}>
        <span className='btn_text'>{text}</span>
    </Button>
    </a>
  )
}

export default CustomButton

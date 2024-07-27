import React from 'react'
import './Profile.css'
import Data from '../utils/Data'
import CustomButton from '../Button/Button'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'


import { TimelineContent, TimelineItem } from '@mui/lab'
import { Typography } from '@mui/material'
import { GetApp, PersonOutlineOutlined } from '@mui/icons-material'


const CustomTimelineItem=({title,text,link})=>(
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className='timeline_content'>{link?(
            <Typography className='timelineItem_text'>
                <span>{title}:</span>{" "}
                <a href={link} target='_blank' rel='noopener noreferrer'>{text}</a>
            </Typography>):(
                <Typography className='timelineItem_text'>
                    <span>{title}:</span> {text}
                </Typography>
            )}
        </TimelineContent>
    </TimelineItem>
)

const Profile = ({key}) => {
  return (
    
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{Data.name}
        </Typography>

        <Typography className='title'>{Data.title}</Typography>
      </div>

      <figure className='profile_image'>
        <img src={require("../../assets/images/profile1.JPG")} alt="Pramod" />
      </figure>

      <div className='profile_information'>
        <CustomTimeline icon={<PersonOutlineOutlined />}>
            <CustomTimelineItem title="Name" text={Data.name} />

            <CustomTimelineItem title="Title" text={Data.title} />

            <CustomTimelineItem title="Email" text={Data.email} />

            <CustomTimelineItem title="LinkedIn" text={Data.socials.LinkedIn.text} link={Data.socials.LinkedIn.link} />

            <CustomTimelineItem title="GitHub" text={Data.socials.GitHub.text} link={Data.socials.GitHub.link} />
        </CustomTimeline>


        <div className='button_container'>
            <CustomButton text={'Download CV'} icon={<GetApp />} href='/Personal_CV.pdf' target='_blank' rel='noopener noreferrer'/>
        </div>
      </div>
    </div>
  )
}

export default Profile

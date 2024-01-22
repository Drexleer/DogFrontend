import React from 'react'
import { NotificationCard, NotificationHeading, NotificationPara, ButtonContainer, AllowBtn, NotNowBtn, DivContainer } from './StyledNotification'
import { Link } from 'react-router-dom';

export default function Notification(props) {
    return (
      <DivContainer>
      <NotificationCard>
      <NotificationHeading>Push notifications</NotificationHeading>
        <img src='https://i.pinimg.com/originals/37/35/f9/3735f971ddc0050be78a609c2b80a87c.gif' alt='dog'/>
      <NotificationPara>Dog create Sucefully</NotificationPara>
      <ButtonContainer>
        <AllowBtn><Link to={`/home`} style={{textDecoration: "none", color: "white"}}>Go to Home</Link></AllowBtn>
        <NotNowBtn onClick={props.markAsRead}>Mark as Read</NotNowBtn>
      </ButtonContainer>
    </NotificationCard>
    </DivContainer>
  );
};

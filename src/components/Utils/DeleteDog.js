import React from 'react'
import { DivContainer, CardContainer, NotificationPara } from './StyledDelete';

export const DeleteDog = () => {
  return (
    <DivContainer>
        <CardContainer>
        <NotificationPara>The dog has been successfully deleted.</NotificationPara>
        <img style={{width:"300px"}} src='https://media.tenor.com/V_vAj8HbYn0AAAAM/dog-crying.gif' alt='Dog-eliminated'/>
        </CardContainer>
    </DivContainer>
  );
}
export default DeleteDog;
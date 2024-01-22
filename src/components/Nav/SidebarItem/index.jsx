import React from 'react'
import { Container } from './styles'

const SidebarItem = ({ Icon, Text, link}) => {
  
  //noopenner noreferrer is a security measure
  
  return (
    <Container>
      <Icon />
      <a href={link} target="_blank" rel="noopener noreferrer"> 
      {Text}
      </a>
    </Container>
  )
}

export default SidebarItem
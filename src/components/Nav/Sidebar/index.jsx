import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome,  
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem';
import { Link } from 'react-router-dom';

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content onClick={closeSidebar}>
        <Link style={{textDecoration: "none"}} to={'/home'}><SidebarItem Icon={FaHome} Text="Home" /></Link>
        <Link style={{textDecoration: "none"}} to={'/home/about'}><SidebarItem Icon={FaUserAlt} Text="About" /></Link>
        <SidebarItem Icon={FaIdCardAlt} Text="Repository" link={"https://github.com/Drexleer/Dogs-app"}/>
        <Link style={{textDecoration: "none"}} to={'/home/newDog'}><SidebarItem Icon={FaRegFileAlt} Text="CreateDog"/></Link>
      </Content>
    </Container>
  )
}

export default Sidebar
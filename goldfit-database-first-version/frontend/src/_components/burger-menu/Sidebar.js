import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import SubMenu from './Submenu';
import * as AiIcons from 'react-icons/ai';
import { AiOutlineMenu } from "react-icons/ai";
import Logo from './../../_assets/logo.png'

import './styles.css'

const Nav = styled.div`
  background: #CA973C;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #CA973C;
  width: 300px;
  height: 110vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <Nav>
          <NavIcon to='#'>
            <AiOutlineMenu onClick={showSidebar}/>
            <img className="img-athlete" src={Logo} alt="Atleta" id="header-img"/>
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
            <AiIcons.AiOutlineClose onClick={showSidebar}/>
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} className="item"/>;
            })}
          </SidebarWrap>
        </SidebarNav>

    </>
  );
};

export default Sidebar;

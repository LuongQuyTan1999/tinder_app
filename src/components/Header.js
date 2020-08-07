import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import styled from "styled-components";
import LogoTinder from "../assets/images/tinder-logo.png";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f9f9f9;
  .header__logo {
    height: 40px;
    object-fit: contain;
  }
  .header__icon {
    padding: 20px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton> 
      <img src={LogoTinder} alt="Logo tinder" className="header__logo" />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </StyledHeader>
  );
}
export default Header;

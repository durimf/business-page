import React from "react";
import { IconButton, Link } from "@mui/material";
import styled from "styled-components";
import { Container } from "@mui/system";
import Image from "next/image";
import { color, space } from "../../styles/theme";
import { Button as ButtonDefault } from "../Button/Button";
import MenuIcon from "@mui/icons-material/Menu";

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0px;

  a {
    text-decoration: none;
  }

  .menu--button {
    display: flex;
    color: white;
    margin-right: 20px;
    @media (min-width: 900px) {
      display: none;
    }
  }
`;

const List = styled.ul`
  display: none;
  align-items: center;
  justify-content: space-between;
  width: 350px;

  @media (min-width: 900px) {
    display: flex;
  }

  a {
    color: white;
    font-size: ${space(5)};
    cursor: pointer;

    &:hover {
      color: ${color("yellow", "primary")};
    }
  }

  a:first-child {
    color: ${color("yellow", "primary")};

    &:hover {
      color: white;
    }
  }
`;

const Button = styled(ButtonDefault)`
  display: none;

  background: ${color("blue", "primary")};
  gap: 10px;
  width: 160px;
  height: 64px;
  filter: drop-shadow(-15px 10px 30px rgba(76, 64, 247, 0.25));
  border-radius: 12px;

  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    opacity: 90%;
  }

  //text
  color: white;
  font-size: ${space(4)};
  font-weight: 600;
`;

export default function Navbar() {
  return (
    <Container style={{ maxWidth: 1200 }}>
      <NavWrapper>
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            height={100}
            width={100}
            priority={true}
          />
        </Link>

        <List>
          <Link id="first" href="/">
            Home
          </Link>
          <Link href="works">Works</Link>
          <Link href="about ">About</Link>
        </List>

        <Link href="mailto:durimfetahaj@gmail.com">
          <Button>Contact Us</Button>
        </Link>

        <IconButton
          aria-label="menu"
          className="menu--button"
          onClick={() => alert("I am a menu button")}
        >
          <MenuIcon />
        </IconButton>
      </NavWrapper>
    </Container>
  );
}

import React from "react";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
// import { ContactUsModal } from "./ContactUsModal";
// import RightDrawer from "./mui/RightDrawer";
import styled from "styled-components";
import { Container } from "@mui/system";
import Image from "next/image";

const NavWrapper = styled.div`
  @media (max-width: 900px) and (min-width: 0px) {
    padding: 50px 48px;
  }

  .cnt {
    display: flex;
    align-items: center;
    height: 120px;
  }

  .list {
    height: 28px;
    width: 350;
    color: white;
    cursor: pointer;
    text-decoration: none;
    justify-content: space-around;
  }
  #link {
    font-weight: 600;
    font-size: 1.25rem;
    color: white;
    &:hover {
      color: white;
      opacity: 80%;
    }
  }

  .hamburger {
    color: white;
    justify-content: end;
  }
  .contactBtn {
    display: flex;
    justify-content: center;
  }
`;

export const Navbar = () => {
  return (
    <Container style={{ maxWidth: 1440 }}>
      <NavWrapper>
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          height={100}
          width={100}
        />
        <Box>
          <Grid container className="cnt">
            <Grid xs={6} md={3}>
              {/* <Box className="logo">C</Box> */}
            </Grid>
            <Grid xs={6} md={6}>
              <Box
                sx={{ display: { xs: "none", md: "flex" } }}
                className="list"
              >
                <Link underline="none" href="#">
                  <ul id="link">Home</ul>
                </Link>
                <Link underline="none" href="#">
                  <ul id="link">Works</ul>
                </Link>
                <Link underline="none" href="#">
                  <ul id="link">About</ul>
                </Link>
              </Box>
              <Box
                className="hamburger"
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                {/* <RightDrawer /> */}
              </Box>
            </Grid>
            <Grid md={3}>
              <Box className="contactBtn" display={{ xs: "none", md: "flex" }}>
                {/* <ContactUsModal /> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </NavWrapper>
    </Container>
  );
};

import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LinkedIn from "@mui/icons-material/LinkedIn";
import { Box, SwipeableDrawer, Stack, Typography } from "@mui/material";
import {
  StyledList,
  StyledLink,
  StyledTypography,
  StyledBox,
  Item,
  StyledButton,
  SideBox,
} from "./Navbar.style";
import { COLORS } from "../../Styles/Theme";
import { GitHub } from "@mui/icons-material";
// import { LinkedIn } from "@mui/icons-material";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const pages = ["Home", "About", "Skills","Projects", "Contact"];
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <StyledList>
        {pages.map((page) => {
          return (
            <StyledLink href={`#${page}`}>
              <StyledTypography variant="h6">{page}</StyledTypography>
            </StyledLink>
          );
        })}
      </StyledList>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <StyledButton onClick={toggleDrawer(anchor, true)}>
            <MenuIcon
              sx={{
                top: "0",
                position: "fixed",
              }}
            />
          </StyledButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <SideBox>
              <StyledBox>
                <Typography variant="h1" color={COLORS.CINNARBAR}>
                  <SpaOutlinedIcon
                    style={{
                      color: `${COLORS.CINNARBAR}`,
                    }}
                  />{" "}
                  DOM.
                </Typography>
                <StyledTypography variant="h6">
                  Ssemugabi Martin Luther
                </StyledTypography>
              </StyledBox>
              {list(anchor)}
              <Box>
                <Stack
                  direction="row"
                  spacing={2}
                  mt={20}
                  sx={{ justifyContent: "center" }}
                >
                  <Item href="https://github.com/don336" target="blank">
                    <GitHub />
                  </Item>
                  <Item
                    href="https://www.linkedin.com/in/ssemugabi-martin-4010101b9"
                    target="blank"
                  >
                    <LinkedIn />
                  </Item>
                  <Item href="mailto:smgmartinez92@gmail.com">
                    <EmailOutlinedIcon />
                  </Item>
                  <Item href="tel: +256786760482">
                    <PhoneIphoneOutlinedIcon />
                  </Item>
                </Stack>
                <StyledTypography variant="h6">
                  &copy; 2023 All Rights Reserved
                </StyledTypography>
              </Box>
            </SideBox>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

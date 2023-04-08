import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Box, SwipeableDrawer, Button, Stack } from "@mui/material";
import {
  StyledList,
  StyledLink,
  StyledTypography,
  StyledBox,
  Item,
  StyledButton
} from "./Navbar.style";
import { COLORS } from "../../Styles/Theme";

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

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <StyledList>
        <StyledLink to="/">
          <StyledTypography variant="w1">Home</StyledTypography>
        </StyledLink>
        <StyledLink to="/about">
          <StyledTypography variant="w1">About</StyledTypography>
        </StyledLink>
        <StyledLink to="/services">
          <StyledTypography variant="w1">Services</StyledTypography>
        </StyledLink>
        <StyledLink to="/contact">
          <StyledTypography variant="w1">Contact</StyledTypography>
        </StyledLink>
      </StyledList>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <StyledButton onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </StyledButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <Box
              sx={{
                backgroundColor: "#333",
                height: "100vh",
              }}
            >
              <StyledBox>
                <StyledTypography variant="h1">
                  <SpaOutlinedIcon
                    style={{
                      color: `${COLORS.CINNARBAR}`,
                    }}
                  />{" "}
                  DOM.
                </StyledTypography>
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
                  <Item>
                    <FacebookOutlinedIcon />
                  </Item>
                  <Item>
                    <EmailOutlinedIcon />
                  </Item>
                  <Item>
                    <ChatBubbleOutlineOutlinedIcon />
                  </Item>
                </Stack>
                <StyledTypography variant="h6">&copy; 2023 All Rights Reserved</StyledTypography>
              </Box>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

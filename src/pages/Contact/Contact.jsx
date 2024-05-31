import CustomButton from "../../Elements/CustomButton/CustomButton";
import { COLORS } from "../../Styles/Theme";
import {
  StyledContainer,
  StyledTypography,
  BorderBox,
  StyledBox,
  ContactBox,
  StyledLink,
  StyledGridItem,
  ContactHeadBox,
} from "./Contact.style";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import picture from "../../assets/home.jpg";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import { Grid, Box, Stack } from "@mui/material";

const Contact = () => {
  return (
    <StyledContainer id="Contact">
      <ContactHeadBox>
        <StyledTypography
          variant="h2"
          sx={{
            fontWeight: "700",
          }}
        >
          CONTACT
        </StyledTypography>
      </ContactHeadBox>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 2, md: 4 }}
      >
        <Grid
          item
          xs={1}
          sm={2}
          md={2}
          sx={{
            marginBottom: "30px",
          }}
        >
          <BorderBox>
            <StyledBox>
              <StyledTypography variant="h3">Get in Touch</StyledTypography>
              <StyledTypography variant="h6">
                "Thank you for your interest in my work! I would love to hear
                from you. Please use the communication scheme below, I'll get back to you as soon as possible."
              </StyledTypography>
              <Stack direction="row" spacing={2} mt={3}>
                <ContactBox>
                  <StyledLink href="tel: +256786760482">
                    <PhoneIphoneOutlinedIcon
                      sx={{
                        color: `${COLORS.CINNARBAR}`,
                      }}
                    />
                  </StyledLink>
                  <StyledTypography variant="h4" sx={{ fontWeight: "700" }}>
                    <StyledTypography variant="h6">
                      +256 770 302 731
                    </StyledTypography>
                  </StyledTypography>
                </ContactBox>
                <ContactBox>
                  <StyledLink href="mailto: smgmartinez92@gmail.com">
                    <ChatBubbleOutlineOutlinedIcon
                      sx={{
                        color: `${COLORS.CINNARBAR}`,
                      }}
                    />
                  </StyledLink>
                  <StyledTypography variant="h4" sx={{ fontWeight: "700" }}>
                    <StyledTypography variant="h6">
                      smgmartinez92@gmail.com
                    </StyledTypography>
                  </StyledTypography>
                </ContactBox>
              </Stack>
            </StyledBox>
          </BorderBox>
        </Grid>
        <StyledGridItem
          item
          xs={1}
          sm={2}
          md={2}
          sx={{
            marginBottom: "30px",
          }}
        >
          <Box>
            <img src={picture} alt="laptop" />
          </Box>
        </StyledGridItem>
      </Grid>
    </StyledContainer>
  );
};

export default Contact;

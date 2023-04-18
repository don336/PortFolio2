import CustomButton from "../../Elements/CustomButton/CustomButton";
import { COLORS } from "../../Styles/Theme";
import {
  StyledContainer,
  StyledTypography,
  BorderBox,
  StyledBox,
  ContactBox,
} from "./Contact.style";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import picture from "../../assets/home.jpg"
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import { Grid, Box, Stack } from "@mui/material";

const Contact = () => {
  return (
    <StyledContainer id="Contact">
      <BorderBox>
        <StyledTypography
          variant="h2"
          sx={{
            fontWeight: "700",
          }}
        >
          CONTACT
        </StyledTypography>
      </BorderBox>
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
          <StyledBox>
            <StyledTypography variant="h3">Get in Touch</StyledTypography>
            <StyledTypography variant="h6">
              "Thank you for your interest in my work! I would love to hear from
              you. Please use the form below to send me a message, and I will
              get back to you as soon as possible. Alternatively, you can reach
              me via email at smgmartinez92@gmail.com. Thank you!"
            </StyledTypography>
            <Stack direction="row" spacing={2} mt={3}>
              <ContactBox>
                <PhoneIphoneOutlinedIcon
                  sx={{
                    color: `${COLORS.CINNARBAR}`,
                  }}
                />
                <StyledTypography variant="h4" sx={{ fontWeight: "700" }}>
                  <StyledTypography variant="h6">
                    +256 786 760 482
                  </StyledTypography>
                </StyledTypography>
              </ContactBox>
              <ContactBox>
                <ChatBubbleOutlineOutlinedIcon
                  sx={{
                    color: `${COLORS.CINNARBAR}`,
                  }}
                />
                <StyledTypography variant="h4" sx={{ fontWeight: "700" }}>
                  <StyledTypography variant="h6">
                    smgmartinez92@gmail.com
                  </StyledTypography>
                </StyledTypography>
              </ContactBox>
            </Stack>
          </StyledBox>
        </Grid>
        <Grid
          item
          xs={1}
          sm={2}
          md={2}
          sx={{
            marginBottom: "30px",
          }}
        >
          <Box >
            <img src={picture} alt="laptop" />
          </Box>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Contact;

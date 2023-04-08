import CustomButton from "../../Elements/CustomButton/CustomButton";
import { COLORS } from "../../Styles/Theme";
import {
  StyledContainer,
  StyledTypography,
  BorderBox,
  StyledBox,
  StyledTextarea,
} from "./Contact.style";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Grid, Box, TextField } from "@mui/material";

const Contact = () => {
  return (
    <StyledContainer>
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
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  sx={{
                    color: "#fff",
                  }}
                  required
                  fullWidth
                  variant="outlined"
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextarea
                  required
                  aria-label="Mesage"
                  minRows={10}
                  placeholder="Enter Mesasage"
                />
              </Grid>
            </Grid>
            <CustomButton
              variant="contained"
              width="100%"
              fontcolor={COLORS.DARKGREY}
            >
              Send Message
            </CustomButton>
          </Box>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Contact;

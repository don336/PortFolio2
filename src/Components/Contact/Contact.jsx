import React from "react";
import { TextField, Typography, Grid, Box } from "@mui/material";
import { COLORS, FONT } from "../../Styles/Theme";
import CustomButton from "../../Elements/CustomButton/CustomButton";
import Business from "../../assets/Business_meeting.jpg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactForm = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${COLORS.BLUE}22, ${COLORS.BLUE}11)`,
        padding: { xs: 2, md: 6 },
        borderRadius: "16px",
        margin: "48px auto",
        maxWidth: "1200px",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          backgroundColor: "white",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <Grid item xs={12} md={6} sx={{ padding: "40px!important" }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: FONT.FAMILY.PlayFair,
              fontWeight: FONT.WEIGHT.BOLD,
              fontSize: FONT.SIZES[32],
              color: COLORS.BLUE,
              marginBottom: 2,
            }}
          >
            Let's Connect
          </Typography>
          <Typography
            sx={{
              fontFamily: FONT.FAMILY.Montserrat,
              fontWeight: FONT.WEIGHT.REGULAR,
              fontSize: FONT.SIZES[16],
              color: "#555",
              marginBottom: 4,
            }}
          >
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </Typography>

          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  size="small"
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  size="small"
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  size="small"
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomButton
                  background={COLORS.BLUE}
                  width="100%"
                  hoverbackground={COLORS.HOVERBLUE}
                >
                  <Typography
                    sx={{
                      fontFamily: FONT.FAMILY.Montserrat,
                      fontWeight: FONT.WEIGHT.SEMIBOLD,
                      fontSize: FONT.SIZES[16],
                      color: "#fff",
                    }}
                  >
                    Send Message
                  </Typography>
                </CustomButton>
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "relative", // Ensure the Box is positioned relative
              backgroundImage: `url(${Business})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "80vh", // Adjust to your desired height
              width: "100vw", // Adjust to your desired width
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 4,
                color: "white",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: FONT.FAMILY.PlayFair,
                  fontWeight: FONT.WEIGHT.BOLD,
                  fontSize: FONT.SIZES[28],
                  marginBottom: 2,
                }}
              >
                Contact Information
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
              >
                <EmailIcon sx={{ marginRight: 1 }} />
                <Typography sx={{ fontFamily: FONT.FAMILY.Montserrat }}>
                  smgmartinez92@gmail.com
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
              >
                <PhoneIcon sx={{ marginRight: 1 }} />
                <Typography sx={{ fontFamily: FONT.FAMILY.Montserrat }}>
                  +(256) 770302731
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon sx={{ marginRight: 1 }} />
                <Typography sx={{ fontFamily: FONT.FAMILY.Montserrat }}>
                  Kampala, Uganda
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;

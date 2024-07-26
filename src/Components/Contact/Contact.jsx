import React from "react";
import { TextField, Typography, Grid, Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomButton from "../../Elements/CustomButton/CustomButton";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: "#f5f5f5",
    "&:hover": {
      backgroundColor: "#e0e0e0",
    },
    "&.Mui-focused": {
      backgroundColor: "#ffffff",
      boxShadow: "0 0 0 2px rgba(63, 81, 181, 0.2)",
    },
  },
}));

const ContactForm = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f6f9fc 0%, #f1f4f8 100%)",
        padding: { xs: 3, md: 6 },
        borderRadius: "16px",
        margin: "64px auto",
        maxWidth: "1200px",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} sx={{ padding: "40px!important" }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: "2.5rem",
              color: "#2c3e50",
              marginBottom: 2,
            }}
          >
            Let's Collaborate
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Roboto", sans-serif',
              fontWeight: 400,
              fontSize: "1rem",
              color: "#34495e",
              marginBottom: 4,
              lineHeight: 1.6,
            }}
          >
            As a senior software developer, I'm always interested in challenging
            projects and innovative ideas. Whether you need technical
            leadership, architecture design, or expert development, I'm here to
            help bring your vision to life.
          </Typography>

          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <StyledTextField fullWidth label="Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField fullWidth label="Subject" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomButton
                  background="#3f51b5"
                  width="100%"
                  hoverbackground="#303f9f"
                >
                  <Typography
                    sx={{
                      fontFamily: '"Roboto", sans-serif',
                      fontWeight: 500,
                      fontSize: "1rem",
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

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "#2c3e50",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "40px!important",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: "2rem",
              color: "#ffffff",
              marginBottom: 4,
            }}
          >
            Contact Information
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
            <EmailIcon sx={{ marginRight: 2, color: "#3f51b5" }} />
            <Typography
              sx={{ fontFamily: '"Roboto", sans-serif', color: "#ecf0f1" }}
            >
              senior.dev@example.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
            <PhoneIcon sx={{ marginRight: 2, color: "#3f51b5" }} />
            <Typography
              sx={{ fontFamily: '"Roboto", sans-serif', color: "#ecf0f1" }}
            >
              +1 (123) 456-7890
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
            <LocationOnIcon sx={{ marginRight: 2, color: "#3f51b5" }} />
            <Typography
              sx={{ fontFamily: '"Roboto", sans-serif', color: "#ecf0f1" }}
            >
              San Francisco, CA
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <IconButton
              aria-label="LinkedIn"
              sx={{ color: "#ecf0f1", "&:hover": { color: "#3f51b5" } }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="GitHub"
              sx={{ color: "#ecf0f1", "&:hover": { color: "#3f51b5" } }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;

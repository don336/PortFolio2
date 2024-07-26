import React from "react";
import { Email, GitHub, Phone, LinkedIn } from "@mui/icons-material";
import {
  Typography,
  Grid,
  Box,
  Container,
  IconButton,
  Link,
  TextField,
  Button,
} from "@mui/material";
import { FONT, COLORS } from "../../Styles/Theme";

const Footer = () => {
  const iconStyle = { color: "white", fontSize: 24, marginRight: 2 };
  const linkStyle = { color: "white", "&:hover": { color: COLORS.HOVERBLUE } };

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 6,
        backgroundImage: `linear-gradient(to right, ${COLORS.BLUE}, ${COLORS.DARKBLUE})`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: FONT.FAMILY.PlayFair,
                fontWeight: FONT.WEIGHT.BOLD,
              }}
            >
              MARTIN SSEMGABI
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 2, fontFamily: FONT.FAMILY.Montserrat }}
            >
              Full-Stack Software Developer
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: FONT.FAMILY.Montserrat }}
            >
              Email: smgmartine292@gmail.com
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 2, fontFamily: FONT.FAMILY.Montserrat }}
            >
              Phone: +256770302731
            </Typography>
            <Box>
              <IconButton
                href="mailto:smgmartinez92@gmail.com"
                aria-label="Email"
              >
                <Email sx={iconStyle} />
              </IconButton>
              <IconButton
                href="https://github.com/don336"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHub sx={iconStyle} />
              </IconButton>
              <IconButton href="tel:+256770302731" aria-label="Phone">
                <Phone sx={iconStyle} />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/ssemugabi-martin-4010101b9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedIn sx={iconStyle} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: FONT.FAMILY.PlayFair,
                fontWeight: FONT.WEIGHT.BOLD,
              }}
            >
              QUICK LINKS
            </Typography>
            <nav>
              {["Home", "About Me", "Services", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/#${item.replace(" ", "")}`}
                  sx={{
                    ...linkStyle,
                    display: "block",
                    mb: 1,
                    fontFamily: FONT.FAMILY.Montserrat,
                  }}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: FONT.FAMILY.PlayFair,
                fontWeight: FONT.WEIGHT.BOLD,
              }}
            >
              STAY UPDATED
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 2, fontFamily: FONT.FAMILY.Montserrat }}
            >
              Subscribe to receive updates on my latest projects and tech
              insights.
            </Typography>
            <form>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your email"
                size="small"
                sx={{
                  mb: 2,
                  bgcolor: "rgba(255,255,255,0.1)",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: COLORS.HOVERBLUE },
                    "&.Mui-focused fieldset": { borderColor: COLORS.HOVERBLUE },
                  },
                  "& input": { color: "white" },
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: COLORS.HOVERBLUE,
                  "&:hover": { bgcolor: COLORS.BLUE },
                  fontFamily: FONT.FAMILY.Montserrat,
                }}
              >
                Subscribe
              </Button>
            </form>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          sx={{
            mt: 4,
            textAlign: "center",
            fontFamily: FONT.FAMILY.Montserrat,
          }}
        >
          © {new Date().getFullYear()} Martin Ssemgabi. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

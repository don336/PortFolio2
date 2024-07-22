import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import { COLORS, FONT } from "../../Styles/Theme";
import CustomButton from "../../Elements/CustomButton/CustomButton";
import Business from "../../assets/Business_meeting.jpg";
const ContactForm = () => {
  return (
    <div className="flex items-left  p-8 rounded-xl mt-12">
      <Typography
        sx={{
          fontFamily: FONT.FAMILY.PlayFair,
          fontWeight: FONT.WEIGHT.SEMIBOLD,
          fontSize: FONT.SIZES[24],
          lineHeight: FONT.LINE_HEIGHTS[30],
          color: COLORS.BLUE,
        }}
      >
        Contact Me
      </Typography>
      <div
        className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-5xl w-full flex flex-col lg:flex-row h-auto mt-7"
        style={{
          height: "445px",
        }}
      >
        <div className="w-full lg:w-1/2 p-8">
          <Typography
            className="text-3xl font-bold text-gray-800 pb-4"
            sx={{
              fontFamily: FONT.FAMILY.Montserrat,
              fontWeight: FONT.WEIGHT.SEMIBOLD,
              fontSize: FONT.SIZES[16],
            }}
            variant="h1"
          >
            Let's talk
          </Typography>
          <Typography
            className="text-gray-600 pb-4"
            sx={{
              fontFamily: FONT.FAMILY.Montserrat,
              fontWeight: FONT.WEIGHT.SEMIBOLD,
              fontSize: FONT.SIZES[16],
            }}
          >
            I'd love to hear from you. Fill out the form and I'll be in touch as
            soon as possible.
          </Typography>

          <form className="space-y-3" style={{ maxWidth: "400px" }}>
            <div className="flex flex-col space-y-5">
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                size="small"
                InputProps={{
                  className: "rounded-lg",
                }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                size="small"
                InputProps={{
                  className: "rounded-lg",
                }}
              />
              <TextField
                fullWidth
                label="Phone"
                variant="outlined"
                type="tel"
                size="small"
                InputProps={{
                  className: "rounded-lg",
                }}
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={2}
                size="small"
                InputProps={{
                  className: "rounded-lg",
                }}
              />
            </div>
            <CustomButton
              background={COLORS.BLUE}
              width={"240px"}
              hoverbackground={COLORS.HOVERBLUE}
            >
              <Typography
                sx={{
                  fontFamily: FONT.FAMILY.Montserrat,
                  fontWeight: FONT.WEIGHT.SEMIBOLD,
                  fontSize: FONT.SIZES[16],
                  lineHeight: FONT.LINE_HEIGHTS[30],
                  color: "#fff",
                }}
              >
                Send
              </Typography>
            </CustomButton>
          </form>
        </div>

        {/* Image Container */}
        <div
          className="w-full lg:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url(${Business})`,
          }}
        >
          <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center p-6">
              <Typography
                variant="h1"
                sx={{
                  fontFamily: FONT.FAMILY.PlayFair,
                  fontWeight: FONT.WEIGHT.SEMIBOLD,
                  fontSize: FONT.SIZES[30],
                }}
                className="text-white text-2xl font-bold mb-2"
              >
                Welcome!
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: FONT.FAMILY.Montserrat,
                  fontWeight: FONT.WEIGHT.SEMIBOLD,
                  fontSize: FONT.SIZES[16],
                }}
                className="text-gray-200 max-w-xs mx-auto"
              >
                I'm excited to collaborate with you on your next project.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

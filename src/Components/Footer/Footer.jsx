import React from "react";
import { Email, GitHub, Phone, LinkedIn } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { FONT } from "../../Styles/Theme";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r rounded-lg from-blue-500 to-blue-950 text-white p-8 flex justify-between items-center w-full">
      <div className="flex flex-col">
        <Typography
          className="font-bold text-lg"
          sx={{
            fontFamily: FONT.FAMILY.PlayFair,
            fontWeight: FONT.WEIGHT.BOLD,
            fontSize: FONT.SIZES[20],
          }}
        >
          MARTIN SSEMGABI
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: FONT.FAMILY.Montserrat,
            fontWeight: FONT.WEIGHT.REGULAR,
            fontSize: FONT.SIZES[14],
          }}
        >
          Email: smgmartine292@gmail.com
        </Typography>
        <Typography
          sx={{
            fontFamily: FONT.FAMILY.Montserrat,
            fontWeight: FONT.WEIGHT.REGULAR,
            fontSize: FONT.SIZES[14],
          }}
        >
          Phone: +256770302731
        </Typography>
        <div className="flex space-x-4 mt-4">
          <a href="mailto:smgmartinez92@gmail.com" className="text-white">
            <Email />
          </a>
          <a
            href="https://github.com/don336"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <GitHub />
          </a>
          <a href="tel:+256770302731" className="text-white">
            <Phone />
          </a>
          <a
            href="https://www.linkedin.com/in/Ssemugabi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <LinkedIn />
          </a>
        </div>
      </div>

      <div>
        <Typography
          sx={{
            fontFamily: FONT.FAMILY.PlayFair,
            fontWeight: FONT.WEIGHT.BOLD,
            fontSize: FONT.SIZES[20],
          }}
          className="font-bold text-lg"
        >
          QUICK LINKS
        </Typography>
        <ul className="list-none p-0">
          <li>
            <a href="/#Home" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/#About" className="text-white hover:text-gray-300">
              About Me
            </a>
          </li>
          <li>
            <a href="/#Services" className="text-white hover:text-gray-300">
              Services
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-lg">SUBSCRIPTION</h3>
        <form className="flex mt-4">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL........."
            className="p-2 rounded-l-lg outline-none"
          />
          <button
            type="submit"
            className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;

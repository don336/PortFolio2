import React from "react";
import { Typography } from "@mui/material";
import { FONT } from "../../Styles/Theme";

const services = [
  { name: "Figma", level: 50 },
  { name: "Javascript, React, Node", level: 80 },
  { name: "HTML & CSS", level: 90 },
  { name: "GitHub & Git", level: 50 },
  { name: "MongoDB", level: 48 },
  { name: "Material UI & Tailwind CSS", level: 48 },
];

const Services = () => {
  return (
    <div className="bg-gray-100 p-10 rounded-xl mt-32" id="Services">
      <div className="container mx-auto">
        <Typography
          variant="h5"
          sx={{
            fontFamily: FONT.FAMILY.PlayFair,
            fontWeight: FONT.WEIGHT.SEMIBOLD,
            fontSize: FONT.SIZES[14],
            lineHeight: FONT.LINE_HEIGHTS[30],
          }}
          className="text-blue-600 font-bold "
        >
          SERVICES
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Typography
                className="w-1/3 text-left"
                sx={{
                  fontFamily: FONT.FAMILY.Montserrat,
                  fontWeight: FONT.WEIGHT.SEMIBOLD,
                  fontSize: FONT.SIZES[14],
                  lineHeight: FONT.LINE_HEIGHTS[30],
                }}
              >
                {service.name}
              </Typography>
              <div className="w-2/3 flex items-center space-x-2">
                <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-400">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${service.level}%` }}
                  ></div>
                </div>
                <Typography
                  className="text-left"
                  sx={{
                    fontFamily: FONT.FAMILY.Montserrat,
                    fontWeight: FONT.WEIGHT.SEMIBOLD,
                    fontSize: FONT.SIZES[14],
                    lineHeight: FONT.LINE_HEIGHTS[30],
                  }}
                >
                  {service.level}%
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

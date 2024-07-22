import React from "react";
import { FONT } from "../../Styles/Theme";
import { Link } from "@mui/material";

const Navbar = () => {
  const navigation = ["Home", "About", "Services", "Projects", "Contacts"];
  return (
    <div className="flex justify-between ">
      <div
        className="logo p-3 "
        style={{
          fontFamily: FONT.FAMILY.PlayFair,
          fontWeight: FONT.WEIGHT.SEMIBOLD,
          fontSize: FONT.SIZES[16],
        }}
      >
        <h1>
          Martin <span className="text-blue-500">Ssemugabi</span>
        </h1>
      </div>
      <div className="links p-3">
        <ul
          className="flex justify-between"
          style={{
            fontFamily: FONT.FAMILY.Montserrat,
            fontWeight: FONT.WEIGHT.REGULAR,
            fontSize: FONT.SIZES[12],
          }}
        >
          {navigation.map((item, index) => (
            <li className="mx-2 hover:text-blue-500 cursor-pointer" key={index}>
              <Link
                sx={{ textDecoration: "none", color: "#333" }}
                href={`#${item}`}
                className="mx-2 hover:text-blue-500 cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

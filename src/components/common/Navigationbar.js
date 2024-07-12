import React from "react";
import {
  NavigationbarWrapper,
  NavigationbarLink,
  HomeIconWrapper,
} from "./NavigationbarStyles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <NavigationbarWrapper>
      <NavigationbarLink to="/medsearch">
        <ManageSearchIcon />
      </NavigationbarLink>
      <NavigationbarLink to="/">
        <HomeIconWrapper>
          <HomeOutlinedIcon />
        </HomeIconWrapper>
      </NavigationbarLink>
      <NavigationbarLink to="/healthnews">
        <NewspaperIcon />
      </NavigationbarLink>
    </NavigationbarWrapper>
  );
};

export default Navigationbar;

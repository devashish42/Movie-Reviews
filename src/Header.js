import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div class="header__icons">
        <div class="header__icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div class="header__icon">
          <FlashOnIcon />
          <p>FlashOn</p>
        </div>
        <div class="header__icon">
          <LiveTvIcon />
          <p>LiveTv</p>
        </div>
        <div class="header__icon">
          <VideoLibraryIcon />
          <p>Movies</p>
        </div>
        <div class="header__icon">
          <SearchIcon />
          <p>Search</p>
        </div>
        <div class="header__icon">
          <PersonOutlineIcon />
          <p>Profile</p>
        </div>
      </div>
      <img src="" alt="" />
    </div>
  );
}

export default Header;

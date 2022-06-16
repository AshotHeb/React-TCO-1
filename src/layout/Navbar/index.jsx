// import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { NAVBAR_LINKS } from "../../consts";
import { NavItem } from "./NavItem";
import { NavItemAuth } from "./NavItemAuth";
import { NavItemPrivate } from "./NavItemPrivate";
import { NavItemPublic } from "./NavItemPublic";
import "./styles.css";

const { project, contact, aboutMe, registration, login } = NAVBAR_LINKS;

export const ConnectedNavbar = ({ isLoggedInUser }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <NavItemPrivate label={aboutMe.label} link={aboutMe.link} />
        <NavItemPrivate label={project.label} link={project.link} />

        <NavItemPublic label={contact.label} link={contact.link} />

        <NavItemAuth label={registration.label} link={registration.link} />
        <NavItemAuth label={login.label} link={login.link} />
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedInUser: state.authReducerState.isLoggedInUser,
  };
};
export const Navbar = connect(mapStateToProps)(ConnectedNavbar);

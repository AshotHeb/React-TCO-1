// import { useLocation } from "react-router-dom";
import { NAVBAR_LINKS } from "../../consts";
import { NavItem } from "./NavItem";
import "./styles.css";

const { project, contact, aboutMe } = NAVBAR_LINKS;

export const Navbar = () => {
  // const pathname = useLocation().pathname;

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <NavItem label={aboutMe.label} link={aboutMe.link} />
        <NavItem label={project.label} link={project.link} />
        <NavItem label={contact.label} link={contact.link} />
      </ul>
    </nav>
  );
};

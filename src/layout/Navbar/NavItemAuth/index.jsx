import { AuthLoginHoc } from "../../../hoc/AuthLogin";
import { NavItem } from "../NavItem";

const NavItemAuthChild = ({ label, link, isLoggedInUser }) => {
  if (isLoggedInUser) {
    return null;
  }

  return <NavItem label={label} link={link} />;
};

export const NavItemAuth = (props) => {
  return <AuthLoginHoc Component={NavItemAuthChild} {...props} />;
};

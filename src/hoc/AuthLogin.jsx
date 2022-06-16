import { connect } from "react-redux";

const ConnectedAuthLoginHoc = ({ Component, ...props }) => {
  return <Component {...props} />;
};

const mapStateToProps = (state) => {
  return {
    isLoggedInUser: state.authReducerState.isLoggedInUser,
  };
};
export const AuthLoginHoc = connect(mapStateToProps)(ConnectedAuthLoginHoc);

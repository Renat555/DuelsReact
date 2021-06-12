const { connect } = require("react-redux");
const { registrationThunk } = require("../../redux/profileReducer");
const { default: Registration } = require("./Registration");

let mapStateToProps = (state) => {
  return {
    user: state.game.user,
  };
};

const RegistrationContainer = connect(mapStateToProps, { registrationThunk })(
  Registration
);

export default RegistrationContainer;

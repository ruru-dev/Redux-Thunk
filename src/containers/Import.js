import { connect } from "react-redux";
import Import from "../components/Import";
import { fetchMakes, deleteMake } from "../redux/actions";

const mapStateToProps = (state) => ({ makes: state.makes });

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMakes: () => fetchMakes(dispatch),
    deleteMake: (makeId) => dispatch(deleteMake(makeId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Import);

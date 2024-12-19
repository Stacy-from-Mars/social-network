import {refreshFriendsCreator} from "../../redux/sidebar-reducer";
import Navbar from "./Navbar";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        refreshFriends: () => dispatch(refreshFriendsCreator())
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer;
import { connect } from "react-redux";
import ContactListContainer from "./ContactListContainer";
import { actionCreators as contactActions } from "../../redux/modules/contact";

const mapStateToProps = state =>{
    const {contact : {contactList}} = state;
    return {
        contactList,
    };
}

//useDispastch
const mapDispatchToProps = (dispatch) =>{
    const setContactList = contactList => dispatch(contactActions.setContactList(contactList))
    return {
        setContactList
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactListContainer)
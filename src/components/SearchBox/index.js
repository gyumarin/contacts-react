import SearchBoxContainer from "./SearchBoxContainer";
import { connect } from "react-redux";
import { actionCreators as contactActions } from "../../redux/modules/contact";
//actionCreators를 import하여, contactActions라는 이름으로 사용하겠다.


//useSelector 역할
const mapStateToProps = state =>{
    const {contact : {searchKeyword}} = state;
    return {
        searchKeyword
    };
}

//useDispastch
const mapDispatchToProps = (dispatch) =>{
    const setSearchKeyword = keyword => 
    dispatch(contactActions.setSearchKeyword(keyword))
    return {
        setSearchKeyword,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer);
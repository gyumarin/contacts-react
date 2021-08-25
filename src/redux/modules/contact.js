const SET_SEARCH_KEYWORD = "SET_SEARCH_KEYWORD";

const SET_CONTACT_LIST = "SET_CONTACT_LIST";


const initalState = {
    searchKeyword : "",
    contactList: [
        {id:1, name : "park gyu min"},
        {id:2, name : "park jung min"}
    ]
}




const reducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_SEARCH_KEYWORD :
            return applySetSearchKeyword(state, action);
        
        case SET_CONTACT_LIST : 
            return applySetContactList(state, action);
    
        default:
            return state;
    }
}

const setSearchKeyword = keyword => {
    return {
        type : SET_SEARCH_KEYWORD,
        keyword
    }
}

const applySetSearchKeyword = (state, action) => {
    const {keyword} = action

    return {
        ...state,
        searchKeyword : keyword
    }
}

const setContactList = contactList => {
    return {
        type : SET_CONTACT_LIST,
        contactList
    }
}

const applySetContactList = (state, action) => {
    const {contactList} = action

    return {
        ...state,
        contactList
    }
}

export default reducer;

export const actionCreators ={
    setSearchKeyword,
    setContactList,

}
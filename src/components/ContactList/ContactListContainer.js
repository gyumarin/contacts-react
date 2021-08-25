import React, {PureComponent} from "react";
import ContactListPresenter from './ContactListPresenter'


//미리 비동기형(Promise)으로 데이터를 담도록 하여, 테스트 데이터를 이런식으로 만든다.
const getContactList = () => {
    return new Promise((resolve) => {
        const contactList = [
            {id:1, name : "park gyu min 1"},
            {id:2, name : "park jung min 2"},
            {id:3, name : "park gyu min 3"},
            {id:4, name : "park jung min 4 "},        
            {id:5, name : "park gyu min 5 "},
            {id:6, name : "park jung min 6"},
        ];
        setTimeout(()=>{
            resolve(contactList);
        },2000)

        //resolve(contactList);
    })
}

class ContactListContainer extends PureComponent{

    componentDidMount(){
        this.getContactList();
    }

    getContactList = async () => {
        const {setContactList} = this.props
        const contactList = await getContactList();
        setContactList(contactList)
        
    }

    render(){
        return <ContactListPresenter {...this.props} 
       />
    }
}

export default ContactListContainer;
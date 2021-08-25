import React, { useEffect } from 'react'

const SearchBoxPresenter = (props) => {

    const {searchKeyword, handleChangeSearchKeyword} = props;

    useEffect(()=>{
        console.log(searchKeyword);
    },[searchKeyword])

    return (
        <div>
            <input type="text" value={searchKeyword} onChange={handleChangeSearchKeyword}/>
        </div>
    )
}

export default SearchBoxPresenter
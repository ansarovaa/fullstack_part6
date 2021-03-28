import React from 'react'
import {connect} from "react-redux";
import {applyFilter} from "../reducers/filterReducer";

const Filter = (props) => {
    const handleChange = (event) => {
        const filterInput = event.target.value;
        props.applyFilter(filterInput)
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter
            <input onChange={handleChange}/>
        </div>
    )
}


const mapDispatchToProps = {
    applyFilter
}

export default connect(null, mapDispatchToProps)(Filter)
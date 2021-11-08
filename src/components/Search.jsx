import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const Search = () => {
    const [categories, setCategories] = useState([])
    const history = useHistory();
    const [formInfo, setFormInfo] = useState({
        id:"",
        category:"people"
    })

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
            .then(response=>{
                console.log(response.data)
                setCategories(Object.keys(response.data))
            })
            .catch(err=>console.log(err))
    },[])

    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.get(`https://swapi.dev/api/${formInfo.category}/${formInfo.id}/`)
        .then(response=>{
            history.push(`/${formInfo.category}/${formInfo.id}/`)
        })
        .catch(err=> console.log(err))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Search for: </label>
                    <select onChange={changeHandler} name="category">{
                        categories.map((category, i)=>{
                            return(
                                <option key={i} value={category}>{category}</option>
                            )
                        })}
                    </select>
                <label>ID: </label>
                <input onChange={changeHandler} type="number" name="id"/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    );
};

Search.propTypes = {};

export default Search;
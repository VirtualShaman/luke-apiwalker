import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Info = () => {
    const { id, category } = useParams();
    const [info, setInfo] = useState({})

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
        .then(response=>{
            console.log(response)
            setInfo(response.data)
        })
        .catch(err=>console.log(err))
    }, [id])

    return (
        <div>
            {category == 'people'?
                <>
                <h1>{info.name}</h1>
                <p>Height: {info.height}</p>
                <p>Mass: {info.mass}</p>
                <p>Hair Color: {info.hair_color}</p>
                <p>Skin Color: {info.skin_color}</p>
                </>:category =='planets'?
                <>
                    <h1>{info.name}</h1>
                    <p>Climate: {info.climate}</p>
                    <p>Terrain: {info.terrain}</p>
                    <p>Surface Water: {info.surface_water}</p>
                    <p>Population: {info.population}</p>
                </>:<h1>Category not yet supported</h1>
            }
        </div>
    );
};

Info.propTypes = {};

export default Info;
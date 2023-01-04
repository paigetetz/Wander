
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import PostsContainer from './PostsContainer';
import {Link} from "react-router-dom"
function ExperienceShow({user}) {
    const {id} = useParams();

    const [experience, setExperience] = useState([]);
    
    useEffect(() => {
        fetch(`/experiences/${id}`)
        .then(response => response.json())
        .then(data => {
            setExperience({...data})
        })
    },[id])
    return (

        <div>
            <div>
            <img className='tile_image' src={experience.image_url} alt={experience.name} />
                <h3>{experience.name}</h3>
                <h4>{experience.location}</h4>
                <h5>${experience.price}</h5>
                <h2>{experience.likes} Likes</h2>
                <p>{experience.description}</p>
            
                
            </div>
        <Link to={`/experience/experience/${experience.id}`}><PostsContainer user={user}/></Link>
        </div>
    );
}

export default ExperienceShow;
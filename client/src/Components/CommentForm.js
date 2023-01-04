import React from 'react';
import { useNavigate } from 'react-router-dom';

function CommentForm() {
    let navigate = useNavigate();
    let initialFormState = {
        comment: ""
    }

    const [formData, setFormData] = useState(initialFormState);
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/posts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(response => response.json())
            .then(data => {
                setFormData(initialFormState)
                setExperiencesData([data, ...experiencesData])
                navigate(`/experience/experience/${experience.id}`)
            })
        }

            let handleChange = (e) => {
                let name = e.target.name
                let value = e.target.value
                setFormData({
                    ...formData,
                    [name]:value
                })
            }
        
        

    return (
        <div>
            <h3>add Comment</h3>
            <form id="form" onSubmit={handleSubmit}>
                <input className="input_field" value={formData.user.posts} placeholder="name" name="posts" type="text" onChange={handleChange}/>
                <button className="button-85" id="create-experience-button">add comment</button>
 
            </form>
            
        </div>
    );
}

export default CommentForm;
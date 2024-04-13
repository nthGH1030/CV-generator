import {useState, useEffect} from 'react'
import '.././styles.css'


/*
1. Once user clicked submit, change state to lock furhter user input, unclok user clicked edit button
2. How to show the profile pic uploaded by user
3. 

*/

export default function Background() {
    const [inputValues, setInputValues] = useState({
        Name: '', 
        Sex: '', 
        Birth: '', 
        Address: '', 
        Email: '', 
        Phone: ''
    });
    const [isEditing, setEditing] = useState(true);
    const [profilePic, setProfilePic] = useState(null);

    return(
        <>
        <div className = "profile-container">
            <div className = "profile-infoContainer">
            {Object.entries(inputValues).map(([key, value]) => (
                <ProfileInfo 
                    key = {key}
                    label = {key}
                    value = {value}
                    onChange = {(e) => setInputValues({...inputValues, [key]: e.target.value})}
                    isEditing = {isEditing}
                />
            ))}
            </div>
            <div className = "profile-pic-container">
            <ProfilePic
                onChange = {(e) => setProfilePic(URL.createObjectURL(e.target.files[0]))}
                isEditing = {isEditing}
                profilePic = {profilePic}
                
            />

            </div>
        </div>


        

        <EditBtn
            handleEdit = {() => setEditing(true)}
        />
        
        
        <SubmitBtn
            handlesubmit = {() => handleSubmit(inputValues, profilePic)}
            handleDisable = {() => setEditing(false)}

        />
        
        </>
    )
    
}


function handleSubmit(inputValues, profilePic){
    //setInputValues({...inputValues, [e.target.name]: e.target.value});
    console.log(inputValues);
    console.log(profilePic);
    
}


function SubmitBtn({handlesubmit, handleDisable}) {
    const handleClick = () => {
        handlesubmit();
        handleDisable();

    }
    
    return (
        <>
        <button
            onClick = {handleClick} 
        >
        Submit
        </button>
        </>
    )
}

function EditBtn({handleEdit}) {
    const handleClick = () => {
        handleEdit();
    }

    return (
        <>
        <button
            onClick = {handleClick}
        >
        Edit
        </button>
        </>
    )
}


function ProfileInfo({label, value, onChange, isEditing}) {

    return(
        <div className = "profile-info">
            <label className = "label">{`${label} :`} </label>
        
            <input
                type = "text" 
                value = {value}
                onChange = {onChange}
                placeholder = {`Enter ${label}`}
                className = {`inputField`}
                disabled = {!isEditing} 
            />
            <br />
        </div>
    )
}

function ProfilePic({onChange, isEditing, profilePic}){
    
    return (
        <>  
            <div className = 'profilePic'>
                {profilePic && <img src={profilePic} alt="Profile" />}
                {!profilePic && isEditing && (
            <div className="profilePic__label">
                <span>Upload Image</span>
            </div>
        )}
      
        <input
            type = "file"
            accept = "image/png, image/jpeg, image/gif"
            onChange = {onChange}
            disabled = {!isEditing}
        />
        </div>
        </>
    )

}
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
        PhoneNumber: ''
    });
    const [isEditing, setEditing] = useState(true);
    const [profilePic, setProfilePic] = useState(null);

    return(
        <>
        {Object.entries(inputValues).map(([key, value]) => (
            <ProfileInfo 
                key = {key}
                label = {key}
                value = {value}
                onChange = {(e) => setInputValues({...inputValues, [key]: e.target.value})}
                isEditing = {isEditing}
            />
        ))}
  
        <br />
        <ProfilePic
            onChange = {(e) => setProfilePic(e.target.files[0])
            }
            isEditing = {isEditing}
        />
        <br />

        

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

    const classDisable = isEditing ? '' : 'disabled';

    return(
        <>
        {`${label} :`}
        <input
            type = "text" 
            value = {value}
            onChange = {onChange}
            placeholder = {`Enter ${label}`}
            className = {`${classDisable} inputField`}
            disabled = {!isEditing}
            
        />
        <br />
        </>
    )
}

function ProfilePic({onChange, isEditing}){

    const classDisable = isEditing ? '' : 'disabled';

    return (
        <>
        <input
            type = "file"
            accept = "image/png, image/jpeg, image/gif"
            onChange = {onChange}
            className = {`${classDisable} profilePic`}
            disabled = {!isEditing}
        />
        </>
    )

}
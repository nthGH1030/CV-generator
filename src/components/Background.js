import {useState, useEffect} from 'react'
import '.././styles.css'


/*
1. Once user clicked submit, change state to lock furhter user input, unclok user clicked edit button
2. How to allow user to upload profile pic
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

    const handleDisable = (isEditing) => {
        setEditing(isEditing)
        console.log(isEditing)
    }

    return(
        <>
        {Object.entries(inputValues).map(([key, value]) => (
            <ProfileInfo 
                key = {key}
                label = {key}
                value = {value}
                onChange = {(e) => setInputValues({...inputValues, [key]: e.target.value})}
                disabled = {isEditing}
            />
        ))}
  

        <ProfilePic
        
        />
        

        <SubmitBtn
            text = 'Submit'
            handlesubmit = {() => handleSubmit(inputValues)}
            handleDisable = {() => handleDisable(false)}

        />
        
        </>
    )
    
}


function handleSubmit(inputValues){
    //setInputValues({...inputValues, [e.target.name]: e.target.value});
    console.log(inputValues);
    
}



/*
function handleEdit(){
    setEditing(true);
}
*/


function SubmitBtn({text, handlesubmit, handleDisable}) {
    const handleClick = () => {
        handlesubmit();
        handleDisable();
    }
    
    return (
        <>
        <button
            onClick = {handleClick} 
        >
        {text}
        </button>
        </>
    )
}


function ProfileInfo({label, value, onChange, disabled}) {

    const inputClassName = disabled ? 'disabled' : '';

    return(
        <>
        {`${label} :`}
        <input
            type = "text" 
            value = {value}
            onChange = {onChange}
            placeholder = {`Enter ${label}`}
            className = {inputClassName}
            disabled = {disabled}
            
        />
        <br />
        </>
    )
}

function ProfilePic(){
    return (
        <>
        </>
    )

}
import {useState} from 'react'


/*
1. handle isediting by toggle a class that lock and unlock the input field
2. Does setinput take the value as key / value pairs? need a data structure to store things 
3. How to allow user to upload profile pic
4. 

*/

export default function background() {
    const [inputValues, setInputValues] = useState([]);
    const [isEditing, setEditing] = useState(true);
    
    return(
        <>
        <ProfileInfo
            label = "Name: "
            value = {inputValues['Name']}
            onChange = {(e) => setInputValues({...inputValues, 'Name': e.target.value})}
            
        />

        <ProfilePic
        
        />
        

        <submitBtn
            text = 'Submit'
            handleSubmit = {handleSubmit}
        />
        
        </>
    )
}

function handleSubmit(e){
    setInputValues({...inputValues, [e.target.name]: e.target.value});
    setEditing(false);
}

function handleEdit(){
    setEditing(true);
}

function submitBtn(text, handleSubmit) {
    return (
        <>
        <button
            text = {text}
            onClick = {handleSubmit}
        />
        </>
    )
}


function ProfileInfo({label, type, value, onChange, placeHolder}) {
    return(
        <>
        {label} 
        <input
            type = {type}
            value = {value}
            onChange = {onChange}
            placeHolder = {`Enter ${label}`}
        />
        </>
    )
}

function ProfilePic(){
    return (
        <>
        </>
    )

}
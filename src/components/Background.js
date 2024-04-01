import {useState, useEffect} from 'react'


/*
1. handle isediting by toggle a class that lock and unlock the input field
2. Does setinput take the value as key / value pairs? need a data structure to store things 
3. How to allow user to upload profile pic
4. 

*/

export default function Background() {
    const [inputValues, setInputValues] = useState({Name: '', Sex: '', Email: '', Address: ''});
    //const [isEditing, setEditing] = useState(true);
    const handlesubmit = () => {
        console.log(inputValues);
    }

    return(
        <>
        <ProfileInfo
            label = "Name: "
            value = {inputValues['Name']}
            onChange = {(e) => setInputValues({...inputValues, 'Name': e.target.value})}
            
        />
        

        <ProfilePic
        
        />
        

        <SubmitBtn
            text = 'Submit'
            handlesubmit = {handlesubmit}
        />
        
        </>
    )
    
}

/*
function handlesubmit(inputValues){
    //setInputValues({...inputValues, [e.target.name]: e.target.value});
    console.log(inputValues);
    
}
*/

/*
function handleEdit(){
    setEditing(true);
}
*/

function SubmitBtn({text, handlesubmit}) {
    return (
        <>
        <button
            onClick = {handlesubmit}
        >
        {text}
        </button>
        </>
    )
}


function ProfileInfo({label, type, value, onChange}) {
    return(
        <>
        {label} 
        <input
            type = {type}
            value = {value}
            onChange = {onChange}
            placeholder = {`Enter ${label}`}
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
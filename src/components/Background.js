import {useState, useEffect} from 'react'


/*
1. handle isediting by toggle a class that lock and unlock the input field
2. Does setinput take the value as key / value pairs? need a data structure to store things 
3. How to allow user to upload profile pic
4. 

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
    //const [isEditing, setEditing] = useState(true);
    
    const handlesubmit = () => {
        console.log(inputValues);
    }

    return(
        <>
        {Object.entries(inputValues).map(([key, value]) => (
            <ProfileInfo
                key = {key}
                label = {key}
                value = {value}
                onChange = {(e) => setInputValues({...inputValues, [key]: e.target.value})}
                
            />
            

        ))}
  

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


function ProfileInfo({label, value, onChange}) {
    return(
        <>
        {label} 
        <input
            type = "text"
            value = {value}
            onChange = {onChange}
            placeholder = {`Enter ${label}`}
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
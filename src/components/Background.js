import {useState} from 'react'


/*
1.  handle isediting by toggle a class that lock and unlock the input field

*/

export default function background() {
    const [input, setInput] = useState('');
    const [isEditing, setEditing] = useState(true);
    
    
    return(
        <>
        <ProfileInfo
            label = "Name: "
            
        />

        <ProfilePic/>
        </>
    )

}

function handleSubmit(e){
    setInput(e.target.value);
    setEditing(false);
}

function handleEdit(){
    setEditing(true);
}

function ProfileInfo({label}) {
    return(
        <>
        {label} 
        <input
        
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
import {useState, useEffect} from 'react'
import '.././styles.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/*
1. How to add and remove a field ?
- when click on the add button, update the state and append to the state array

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
    const [workExp, setWorkExp] = useState ([{
        id: 1,
        Title: '',
        Company: '',
        Period: '',
        Description: '',
    }])
    const [isEditing, setEditing] = useState(true);
    const [profilePic, setProfilePic] = useState(null);
    const [startDate, setStartDate] = useState(new Date());

    let handleAdd = () => {
    const newId = workExp.length > 0 ? workExp[workExp.length - 1].id + 1 : 1;
    const newWorkExp = [...workExp, {
        id: newId,
        Title: '',
        Company: '',
        Period: '',
        Description: '',
    }];
    setWorkExp(newWorkExp);
    }

    let handleRemove = (id) => {
        if (workExp.length <= 1)
        {
            alert("you cannot delete the only field")
        }
        else {
            const updatedWorkExp = [...workExp];
            const index = updatedWorkExp.findIndex((exp) => exp.id === id);
            updatedWorkExp.splice(index , 1);
            setWorkExp(updatedWorkExp);
            console.log(workExp);
        }

    }

    let handleExperienceChange = (id,key, e) => {
        const updatedWorkExp = [...workExp];
        const index = updatedWorkExp.findIndex((exp) => exp.id === id);
        updatedWorkExp[index] = {...updatedWorkExp[index], [key]: e.target.value};
        setWorkExp(updatedWorkExp);
    }

    return(
        <>
        <div className = "profile-container">
            <div className = "profile-infoContainer">
            {Object.entries(inputValues).map(([key, value]) => {
                if (key ==='Birth')
                {
                    return (          
                        <ProfileInfoBirth 
                            key = {key}
                            label = {key}
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)}
                            isEditing = {isEditing}
                        />
                    )
                } else {
            return (
                <ProfileInfo 
                    key = {key}
                    label = {key}
                    value = {value}
                    onChange = {(e) => setInputValues({...inputValues, [key]: e.target.value})}
                    isEditing = {isEditing}
                />
                    );
                        }
            })}
            </div>

            <div className = "profile-pic-container">
                <ProfilePic
                    onChange = {(e) => setProfilePic(URL.createObjectURL(e.target.files[0]))}
                    isEditing = {isEditing}
                    profilePic = {profilePic}
                    
                />

                <div className = "edit-submit-container">
                    <EditBtn
                        handleEdit = {() => setEditing(true)}
                    />
                    <SubmitBtn
                        handlesubmit = {() => handleSubmit(inputValues, profilePic)}
                        handleDisable = {() => setEditing(false)}
                    />
                </div>
            </div>
        </div>
        <div className = "profile-container">
            <div className = "profile-infoContainer">
            <div className = "add-remove-container">
                    <AddItem
                        handleAdd = {() => handleAdd()}
                    />
                    <RemoveItem
                        handleRemove = {() => handleRemove()}
                    />
                </div>
            {workExp.map((experience) => (
                <div key={experience.id}>
                    {Object.entries(experience).map(([key, value]) => (
                           
                    <WorkExperience
                        key={key}
                        label={key}
                        value={value}
                        onChange={(e) => {
                        handleExperienceChange(experience.id,key, e)}}
                        isEditing={isEditing}
                    />
                    ))}
                

                <div className = "edit-submit-container">
                    <EditBtn
                        handleEdit = {() => setEditing(true)}
                    />
                    <SubmitBtn
                        handlesubmit = {() => handleSubmit(inputValues, profilePic)}
                        handleDisable = {() => setEditing(false)}
                    />
                </div>
                </div>
                
                ))}
            </div>

        </div>
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
            className = "button edit submit"
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
            className = "button edit submit"
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

function ProfileInfoBirth({label, selected, onChange, isEditing}){

    return(
        <div className = "profile-info">
        <label className = "label">{`${label} :`} </label>

        <DatePicker
            selected={selected} 
            onChange = {onChange}
            onSelect = {onChange}
            disabled={!isEditing}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
        />
    </div>
    )
}

function ProfilePic({onChange, isEditing, profilePic}){
    
    return (
        <>  
        <div className = 'profilePic'>
            {isEditing && !profilePic && <label>Upload your portrait</label>}
            {profilePic && 
                <img src={profilePic} alt="Profile" height = "300px" width = "300px" />}
            <input
                type = "file"
                accept = "image/png, image/jpeg, image/gif, image.jpg"
                onChange = {onChange}
                disabled = {!isEditing}
            />
        </div>
        </>
    )

}

function WorkExperience({label, value, onChange, isEditing})
{
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

function AddItem({handleAdd})
{
    return (
        <>
        <button
            onClick = {handleAdd}
            className = "button add remove"
        >
        +
        </button>
        </>
    )
}

function RemoveItem({handleRemove})
{
    return (
        <>
        <button
            onClick = {handleRemove}
            className = "button add remove"
        >
        X
        </button>
        </>
    )
}
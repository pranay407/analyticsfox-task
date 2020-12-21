import React, {useState } from 'react'
import Modal from 'react-modal';
import './Form.css'

function Form() {
    const [username, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [salary, setSalary] = useState(0);
    const [modalIsOpen, setModalIsOpen] =useState(true)

    const[details, setDetails] = useState([])

    const handleSubmit = () =>{

        let passVal = /^[A-Za-z]\w{7,14}$/;
        let emailVal = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(username.length < 3){
            alert('enter more than 3 char')
        }

        if(pass.length < 3 || pass !== passVal){
            alert("Password should conatin atleast 8 character. It must conatin at least one numeric digit, one uppercase and one lowercase letter.")
        }
        if(email !== /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ){
            alert('please enter valid email');
        }
        if(phone !== /^\d{10}$/){
            alert('please enter valid number')
        }
        if(salary !==/^(?:0|[1-9]\d*)(?:\.(?!.*000)\d+)?$/){
            alert('enter right salary')
        }
        setDetails(username,pass,email,phone,gender,address,salary)
    }
    console.log(details)
    const handleName = (e) => {
        setUserName(e.target.value);  
    }

    const handlePass = (e) => {
        setPass(e.target.value);  
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);  
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);  
    }

    const handleGender = (e) => {
        setGender(e.target.value);  
    }

    const handleAddress = (e) => {
        setAddress(e.target.value);  
    }

    const handleSalary = (e) => {
        setSalary(e.target.value);  
    }

    console.log( "username"+username)
    
    return (
        <div>


            <div className="container">
                <h3>User Details</h3>
                <table>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Salary</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button onClick={()=>setModalIsOpen(true)}>edit</button></td>
                    </tr>

                </table>

                
            </div>
                    
            <Modal isOpen={modalIsOpen} >
                <div className="formContaoner" >

                    <h3>User Details Form</h3>
                    <form onSubmit={handleSubmit}>
                        <label>Username:</label><br></br>
                        <input onChange={handleName}  name="username" type="text" placeholder="username" required></input><br/>

                        <label>Password:</label><br></br>
                        <input type="password" onChange={handlePass} name="password" required></input><br/>

                        <label>Email:</label><br/>
                        <input type="email" onChange={handleEmail} name="email" required></input><br/>

                        <label>Phone:</label><br/>
                        <input type="number" onChange={handlePhone} name="phone" required></input><br/>

                        <label>Gender:</label><br/>
                        <input type="text" onChange={handleGender} name="gender" placeholder="Male/Female" required></input><br/>

                        <label>Address:</label><br/>
                        <textarea onChange={handleAddress} name="address" required></textarea><br/>

                        <label>Salary:</label><br/>
                        <input type="number" onChange={handleSalary} name="salary" required></input><br/>

                        <button >Submit</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default Form

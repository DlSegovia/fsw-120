import React, {useState, useEffect} from 'react';

const Services = () => {
const [firstName, setfirstName] = useState('')
const [password, setPassword] = useState('')
// const [newUser, setUser] = useState({})
const [allUsers, setAllUsers] = useState([])

const formCleanUp = () => {
  setPassword('')
  setfirstName('')
}

const handleSubmit = (e) => {
    e.preventDefault()
      let newUser = {firstName : firstName, password: password}
      setAllUsers([...allUsers, newUser])
      formCleanUp()

  return (
    <div className="Services">
      Services
    
      <form onSubmit={handleSubmit}>
          First Name:
          <input 
            type='text'
            name='firstName'
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            />
            Password:
            <input 
            type='text'
        name='password'
        onChange={(e) => setPassword(e.target.value)}
        />
      </form>

    </div>
  );
}
}
export default Services
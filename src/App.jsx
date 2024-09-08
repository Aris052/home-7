import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import './App.css'
import { AddUser } from './components/add-user'
import { UserList } from './components/userlist'

export default function App() {
  const [users, setUsers] = useState([])

  const handleAddUser = user => {
    setUsers([...users, user])
  }

  return (
    <>
      <AddUser onAddUser={handleAddUser} />
      <UserList users={users} />
      <ToastContainer />
    </>
  )
}


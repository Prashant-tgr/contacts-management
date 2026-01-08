import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contacts'
const API = `${BASE_URL}/api/contacts`;

export default function App() {
  const [contacts, setContacts] = useState([])
  const [message, setMessage] = useState(null)

  const fetchContacts = async () => {
    try {
      const res = await axios.get(API)
      setContacts(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => { fetchContacts() }, [])

  const handleAdd = (contact) => {
    setContacts(prev => [contact, ...prev])
    setMessage('Contact submitted successfully')
    setTimeout(() => setMessage(null), 3000)
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`)
      setContacts(prev => prev.filter(c => c._id !== id))
    } catch (err) { console.error(err) }
  }

  return (
    <div className="container py-4">
      <h1 className="mb-4">Contact Management</h1>
      {message && <div className="alert alert-success">{message}</div>}
      <div className="row">
        <div className="col-md-5">
          <ContactForm onAdd={handleAdd} apiUrl={API} />
        </div>
        <div className="col-md-7">
          <ContactList contacts={contacts} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  )
}

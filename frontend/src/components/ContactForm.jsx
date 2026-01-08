import React, { useState } from 'react'
import axios from 'axios'

export default function ContactForm({ onAdd, apiUrl }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Email is invalid'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      const res = await axios.post(apiUrl, form)
      onAdd(res.data)
      setForm({ name: '', email: '', phone: '', message: '' })
      setErrors({})
    } catch (err) {
      console.error(err)
      alert('Failed to submit contact')
    } finally { setLoading(false) }
  }

  const isValid = () => {
    return form.name.trim() && form.phone.trim() && (!form.email || /^\S+@\S+\.\S+$/.test(form.email))
  }

  return (
    <form onSubmit={handleSubmit} className="card p-3">
      <div className="mb-3">
        <label className="form-label">Name *</label>
        <input name="name" value={form.name} onChange={handleChange} className="form-control" />
        {errors.name && <div className="text-danger small">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input name="email" value={form.email} onChange={handleChange} className="form-control" />
        {errors.email && <div className="text-danger small">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Phone *</label>
        <input name="phone" value={form.phone} onChange={handleChange} className="form-control" />
        {errors.phone && <div className="text-danger small">{errors.phone}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} className="form-control" />
      </div>

      <button type="submit" className="btn btn-primary" disabled={!isValid() || loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

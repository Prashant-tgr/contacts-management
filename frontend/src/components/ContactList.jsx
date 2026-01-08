import React from 'react'

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className="card p-3">
      <h5>Contacts</h5>
      {contacts.length === 0 ? (
        <div className="text-muted">No contacts yet</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(c => (
                <tr key={c._id}>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td>{c.message}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(c._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

import React, { useState } from "react";
import "./DriversAdmin.css";

const DriversAdmin = () => {
  const [drivers, setDrivers] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [editId, setEditId] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const addDriver = (e) => {
    e.preventDefault();

    if (isEditing) {
      setDrivers(
        drivers.map((driver) =>
          driver.id === editId
            ? { ...driver, name, email, phone }
            : driver
        )
      );
    } else {
      const newDriver = {
        id: Date.now(),
        name,
        email,
        phone,
      };

      setDrivers([...drivers, newDriver]);
    }

    resetForm();
  };

  const deleteDriver = (id) => {
    setDrivers(drivers.filter((driver) => driver.id !== id));
  };

  const editDriver = (driver) => {
    setShowForm(true);
    setIsEditing(true);
    setEditId(driver.id);

    setName(driver.name);
    setEmail(driver.email);
    setPhone(driver.phone);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setShowForm(false);
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="drivers-page">
      <div className="page-header">
        <h1>Manage Drivers</h1>
        <button className="add-btn" onClick={() => setShowForm(true)}>
          + Add Driver
        </button>
      </div>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h3>{isEditing ? "Edit Driver" : "Add New Driver"}</h3>

            <form onSubmit={addDriver}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <div className="modal-buttons">
                <button type="submit">
                  {isEditing ? "Update" : "Save"}
                </button>

                <button type="button" onClick={resetForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id}>
              <td>{driver.id}</td>
              <td>{driver.name}</td>
              <td>{driver.email}</td>
              <td>{driver.phone}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => editDriver(driver)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteDriver(driver.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {drivers.length === 0 && (
            <tr>
              <td colSpan="5" className="empty">
                No drivers added yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DriversAdmin;
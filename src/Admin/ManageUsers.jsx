import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ManageUsers.css";
import { toast } from "react-toastify";

import Swal from "sweetalert2/dist/sweetalert2.js";

function ManageUsers() {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/auth/admin/manageUsers",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      setUsers(res.data.users);
    } catch (error) {
      console.log(
        "Error fetching users:",
        error.response?.data || error.message,
      );
    }
  };

  const handleDelete = async (id) => {
    const result = Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`http://localhost:5000/api/auth/admin/user/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });

          toast.success("User deleted successfully");
          fetchUser();
        } catch (e) {
          console.log("Error :", e.response?.data);
        }
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not deleted", "", "info");
      }
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h2>Manage Users</h2>

      <table className="user-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageUsers;

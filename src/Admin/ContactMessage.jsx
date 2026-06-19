import React, { useEffect, useState } from "react";
import "./ContactMessage.css";
import axios from "axios";

import { toast } from "react-toastify";
import Swal from "sweetalert2/dist/sweetalert2.js";

const ContactMessage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/contact/admin/messages",
        );

        setData(res.data.message || []);
      } catch (e) {
        console.log("Error:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h2 className="loading">Loading messages...</h2>;
  }

  const deleteMessage = async (id) => {
    const result = await Swal.fire({
      title: "Do you want to delete this message?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const res = await axios.delete(
          `http://localhost:5000/api/contact/admin/message/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );

        if (res.data.message === "Message deleted successfully") {
          setData((prev) => prev.filter((msg) => msg._id !== id));

          Swal.fire("Deleted!", "Message has been deleted.", "success");
        }
      } catch (e) {
        console.log("Delete Error:", e);

        Swal.fire("Error", "Something went wrong!", "error");
      }
    }
  };
  
  return (
    <div className="table-container">
      <h1>Contact Messages</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((msg) => (
              <tr key={msg._id}>
                <td>{msg.fullName}</td>
                <td>{msg.email}</td>
                <td>{msg.phoneNo}</td>
                <td>{msg.subject}</td>
                <td>{msg.message}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteMessage(msg._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="empty">
                No messages found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactMessage;

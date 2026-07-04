import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DriversAdmin.css";
import { toast } from "react-toastify";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "react-toastify/dist/ReactToastify.css";

const DriversAdmin = () => {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingDriver, setEditingDriver] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    truckType: "",
    truckYear: "",
    licensePlate: "",
    mcNo: "",
    experience: "",
    route: "",
    homeTerminal: "",
  });

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:5000/api/driverform/all",
      );
      setDrivers(response.data.drivers || []);
      toast.success("Drivers loaded successfully!");
    } catch (error) {
      console.log("Error fetching drivers:", error);
      toast.error("Failed to load drivers. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, driverName) => {
    const result = await Swal.fire({
      title: `Delete ${driverName}?`,
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/api/driverform/delete/${id}`);
        setDrivers((prev) => prev.filter((driver) => driver._id !== id));
        toast.success(`${driverName} deleted successfully!`);

        Swal.fire({
          title: "Deleted!",
          text: `${driverName} has been deleted.`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      } catch (error) {
        console.log("Error deleting driver:", error);
        toast.error("Failed to delete driver. Please try again.");
        Swal.fire({
          title: "Error!",
          text: "Failed to delete driver. Please try again.",
          icon: "error",
          timer: 3000,
          showConfirmButton: false,
        });
      }
    }
  };

  const handleEdit = (driver) => {
    setEditingDriver(driver);
    setFormData({
      fullName: driver.fullName || "",
      email: driver.email || "",
      phoneNo: driver.phoneNo || "",
      truckType: driver.truckType || "",
      truckYear: driver.truckYear || "",
      licensePlate: driver.licensePlate || "",
      mcNo: driver.mcNo || "",
      experience: driver.experience || "",
      route: driver.route || "",
      homeTerminal: driver.homeTerminal || "",
    });
    setShowEditForm(true);
    document.body.style.overflow = "hidden";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Update Driver?",
      text: `Are you sure you want to update ${formData.fullName}'s information?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await axios.put(
          `http://localhost:5000/api/driverform/update/${editingDriver._id}`,
          formData,
        );
        await fetchDrivers();
        handleCancelEdit();

        toast.success(`${formData.fullName} updated successfully!`);

        Swal.fire({
          title: "Updated!",
          text: `${formData.fullName}'s information has been updated.`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      } catch (error) {
        console.log("Error updating driver:", error);
        toast.error("Failed to update driver. Please try again.");
        Swal.fire({
          title: "Error!",
          text: "Failed to update driver. Please try again.",
          icon: "error",
          timer: 3000,
          showConfirmButton: false,
        });
      }
    }
  };

  const handleCancelEdit = () => {
    setShowEditForm(false);
    setEditingDriver(null);
    setFormData({
      fullName: "",
      email: "",
      phoneNo: "",
      truckType: "",
      truckYear: "",
      licensePlate: "",
      mcNo: "",
      experience: "",
      route: "",
      homeTerminal: "",
    });
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && showEditForm) {
        handleCancelEdit();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [showEditForm]);

  if (loading) {
    return <h2 className="loading">Loading drivers...</h2>;
  }

  return (
    <div className="drivers-page">
      <div className="page-header">
        <h1>Manage Drivers</h1>
      </div>

      {showEditForm && (
        <div className="edit-form-overlay" onClick={handleCancelEdit}>
          <div className="edit-form" onClick={(e) => e.stopPropagation()}>
            <h2>Edit Driver</h2>
            <form onSubmit={handleUpdate}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Truck Type</label>
                  <input
                    type="text"
                    name="truckType"
                    value={formData.truckType}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Truck Year</label>
                  <input
                    type="text"
                    name="truckYear"
                    value={formData.truckYear}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>License Plate</label>
                  <input
                    type="text"
                    name="licensePlate"
                    value={formData.licensePlate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>MC No</label>
                  <input
                    type="text"
                    name="mcNo"
                    value={formData.mcNo}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Experience</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Route</label>
                  <input
                    type="text"
                    name="route"
                    value={formData.route}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Home Terminal</label>
                  <input
                    type="text"
                    name="homeTerminal"
                    value={formData.homeTerminal}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="update-btn">
                  Update Driver
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="drivers-container">
        {drivers.length > 0 ? (
          drivers.map((driver, index) => (
            <div className="driver-card" key={driver._id}>
              <div className="driver-header">
                <h2>{driver.fullName}</h2>
                <span>Driver #{index + 1}</span>
              </div>

              <div className="driver-details">
                <div className="detail-item">
                  <label>Email</label>
                  <p>{driver.email}</p>
                </div>

                <div className="detail-item">
                  <label>Phone</label>
                  <p>{driver.phoneNo}</p>
                </div>

                <div className="detail-item">
                  <label>Truck Type</label>
                  <p>{driver.truckType}</p>
                </div>

                <div className="detail-item">
                  <label>Truck Year</label>
                  <p>{driver.truckYear}</p>
                </div>

                <div className="detail-item">
                  <label>License Plate</label>
                  <p>{driver.licensePlate}</p>
                </div>

                <div className="detail-item">
                  <label>MC No</label>
                  <p>{driver.mcNo}</p>
                </div>

                <div className="detail-item">
                  <label>Experience</label>
                  <p>{driver.experience}</p>
                </div>

                <div className="detail-item">
                  <label>Route</label>
                  <p>{driver.route}</p>
                </div>

                <div className="detail-item">
                  <label>Home Terminal</label>
                  <p>{driver.homeTerminal}</p>
                </div>
              </div>

              <div className="action-buttons">
                <button className="edit-btn" onClick={() => handleEdit(driver)}>
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(driver._id, driver.fullName)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty">No drivers found</div>
        )}
      </div>
    </div>
  );
};

export default DriversAdmin;

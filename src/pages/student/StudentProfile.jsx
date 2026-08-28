import { useState } from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import { currentStudent } from '../../data/mockStudentData';
import './StudentProfile.css';

function StudentProfile() {
  usePageTitle('My Profile');

  // Frontend-only "editing": toggles whether fields are editable and
  // holds a local copy of the student data. Nothing is persisted or
  // sent anywhere — that's explicitly a later phase.
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...currentStudent });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // In a later phase: send formData to the backend here.
  };

  return (
    <div className="student-profile">
      <div className="student-profile__header">
        <img src={currentStudent.avatarUrl} alt="" className="student-profile__avatar" />
        <div>
          <h2>{currentStudent.fullName}</h2>
          <p>Student ID: {currentStudent.id}</p>
        </div>
        <button
          className="btn btn--outline student-profile__edit-btn"
          onClick={() => setIsEditing((prev) => !prev)}
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      <form onSubmit={handleSave}>
        <section className="dashboard-panel">
          <h3>Personal Information</h3>
          <div className="profile-grid">
            <ProfileField label="Full Name" name="fullName" value={formData.fullName} editable={isEditing} onChange={handleChange} />
            <ProfileField label="Student ID" name="id" value={formData.id} editable={false} onChange={handleChange} />
            <ProfileField label="Email" name="email" type="email" value={formData.email} editable={isEditing} onChange={handleChange} />
            <ProfileField label="Phone" name="phone" value={formData.phone} editable={isEditing} onChange={handleChange} />
            <ProfileField label="Date of Birth" name="dateOfBirth" type="date" value={formData.dateOfBirth} editable={isEditing} onChange={handleChange} />
            <ProfileField label="Gender" name="gender" value={formData.gender} editable={isEditing} onChange={handleChange} />
            <ProfileField label="Address" name="address" value={formData.address} editable={isEditing} onChange={handleChange} wide />
          </div>
        </section>

        <section className="dashboard-panel">
          <h3>Academic Information</h3>
          <div className="profile-grid">
            <ProfileField label="Program" name="program" value={formData.program} editable={false} onChange={handleChange} />
            <ProfileField label="Department" name="department" value={formData.department} editable={false} onChange={handleChange} />
            <ProfileField label="Level" name="level" value={formData.level} editable={false} onChange={handleChange} />
            <ProfileField label="Admission Year" name="admissionYear" value={formData.admissionYear} editable={false} onChange={handleChange} />
            <ProfileField label="Academic Session" name="academicSession" value={formData.academicSession} editable={false} onChange={handleChange} />
          </div>
        </section>

        {isEditing && (
          <button type="submit" className="btn btn--primary">
            Save Changes
          </button>
        )}
      </form>
    </div>
  );
}

// Small local component: not exported/reused elsewhere, so it lives
// in this file rather than components/ — a reasonable line to draw
// for something this specific to one page.
function ProfileField({ label, name, value, editable, onChange, type = 'text', wide = false }) {
  return (
    <div className={`profile-field ${wide ? 'profile-field--wide' : ''}`}>
      <label htmlFor={name}>{label}</label>
      {editable ? (
        <input id={name} name={name} type={type} value={value} onChange={onChange} />
      ) : (
        <p id={name}>{value}</p>
      )}
    </div>
  );
}

export default StudentProfile;

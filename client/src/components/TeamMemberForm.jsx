import React, { useState } from 'react';
import styles from './TeamMemberForm.module.css';

const TeamMemberForm = ({ memberData, onSubmit, onDelete, showDeleteButton = false }) => {
    const initialData = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        role: 'regular',
    }
    const [formData, setFormData] = useState(memberData || initialData);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        const confirmDelete = window.confirm("Are you sure you want to delete this team member?");
        if (confirmDelete) {
            onDelete(formData.id);
        }
    };

    return (
        <form className={styles.editForm} onSubmit={handleSubmit}>
            <div>
                <h3 className={styles.subHeader}>Info</h3>
                <input
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                    type="text"
                    required
                />
                <input
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                    type="text"
                    required
                />
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    type="email"
                    required
                />
                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    type="tel"
                    required
                />
            </div>

            <div>
                <h3 className={styles.subHeader}>Role</h3>
                <div className={styles.optionsContainer}>
                    <div className={styles.option}>
                        <label htmlFor="role-regular">Regular - Can’t delete members</label>
                        <input
                            type="radio"
                            id="role-regular"
                            name="role"
                            value="regular"
                            checked={formData.role === 'regular'}
                            onChange={handleChange}
                        />
                    </div>
                    <hr />
                    <div className={styles.option}>
                        <label htmlFor="role-admin">Admin - Can delete members</label>
                        <input
                            type="radio"
                            id="role-admin"
                            name="role"
                            value="admin"
                            checked={formData.role === 'admin'}
                            onChange={handleChange}
                        />
                    </div>
                    <hr />
                </div>
            </div>

            <div className={styles.buttonContainer}>
                {showDeleteButton && (
                    <button className={`${styles.ctaButtons} ${styles.deleteButton}`} onClick={handleDelete}>Delete</button>)
                }
                <button type="submit" className={`${styles.ctaButtons} ${styles.saveButton}`}>Save</button>
            </div>
        </form>
    );
};

export default TeamMemberForm;

import React, { useState } from 'react';
import styles from './TeamMemberForm.module.css';

const TeamMemberForm = ({ memberData, onSubmit, onDelete, showDeleteButton = false }) => {
    const PHONE_ERROR_MESSAGE = 'Phone number must have the format xxx-xxx-xxxx';
    const initialData = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        role: 'regular',
    };
    const [formData, setFormData] = useState(memberData || initialData);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (e) => {
        const inputValue = e.target.value;
        const formattedValue = formatPhoneNumber(inputValue);
        setFormData({ ...formData, phone: formattedValue });
        if (isValidPhoneNumber(formattedValue)) {
            setError('');
        } else {
            setError(PHONE_ERROR_MESSAGE);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidPhoneNumber(formData.phone)) {
            setError(PHONE_ERROR_MESSAGE);
            return;
        }
        onSubmit(formData);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        const confirmDelete = window.confirm('Are you sure you want to delete this team member?');
        if (confirmDelete) {
            onDelete(formData.id);
        }
    };

    const formatPhoneNumber = (value) => {
        const formattedPhoneNumber = value.replace(/\D/g, '');

        if (formattedPhoneNumber.length <= 3) {
            return formattedPhoneNumber;
        } else if (formattedPhoneNumber.length <= 6) {
            return `${formattedPhoneNumber.slice(0, 3)}-${formattedPhoneNumber.slice(3)}`;
        } else {
            return `${formattedPhoneNumber.slice(0, 3)}-${formattedPhoneNumber.slice(3, 6)}-${formattedPhoneNumber.slice(6, 10)}`;
        }
    };

    const isValidPhoneNumber = (phone) => {
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        return phoneRegex.test(phone);
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
                <div>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="Phone"
                        required
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
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
                    <button
                        type="button"
                        className={`${styles.ctaButtons} ${styles.deleteButton}`}
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                )}
                <button type="submit" className={`${styles.ctaButtons} ${styles.saveButton}`}>
                    Save
                </button>
            </div>
        </form>
    );
};

export default TeamMemberForm;

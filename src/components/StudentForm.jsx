import React, { useState, useEffect } from 'react';
import './StudentForm.css';

const EMPTY_FORM = { name: '', email: '', age: '' };

/**
 * Modal form for adding or editing a student.
 * @param {object|null} student - Student to edit, or null for new student
 * @param {function} onSave - Called with the form data when saved
 * @param {function} onClose - Called when the modal is dismissed
 */
export default function StudentForm({ student, onSave, onClose }) {
    const [form, setForm] = useState(EMPTY_FORM);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (student) {
            setForm({ name: student.name, email: student.email, age: String(student.age) });
        } else {
            setForm(EMPTY_FORM);
        }
        setErrors({});
    }, [student]);

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Name is required.';
        if (!form.email.trim()) {
            errs.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            errs.email = 'Enter a valid email address.';
        }
        if (!form.age.trim()) {
            errs.age = 'Age is required.';
        } else if (isNaN(Number(form.age)) || Number(form.age) <= 0 || !Number.isInteger(Number(form.age))) {
            errs.age = 'Age must be a positive integer.';
        }
        return errs;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        // Clear individual field error on change
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        onSave({ name: form.name.trim(), email: form.email.trim(), age: Number(form.age) });
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="form-title">
            <div className="modal-card">
                <div className="modal-header">
                    <h2 id="form-title" className="modal-title">
                        {student ? 'Edit Student' : 'Add New Student'}
                    </h2>
                    <button className="modal-close-btn" onClick={onClose} aria-label="Close form">✕</button>
                </div>

                <form className="student-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className={`form-input ${errors.name ? 'input-error' : ''}`}
                            placeholder="e.g. Alice Johnson"
                            value={form.name}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {errors.name && <span className="error-msg">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={`form-input ${errors.email ? 'input-error' : ''}`}
                            placeholder="e.g. alice@example.com"
                            value={form.email}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {errors.email && <span className="error-msg">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input
                            id="age"
                            name="age"
                            type="number"
                            min="1"
                            className={`form-input ${errors.age ? 'input-error' : ''}`}
                            placeholder="e.g. 21"
                            value={form.age}
                            onChange={handleChange}
                        />
                        {errors.age && <span className="error-msg">{errors.age}</span>}
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
                        <button type="submit" className="btn btn-primary">
                            {student ? 'Save Changes' : 'Add Student'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

import React from 'react';
import './StudentTable.css';

/**
 * Renders the student data table.
 * @param {Array}    students   - Array of student objects to display
 * @param {function} onEdit     - Called with student object when Edit is pressed
 * @param {function} onDelete   - Called with student id when Delete is pressed
 */
export default function StudentTable({ students, onEdit, onDelete }) {
    if (students.length === 0) {
        return (
            <div className="table-empty">
                <span className="empty-icon">🎓</span>
                <p>No students found.</p>
            </div>
        );
    }

    return (
        <div className="table-wrapper">
            <table className="student-table" aria-label="Students table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td className="td-index">{index + 1}</td>
                            <td className="td-name">
                                <div className="name-avatar">
                                    <span className="avatar" aria-hidden="true">
                                        {student.name.charAt(0).toUpperCase()}
                                    </span>
                                    {student.name}
                                </div>
                            </td>
                            <td className="td-email">{student.email}</td>
                            <td className="td-age">
                                <span className="age-badge">{student.age}</span>
                            </td>
                            <td className="td-actions">
                                <button
                                    className="action-btn edit-btn"
                                    onClick={() => onEdit(student)}
                                    aria-label={`Edit ${student.name}`}
                                >
                                    ✏️ Edit
                                </button>
                                <button
                                    className="action-btn delete-btn"
                                    onClick={() => onDelete(student.id)}
                                    aria-label={`Delete ${student.name}`}
                                >
                                    🗑️ Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

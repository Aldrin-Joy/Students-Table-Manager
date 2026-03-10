import React, { useState, useMemo } from 'react';
import initialStudents from './data/students.json';
import StudentTable from './components/StudentTable';
import StudentForm from './components/StudentForm';
import SearchBar from './components/SearchBar';
import Loader from './components/Loader';
import { exportToExcel } from './utils/exportExcel';
import './index.css';

let nextId = initialStudents.length + 1;

export default function App() {
    const [students, setStudents] = useState(initialStudents);
    const [searchQuery, setSearchQuery] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null); // null = Add mode
    const [loading, setLoading] = useState(false);
    const [confirmDeleteId, setConfirmDeleteId] = useState(null);

    /* ── Filtered students ── */
    const filteredStudents = useMemo(() => {
        const q = searchQuery.toLowerCase().trim();
        if (!q) return students;
        return students.filter(
            (s) =>
                s.name.toLowerCase().includes(q) ||
                s.email.toLowerCase().includes(q)
        );
    }, [students, searchQuery]);

    /* ── Simulate async delay ── */
    const simulateAsync = (callback, delay = 1200) => {
        setLoading(true);
        setTimeout(() => {
            callback();
            setLoading(false);
        }, delay);
    };

    /* ── Add / Edit ── */
    const openAddForm = () => {
        setEditingStudent(null);
        setShowForm(true);
    };

    const openEditForm = (student) => {
        setEditingStudent(student);
        setShowForm(true);
    };

    const handleSave = (formData) => {
        if (editingStudent) {
            // Edit
            simulateAsync(() => {
                setStudents((prev) =>
                    prev.map((s) =>
                        s.id === editingStudent.id ? { ...s, ...formData } : s
                    )
                );
                setShowForm(false);
                setEditingStudent(null);
            });
        } else {
            // Add
            simulateAsync(() => {
                const newStudent = { id: nextId++, ...formData };
                setStudents((prev) => [...prev, newStudent]);
                setShowForm(false);
            });
        }
    };

    const handleFormClose = () => {
        setShowForm(false);
        setEditingStudent(null);
    };

    /* ── Delete ── */
    const requestDelete = (id) => setConfirmDeleteId(id);

    const confirmDelete = () => {
        simulateAsync(() => {
            setStudents((prev) => prev.filter((s) => s.id !== confirmDeleteId));
            setConfirmDeleteId(null);
        }, 1000);
    };

    const cancelDelete = () => setConfirmDeleteId(null);

    /* ── Export ── */
    const downloadAll = () => {
        exportToExcel(
            students.map(({ id, name, email, age }) => ({ ID: id, Name: name, Email: email, Age: age })),
            'students_full'
        );
    };

    const downloadFiltered = () => {
        exportToExcel(
            filteredStudents.map(({ id, name, email, age }) => ({ ID: id, Name: name, Email: email, Age: age })),
            'students_filtered'
        );
    };

    /* ── Student to confirm delete ── */
    const studentToDelete = students.find((s) => s.id === confirmDeleteId);

    return (
        <div className="app-container">
            {/* ── Loader overlay ── */}
            {loading && <Loader />}

            {/* ── Header ── */}
            <header className="app-header">
                <div className="header-brand">
                    <div className="header-logo">🎓</div>
                    <div>
                        <div className="header-title">Students Table Manager</div>
                        <div className="header-subtitle">Frontend-only CRUD · React + Vite</div>
                    </div>
                </div>
                <div className="header-stats">
                    <div className="stat-chip">
                        <span className="stat-value">{students.length}</span>
                        <span className="stat-label">Total</span>
                    </div>
                    <div className="stat-chip">
                        <span className="stat-value">{filteredStudents.length}</span>
                        <span className="stat-label">Shown</span>
                    </div>
                </div>
            </header>

            {/* ── Main ── */}
            <main className="app-main">
                {/* Toolbar */}
                <div className="toolbar">
                    <div className="toolbar-left">
                        <SearchBar value={searchQuery} onChange={setSearchQuery} />
                    </div>
                    <div className="toolbar-right">
                        <button className="btn btn-outline" onClick={downloadFiltered} title="Export filtered results">
                            📊 Filtered
                        </button>
                        <button className="btn btn-outline" onClick={downloadAll} title="Export all students">
                            📥 Full Data
                        </button>
                        <button className="btn btn-primary" onClick={openAddForm} id="add-student-btn">
                            + Add Student
                        </button>
                    </div>
                </div>

                {/* Table card */}
                <div className="card">
                    <div className="results-bar">
                        <span className="results-text">
                            Showing <strong>{filteredStudents.length}</strong> of{' '}
                            <strong>{students.length}</strong> students
                            {searchQuery && ` for "${searchQuery}"`}
                        </span>
                    </div>
                    <StudentTable
                        students={filteredStudents}
                        onEdit={openEditForm}
                        onDelete={requestDelete}
                    />
                </div>
            </main>

            {/* ── Footer ── */}
            <footer className="app-footer">
                Students Table Manager · Built with React + Vite · All data stored in memory
            </footer>

            {/* ── Add/Edit Form Modal ── */}
            {showForm && (
                <StudentForm
                    student={editingStudent}
                    onSave={handleSave}
                    onClose={handleFormClose}
                />
            )}

            {/* ── Delete Confirmation Dialog ── */}
            {confirmDeleteId !== null && (
                <div className="confirm-backdrop">
                    <div className="confirm-card">
                        <div className="confirm-body">
                            <span className="confirm-icon">⚠️</span>
                            <div>
                                <h3>Delete Student?</h3>
                                <p>
                                    Are you sure you want to remove{' '}
                                    <strong style={{ color: '#f1f5f9' }}>
                                        {studentToDelete?.name}
                                    </strong>
                                    ? This action cannot be undone.
                                </p>
                            </div>
                        </div>
                        <div className="confirm-actions">
                            <button className="btn btn-secondary" onClick={cancelDelete}>
                                Cancel
                            </button>
                            <button className="btn btn-danger" onClick={confirmDelete}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

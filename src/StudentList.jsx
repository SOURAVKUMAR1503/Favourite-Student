import React from 'react';
import { useStudentContext } from './StudentContext';

const students = [
    { id: 1, name: 'Sourav Kumar', rollNumber: 'CS001' },
    { id: 2, name: 'Dhilip',rollNumber: 'CS002' },
    { id: 3, name: 'Radhika', rollNumber: 'CS003' },
    { id: 4, name: 'Praveen', rollNumber: 'CS004' },
    { id: 5, name: 'Shalini', rollNumber: 'CS005' },
];

const StudentList = () => {
    const { addToFavourites, favourites } = useStudentContext();

    return (
        <div className="page-container">
            <h1 className="page-title">Student List</h1>
            <div className="student-grid">
                {students.map(student => {
                    const isFavourite = favourites.some(fav => fav.id === student.id);
                    return (
                        <div key={student.id} className="student-card">
                            {isFavourite && <span className="favourite-badge">★ Favourite</span>}
                            <div className="student-info">
                                <div>
                                    <div className="student-name">{student.name}</div>
                                    <div className="student-roll">Roll: {student.rollNumber}</div>
                                </div>
                            </div>
                            <button
                                onClick={() => addToFavourites(student)}
                                disabled={isFavourite}
                                className={`btn ${isFavourite ? '' : 'btn-primary'}`}
                            >
                                {isFavourite ? 'Already Favourite' : 'Add to Favourite'}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StudentList;
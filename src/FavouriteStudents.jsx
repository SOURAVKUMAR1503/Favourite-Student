import React from 'react';
import { useStudentContext } from './StudentContext';

const FavouriteStudents = () => {
    const { favourites, removeFromFavourites } = useStudentContext();

    return (
        <div className="page-container">
            <h1 className="page-title">Favourite Students</h1>
            {favourites.length === 0 ? (
                <div className="empty-state">
                    <h3>No Favourite Students Yet</h3>
                    <p>Go to the Student List page and add some students to your favourites!</p>
                </div>
            ) : (
                <div className="student-grid">
                    {favourites.map(student => (
                        <div key={student.id} className="student-card">
                            <span className="favourite-badge">★ Favourite</span>
                            <div className="student-info">
                                <div>
                                    <div className="student-name">{student.name}</div>
                                    <div className="student-roll">Roll: {student.rollNumber}</div>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromFavourites(student.id)}
                                className="btn btn-danger"
                            >
                                Remove from Favourites
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavouriteStudents;
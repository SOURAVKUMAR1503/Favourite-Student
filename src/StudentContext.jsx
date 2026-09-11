import React, { createContext, useContext, useState } from 'react';

const StudentContext = createContext();

export const useStudentContext = () => {
    return useContext(StudentContext);
};

export const StudentProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const addToFavourites = (student) => {
        if (!favourites.some(fav => fav.id === student.id)) {
            setFavourites([...favourites, student]);
        }
    };

    const removeFromFavourites = (id) => {
        setFavourites(favourites.filter(student => student.id !== id));
    };

    return (
        <StudentContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>
            {children}
        </StudentContext.Provider>
    );
};
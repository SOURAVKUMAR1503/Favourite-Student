# 🎓 Favourite Student List

A simple and interactive React application that allows users to view a list of students and manage their favourite students. The project demonstrates **React Router**, **useContext**, **createContext**, state management, dynamic rendering, and conditional rendering.

## 🚀 Features

* 📚 Display a list of students
* ⭐ Add students to favourites
* 🚫 Prevent duplicate favourite students
* ❌ Remove students from favourites
* 🔄 Instant UI updates
* 🧭 Navigate between pages without page reload
* 🌐 Global state management using `useContext`
* 📱 Responsive design
* 🎨 Modern and clean user interface

## 📄 Pages

### 👨‍🎓 Student List

Displays all available students with their:

* Student Name
* Roll Number
* Add to Favourite button

### ⭐ Favourite Students

Displays the students added to the favourite list.

Users can:

* View favourite students
* Remove students from favourites
* Return to the Student List when no favourites are available

## 🛠️ Technologies Used

* React JS
* React Router DOM
* JavaScript
* HTML
* CSS
* Vite

## ⚛️ React Concepts Used

### `useState()`

Used to store and update the favourite student list.

### `createContext()`

Creates a global Student Context for sharing favourite student data.

### `useContext()`

Allows different components to access and update the favourite student list.

### `useState()`

Manages the application's changing data.

### `map()`

Used to dynamically display student cards from the student array.

### `filter()`

Used to remove students from the favourite list.

### `some()`

Used to check whether a student is already present in the favourite list and prevent duplicates.

### React Router

Used to create multiple pages and navigate between them without refreshing the browser.


## 🔄 Application Flow

```text
Student List
     │
     │ Add to Favourite
     ↓
Student Context
     │
     ↓
Favourite Students
     │
     │ Remove
     ↓
Updated Favourite List
```

## 🎯 Project Objective

The main objective of this project is to understand how **React Router** can be used for page navigation and how **Context API with useContext** can be used to manage shared state across multiple components.

## 📱 Responsive Design

The application is responsive and works on:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet

CSS Grid and media queries are used to create the responsive layout.

## 👨‍💻 Author

**Sourav Kumar**


## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

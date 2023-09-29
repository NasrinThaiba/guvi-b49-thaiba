import React from 'react';
import AdminDashboard from './AdminDashboard'; // Import the Book Management component
import AuthorManagement from './AuthorManagement'; // Import the Author Management component

function App() {
  return (
    <div>
      <h1>Library Management System</h1>

      {/* Book Management Section */}
      <AdminDashboard />

      {/* Author Management Section */}
      <AuthorManagement />
    </div>
  );
}

export default App;

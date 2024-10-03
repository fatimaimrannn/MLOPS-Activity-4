import React, { useState } from 'react';
import './App.css';

function App() {
  // Define state variables to hold the form data
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare the data to send to the backend
    const userData = { name, age, location };

    // Send a POST request to the backend
    fetch('http://localhost:5000/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      alert('User data submitted successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error submitting user data');
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Submit User Data</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Age:
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Location:
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;

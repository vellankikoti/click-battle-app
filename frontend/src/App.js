import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/click');
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error making API request', error);
    }
  };

  return (
    <div>
      <h1>Click Battle App</h1>
      <button onClick={handleClick}>Click Me!</button>
      <p>{message}</p>
    </div>
  );
}

export default App;

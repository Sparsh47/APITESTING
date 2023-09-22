import React, { useState, useEffect } from "react";

function App() {
  // Define a state variable to store the fetched data
  const [users, setUsers] = useState([]);

  // Define a state variable to track loading state
  const [isLoading, setIsLoading] = useState(true);

  // Define a state variable to handle errors
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    async function fetchData() {
      try {
        // Make an API request here (replace with your actual API endpoint)
        const response = await fetch("127.0.0.1:8000/quessionaire-api/python");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = response.json();

        // // Parse the response data as JSON
        // const data = await response;
        console.log(data);

        // Update the state with the fetched data
        setUsers(data);

        // Set loading to false
        setIsLoading(false);
      } catch (error) {
        // Handle any errors that occurred during the fetch
        setError(error);
        setIsLoading(false);
      }
      console.log(users);
    }

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty array [] means this effect will run once when the component mounts

  return (
    <div>
      <h1>User List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

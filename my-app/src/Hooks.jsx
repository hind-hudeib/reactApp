import React, { useState, useEffect } from "react";

function Hooks() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []); // The empty array means this effect runs once on component mount

  return (
    <div className="max-w-md mx-auto p-4">
      {loading ? (
        <p className="text-center text-blue-500 font-bold text-lg">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500 font-bold text-lg">Error: {error.message}</p>
      ) : (
        <ul className="list-disc list-inside">
          {data.map((post) => (
            <li key={post.id} className="text-gray-800 text-lg mb-2">{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Hooks;

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";

function Hooks() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const errorRef = useRef(null); 

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
        errorRef.current = error; 
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const loadingMessage = useMemo(() => (
    <p className="text-center text-blue-500 font-bold text-lg">Loading...</p>
  ), []);

  const renderPosts = useCallback(() => {
    return data.map((post) => (
      <li key={post.id} className="text-gray-800 text-lg mb-2">{post.title}</li>
    ));
  }, [data]);

  return (
    <div className="max-w-md mx-auto p-4">
      {loading ? loadingMessage : errorRef.current ? (
        <p className="text-center text-red-500 font-bold text-lg">
          Error: {errorRef.current.message}
        </p>
      ) : (
        <ul className="list-disc list-inside">
          {renderPosts()}
        </ul>
      )}
    </div>
  );
}

export default Hooks;

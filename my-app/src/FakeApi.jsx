import React, { useState, useEffect } from "react";
import axios from "axios";

function FakeApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [data]);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Fake Data Example</h1>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <ul className="list-disc list-inside">
          {data.map((item) => (
            <li key={item.id} className="text-base text-red-400 mb-2">
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FakeApi;

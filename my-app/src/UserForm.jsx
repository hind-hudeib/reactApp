import React, { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    specialization: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    // destructures the name and value properties from the e.target object
    // By destructuring, you extract the name and value properties of the input element.
    const { name, value } = e.target;
    // updates the form data state using the setFormData function
    // uses the spread operator({...formData })to create a copy of the current formData object
    // and then it updates the property specified by name with the new value.
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  object newErrors used to store error messages for the form fields if
    // they are found to be empty or invalid.
    const newErrors = {};
    // If a form field is empty, it adds an error message to the newErrors object.
    if (!formData.name) newErrors.name = "Name is required";
    // the email here is a key in the newErrors object
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.specialization)
      newErrors.specialization = "Specialization is required";

    if (
      newErrors.name ||
      newErrors.email ||
      newErrors.age ||
      newErrors.specialization
    ) {
      setErrors(newErrors);
      return;
    }

    localStorage.setItem("formData", JSON.stringify(formData));

    // Clear the form
    setFormData({
      name: "",
      email: "",
      age: "",
      specialization: "",
    });
    setErrors({});
  };

  return (
    <div className="container px-20 py-16 m-10 border-4 border-gray-200 shadow-lg rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={`w-full px-3 py-2 border rounded ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`w-full px-3 py-2 border rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="age"
          >
            Age
          </label>
          <input
            className={`w-full px-3 py-2 border rounded ${
              errors.age ? "border-red-500" : "border-gray-300"
            }`}
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
          {errors.age && (
            <p className="text-red-500 text-xs mt-1">{errors.age}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="specialization"
          >
            University Specialization
          </label>
          <input
            className={`w-full px-3 py-2 border rounded ${
              errors.specialization ? "border-red-500" : "border-gray-300"
            }`}
            type="text"
            id="specialization"
            name="specialization"
            value={formData.specialization}
            onChange={handleInputChange}
          />
          {errors.specialization && (
            <p className="text-red-500 text-xs mt-1">{errors.specialization}</p>
          )}
        </div>

        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;

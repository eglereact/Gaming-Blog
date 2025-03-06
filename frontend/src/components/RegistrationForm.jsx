import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import { LOGIN } from "../utils/routes";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Basic validation
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });

    // Password confirmation check
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form Data:", formData);
    setFormData({
      name: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="max-w-7xl m-auto p-20">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          name="name"
          subLabel="first"
          type="text"
          value={formData.name}
          onChange={handleChange}
          errors={errors}
        />
        <FormInput
          name="lastName"
          subLabel="last"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          errors={errors}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          errors={errors}
        />
        <FormInput
          label="Username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          errors={errors}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          errors={errors}
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          errors={errors}
        />

        <button
          type="submit"
          className="bg-main-red px-10 py-3 mt-3 uppercase text-white font-semibold hover:text-main-red hover:bg-white smooth-hover"
        >
          Register
        </button>
      </form>

      <div className="text-main-gray flex gap-1 mt-10">
        <Link to={LOGIN} className="hover:text-main-red smooth-hover">
          Log In
        </Link>
        <span>|</span>
        <Link to="/" className="hover:text-main-red smooth-hover">
          Lost Password
        </Link>
      </div>
    </div>
  );
}

export default RegistrationForm;

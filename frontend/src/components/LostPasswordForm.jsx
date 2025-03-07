import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import { LOST_PASSWORD, REGISTRATION } from "../utils/routes";

function LostPasswordFrom() {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.usernameOrEmail.trim()) {
      newErrors.usernameOrEmail = "This field is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "This field is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form Data:", formData);

    setFormData({
      usernameOrEmail: "",
      password: "",
    });
  };

  return (
    <div className="max-w-7xl m-auto p-20">
      <p className="bg-yellow-50 text-yellow-700 text-sm p-4 w-1/2 text-center mb-6">
        Please enter your username or email address. You will receive a link to
        create a new password via email.
      </p>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Username or Email"
          name="usernameOrEmail"
          type="text"
          value={formData.usernameOrEmail}
          onChange={handleChange}
          errors={errors}
        />

        <button
          type="submit"
          className="bg-main-red px-10 py-3 mt-3 uppercase text-white font-semibold hover:text-main-red hover:bg-white smooth-hover"
        >
          Get new password
        </button>
      </form>

      <div className="text-main-gray flex gap-1 mt-6">
        <Link to={REGISTRATION} className="hover:text-main-red smooth-hover">
          Log In
        </Link>
        <span>|</span>
        <Link to={LOST_PASSWORD} className="hover:text-main-red smooth-hover">
          Lost Password
        </Link>
      </div>
    </div>
  );
}

export default LostPasswordFrom;

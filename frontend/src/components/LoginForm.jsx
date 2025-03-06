import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import { REGISTRATION } from "../utils/routes";

function LoginForm() {
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
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Username or Email"
          name="usernameOrEmail"
          type="text"
          value={formData.usernameOrEmail}
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
        <div className="text-white flex items-center gap-2 font-semibold mb-4">
          <div>
            <input type="checkbox" />
          </div>
          <p>Remember Me</p>
        </div>
        <button
          type="submit"
          className="bg-main-red px-10 py-3 mt-3 uppercase text-white font-semibold hover:text-main-red hover:bg-white smooth-hover"
        >
          Log In
        </button>
      </form>

      <div className="text-main-gray flex gap-1 mt-10">
        <Link to={REGISTRATION} className="hover:text-main-red smooth-hover">
          Don't Have Account
        </Link>
        <span>|</span>
        <Link to="/" className="hover:text-main-red smooth-hover">
          Lost Password
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;

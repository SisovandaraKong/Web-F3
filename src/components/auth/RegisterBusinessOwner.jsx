import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRegisterBusinessOwnerMutation } from "../../feature/auth/authSlide";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  gender: Yup.string().required("Gender is required"),
  profileImageUrl: Yup.string().required("Profile Image is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  userType: Yup.string().required("User type is required"),
  companyName: Yup.string().required("Company Name is required"),
  companyWebsite: Yup.string().url("Invalid URL").required("Company Website is required"),
  industry: Yup.string().required("Industry is required"),
  password: Yup.string().required("Password is required").min(6, "Password should be at least 6 characters"),
});

const RegisterBusinessOwner = () => {
  const [registerBusinessOwner, { isLoading, error }] = useRegisterBusinessOwnerMutation();
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values) => {
    try {
      const response = await registerBusinessOwner(values).unwrap();
      console.log("Registration successful:", response);
      // Redirect or show success message here
    } catch (err) {
      console.error("Registration failed", err);
      setFormError(err.message);
    }
  };

  return (
    <Formik
      initialValues={{
        fullName: "",
        gender: "",
        profileImageUrl: "",
        email: "",
        phone: "",
        userType: "BUSINESS_OWNER",
        companyName: "",
        companyWebsite: "",
        industry: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <Field
              type="text"
              name="fullName"
              id="fullName"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <Field
              as="select"
              name="gender"
              id="gender"
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
            <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="profileImageUrl" className="block text-sm font-medium text-gray-700">Profile Image</label>
            <Field
              type="text"
              name="profileImageUrl"
              id="profileImageUrl"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="profileImageUrl" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Field
              type="email"
              name="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <Field
              type="text"
              name="phone"
              id="phone"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="userType" className="block text-sm font-medium text-gray-700">User Type</label>
            <Field
              as="select"
              name="userType"
              id="userType"
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="BUSINESS_OWNER">Business Owner</option>
              <option value="INDIVIDUAL">Individual</option>
            </Field>
            <ErrorMessage name="userType" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
            <Field
              type="text"
              name="companyName"
              id="companyName"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-700">Company Website</label>
            <Field
              type="url"
              name="companyWebsite"
              id="companyWebsite"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="companyWebsite" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry</label>
            <Field
              type="text"
              name="industry"
              id="industry"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="industry" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>

          {formError && (
            <div className="mt-4 text-red-500">
              <p>{formError}</p>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default RegisterBusinessOwner;

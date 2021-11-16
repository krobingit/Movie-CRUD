import { useFormik } from "formik";

const validateForm = (values) => {
  const errors = {};
 if (values.email.length < 5) {
  errors.email = "Please provide a longer email";
 }

}
export function BasicForm() {
 const { handleSubmit, values, handleChange, handleBlur, errors, touched }
  = useFormik({
  initialValues: { email: "", password: "" },
  validate: validateForm,
  onSubmit: (values) => {
  console.log(values)
  },
 })
  return (
   <form onSubmit={handleSubmit}>
    <h1>Form</h1>
     <input
     id="email"
     name="email"
     value={values.email}
     onChange={handleChange}
     onBlur={handleBlur}
     type="email"
     placeholder="Enter your Email" />
    <h1>{(errors.email && touched.email) ? errors.email : ""}</h1>
    <input
      id="password"
     name="password"
     value={values.password}
     onChange={handleChange}
      onBlur={handleBlur}
     type="password"
     placeholder="Enter your password" />
    <h1>{errors.password && touched.password ? errors.password : ""}</h1>
     <button type="submit">Submit</button>
    </form>
  );
}

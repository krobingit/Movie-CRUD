import { useFormik } from "formik";
import * as yup from 'yup';
/*
const validateForm = (values) => {
 const errors = {};

   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
  errors.email = 'Invalid email address';


 if (values.password.length < 5)
  errors.password = "Please provide a longer password";

return errors;
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
    <h4>{(errors.email && touched.email) ? errors.email : ""}</h4>
    <input
      id="password"
     name="password"
     value={values.password}
     onChange={handleChange}
      onBlur={handleBlur}
     type="password"
     placeholder="Enter your password" />
    <h4>{errors.password && touched.password ? errors.password : ""}</h4>
     <button type="submit">Submit</button>
    </form>
  );
}
*/
const formValidationSchema = yup.object({
 email: yup.string().min(5).required("This is a Required Field")
 .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"Email Pattern not matched"),
 password: yup.string().min(8, "Minimum 8 Characters Needed")
 .required("This is a Required Field")
})
export function BasicForm() {
 const { handleSubmit, values, handleChange, handleBlur, errors, touched }
  = useFormik({
  initialValues: { email: "", password: "" },
  validationSchema: formValidationSchema,
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
    <h4>{(errors.email && touched.email) ? errors.email : ""}</h4>
    <input
      id="password"
     name="password"
     value={values.password}
     onChange={handleChange}
      onBlur={handleBlur}
     type="password"
     placeholder="Enter your password" />
    <h4>{errors.password && touched.password ? errors.password : ""}</h4>
     <button type="submit">Submit</button>
    </form>
  );
}
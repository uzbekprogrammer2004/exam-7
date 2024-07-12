
// import * as React from "react";
// import {
//   Modal,
//   Backdrop,
//   Box,
//   Typography,
//   Button,
//   TextField,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
// } from "@mui/material";
// import Fade from "@mui/material/Fade";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { worker } from "@service"; // Ensure this is the correct path to your service module
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import * as Yup from 'yup'; // Add Yup for form validation

// const Index = ({ open, handleClose, item }) => {
//   const initialValues = {
//     email: item?.email || "",
//     first_name: item?.first_name || "",
//     last_name: item?.last_name || "",
//     id: item?.id || "",
//     gender: item?.gender || "",
//     password: item?.password || "",
//     age: item?.age || "",
//     phone_number: item?.phone_number || "",
//   };

//   // Validation schema
//   const validationSchema = Yup.object({
//     email: Yup.string().email('Invalid email format').required('Email is required'),
//     first_name: Yup.string().required('First name is required'),
//     last_name: Yup.string().required('Last name is required'),
//     age: Yup.number().required('Age is required').positive('Age must be a positive number').integer('Age must be an integer'),
//     phone_number: Yup.string().required('Phone number is required'),
//     password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
//     gender: Yup.string().oneOf(['male', 'female'], 'Invalid gender').required('Gender is required'),
//   });

//   const handleSubmit = async (values, { setSubmitting }) => {
//     setSubmitting(true);
//     const phone_number = values.phone_number.replace(/\D/g, "");
//     const payload = {
//       ...values,
//       phone_number,
//     };

//     try {
//       let response;
//       if (item?.id) {
//         // Ensure update function exists
//         if (typeof worker.update !== "function") {
//           throw new Error("worker.update is not a function");
//         }
//         response = await worker.update(payload);
//         if (response.status === 200) {
//           toast.success('Worker updated successfully!');
//         }
//       } else {
//         // Ensure create function exists
//         if (typeof worker.create !== "function") {
//           throw new Error("worker.create is not a function");
//         }
//         response = await worker.create(payload);
//         if (response.status === 201) {
//           toast.success('Worker created successfully!');
//         }
//       }

//       if (response) {
//         setTimeout(() => {
//           window.location.reload();
//         }, 2000);
//       }
//     } catch (error) {
//       console.error(error.message);
//       toast.error('Failed to save worker. Please try again.');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       closeAfterTransition
//       BackdropComponent={Backdrop}
//       BackdropProps={{
//         timeout: 500,
//       }}
//     >
//       <Fade in={open}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 400,
//             bgcolor: "background.paper",
//             border: "2px solid #000",
//             boxShadow: 24,
//             p: 4,
//           }}
//         >
//           <Typography variant="h5" sx={{ my: 2, textAlign: "center" }}>
//             {item?.id ? "Edit Worker" : "Add a Worker"}
//           </Typography>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting }) => (
//               <Form>
//                 <Field
//                   name="age"
//                   type="number"
//                   as={TextField}
//                   label="Age"
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   helperText={
//                     <ErrorMessage
//                       name="age"
//                       component="p"
//                       className="text-[red] text-[15px]"
//                     />
//                   }
//                 />
//                 <Field
//                   name="email"
//                   type="text"
//                   as={TextField}
//                   label="Email"
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   helperText={
//                     <ErrorMessage
//                       name="email"
//                       component="p"
//                       className="text-[red] text-[15px]"
//                     />
//                   }
//                 />
//                 <Field
//                   name="first_name"
//                   type="text"
//                   as={TextField}
//                   label="First Name"
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   helperText={
//                     <ErrorMessage
//                       name="first_name"
//                       component="p"
//                       className="text-[red] text-[15px]"
//                     />
//                   }
//                 />
//                 <Field className="flex justify-center" name="gender" as={RadioGroup} row>
//                   <FormControlLabel
//                     value="male"
//                     control={<Radio />}
//                     label="Male"
//                   />
//                   <FormControlLabel
//                     value="female"
//                     control={<Radio />}
//                     label="Female"
//                   />
//                 </Field>
//                 <Field
//                   name="last_name"
//                   type="text"
//                   as={TextField}
//                   label="Last Name"
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   helperText={
//                     <ErrorMessage
//                       name="last_name"
//                       component="p"
//                       className="text-[red] text-[15px]"
//                     />
//                   }
//                 />
//                 <Field
//                   name="password"
//                   type="password"
//                   as={TextField}
//                   label="Password"
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   helperText={
//                     <ErrorMessage
//                       name="password"
//                       component="p"
//                       className="text-[red] text-[15px]"
//                     />
//                   }
//                 />
//                 <Field
//                   name="phone_number"
//                   type="text"
//                   as={TextField}
//                   label="Phone"
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   helperText={
//                     <ErrorMessage
//                       name="phone_number"
//                       component="p"
//                       className="text-[red] text-[15px]"
//                     />
//                   }
//                 />
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   disabled={isSubmitting}
//                   sx={{ marginBottom: "8px" }}
//                 >
//                   {isSubmitting ? "Saving..." : "Save"}
//                 </Button>
//               </Form>
//             )}
//           </Formik>
//         </Box>
//       </Fade>
//     </Modal>
//   );
// };

// export default Index;

import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { worker } from "@service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const WorkerModal = ({ open, handleClose, worker: item, setData }) => {
  const initialValues = {
    age: item?.age ? Number(item.age) : "",
    email: item?.email ? item.email : "",
    first_name: item?.first_name ? item.first_name : "",
    last_name: item?.last_name ? item.last_name : "",
    gender: item?.gender ? item.gender : "",
    password: item?.password ? item.password : "",
    phone_number: item?.phone_number ? item.phone_number : "",
    id: item?.id ? item.id : "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    age: Yup.number().required('Age is required').positive('Age must be a positive number').integer('Age must be an integer'),
    phone_number: Yup.string().required('Phone number is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    gender: Yup.string().oneOf(['male', 'female'], 'Invalid gender').required('Gender is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    const phoneNumber = values.phone_number.replace(/^\+/, "");
    const payload = { ...values, phone_number: phoneNumber, id: values.id };

    try {
      if (item) {
        payload.id = item.id;
        const response = await worker.update(payload);
        if (response.status === 200) {
          toast.success("Worker updated successfully!");
          setData((prevData) =>
            prevData.map((worker) => (worker.id === item.id ? payload : worker))
          );
        }
      } else {
        const response = await worker.create(payload);
        if (response.status === 201) {
          toast.success("Worker created successfully!");
          setData((prevData) => [...prevData, payload]);
        }
      }
      handleClose();
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while saving the worker.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            {item ? "Edit Worker" : "Add Worker"}
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({
              values,
              handleChange,
              touched,
              errors,
              handleBlur,
              isSubmitting,
            }) => (
              <Form id="submit" className="mt-6 space-y-4">
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="text"
                  id="email"
                  required
                  className="my-2"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  fullWidth
                  label="Age"
                  name="age"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age}
                  type="number"
                  id="age"
                  required
                  className="my-2"
                  error={touched.age && Boolean(errors.age)}
                  helperText={touched.age && errors.age}
                />
                <TextField
                  fullWidth
                  label="First Name"
                  name="first_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                  type="text"
                  id="first_name"
                  required
                  className="my-2"
                  error={touched.first_name && Boolean(errors.first_name)}
                  helperText={touched.first_name && errors.first_name}
                />
                <FormControl
                  component="fieldset"
                  required
                  className="my-2 flex justify-center"
                >
                  <RadioGroup
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-labelledby="gender-group-label"
                  >
                    <div className="flex ml-20">
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </div>
                  </RadioGroup>
                  {touched.gender && errors.gender && (
                    <Typography color="error" className="mt-1">
                      {errors.gender}
                    </Typography>
                  )}
                </FormControl>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="last_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                  type="text"
                  id="last_name"
                  required
                  className="my-2"
                  error={touched.last_name && Boolean(errors.last_name)}
                  helperText={touched.last_name && errors.last_name}
                />
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type="password"
                  id="password"
                  required
                  className="my-2"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone_number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone_number}
                  type="text"
                  id="phone_number"
                  required
                  className="my-2"
                  error={touched.phone_number && Boolean(errors.phone_number)}
                  helperText={touched.phone_number && errors.phone_number}
                />
                <div className="flex justify-between">
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    className="bg-gray-500 hover:bg-gray-600"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    sx={{ mt: 3, mb: 2 }}
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default WorkerModal;

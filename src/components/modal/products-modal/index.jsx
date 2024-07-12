// import * as React from "react";
// import {
//   Modal,
//   Backdrop,
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
// } from "@mui/material";
// import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
// import * as Yup from "yup";
// import category from "../../../service/category2";
// import products from "../../../service/products";

// const validationSchema = Yup.object().shape({
//   age_max: Yup.number().required("Age Max is required"),
//   age_min: Yup.number().required("Age Min is required"),
//   category_id: Yup.string().required("Category ID is required"),
//   color: Yup.array()
//     .of(Yup.string().required("Color is required"))
//     .min(1, "At least one color is required"),
//   cost: Yup.number().required("Cost is required"),
//   count: Yup.number().required("Count is required"),
//   description: Yup.string().required("Description is required"),
//   discount: Yup.number().required("Discount is required"),
//   for_gender: Yup.string().required("Gender is required"),
//   made_in: Yup.string().required("Made in is required"),
//   name: Yup.string().required("Product Name is required"),
//   size: Yup.array()
//     .of(Yup.string().required("Size is required"))
//     .min(1, "At least one size is required"),
// });

// const Fade = ({ children, in: open }) => {
//   const style = {
//     opacity: open ? 1 : 0,
//     transition: "opacity 0.5s",
//   };

//   return <div style={style}>{open ? children : null}</div>;
// };

// const AddProductModal = ({ open, handleClose, edit }) => {
//   const initialValues = {
//     age_max: edit?.age_max || "",
//     age_min: edit?.age_min || "",
//     category_id: edit?.category_id || "",
//     color: edit?.color || [""],
//     cost: edit?.cost || "",
//     count: edit?.count || "",
//     description: edit?.description || "",
//     discount: edit?.discount || "",
//     for_gender: edit?.for_gender || "",
//     made_in: edit?.made_in || "",
//     name: edit?.name || "",
//     size: edit?.size || [""],
//   };

//   const [categories, setCategories] = React.useState([]);

//   const fetchCategories = async () => {
//     try {
//       const response = await category.get();
//       if (response.status === 200 && response?.data?.categories) {
//         setCategories(response?.data?.categories);
//       }
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   React.useEffect(() => {
//     fetchCategories();
//   }, []);

//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       const response = edit
//         ? await products.update(edit.id, values)
//         : await products.create(values);
//       if (response.status === (edit ? 200 : 201)) {
//         window.location.reload();
//       } else {
//         console.error("Failed to save product:", response);
//       }
//     } catch (error) {
//       console.error("Error saving product:", error);
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
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//             width: "80%",
//             maxWidth: 600,
//             borderRadius: 2,
//             textAlign: "center",
//           }}
//         >
//           <Typography variant="h6" sx={{ my: 2 }}>
//             {edit ? "Edit Product" : "Add Product"}
//           </Typography>
//           <Formik
//             initialValues={initialValues}
//             onSubmit={handleSubmit}
//             validationSchema={validationSchema}
//             enableReinitialize
//           >
//             {({ isSubmitting, values }) => (
//               <Form>
//                 <Box
//                   sx={{
//                     display: "grid",
//                     gap: "10px",
//                     gridTemplateColumns: "1fr 1fr",
//                     textAlign: "left",
//                   }}
//                 >
//                   <Field
//                     name="age_max"
//                     type="number"
//                     as={TextField}
//                     label="Age Max"
//                     fullWidth
//                     variant="outlined"
//                     helperText={<ErrorMessage name="age_max" />}
//                   />
//                   <Field
//                     name="count"
//                     type="number"
//                     as={TextField}
//                     label="Count"
//                     fullWidth
//                     variant="outlined"
//                     helperText={<ErrorMessage name="count" />}
//                   />
//                   <Field
//                     name="age_min"
//                     type="number"
//                     as={TextField}
//                     label="Age Min"
//                     fullWidth
//                     variant="outlined"
//                     helperText={<ErrorMessage name="age_min" />}
//                   />
//                   <Field
//                     name="discount"
//                     type="number"
//                     as={TextField}
//                     label="Discount"
//                     fullWidth
//                     variant="outlined"
//                     helperText={<ErrorMessage name="discount" />}
//                   />
//                   <FormControl fullWidth variant="outlined">
//                     <InputLabel id="category_id_label">Category</InputLabel>
//                     <Field
//                       name="category_id"
//                       as={Select}
//                       labelId="category_id_label"
//                       label="Category"
//                       fullWidth
//                       variant="outlined"
//                       helperText={<ErrorMessage name="category_id" />}
//                     >
//                       {categories.map((category) => (
//                         <MenuItem key={category.category_id} value={category.category_id}>
//                           {category.category_name}
//                         </MenuItem>
//                       ))}
//                     </Field>
//                   </FormControl>
//                   <FormControl fullWidth variant="outlined">
//                     <InputLabel id="made_in_label">Country</InputLabel>
//                     <Field
//                       name="made_in"
//                       as={Select}
//                       labelId="made_in_label"
//                       label="Country"
//                       fullWidth
//                       variant="outlined"
//                       helperText={<ErrorMessage name="made_in" />}
//                     >
//                       <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
//                       <MenuItem value="Turkey">Turkey</MenuItem>
//                       <MenuItem value="China">China</MenuItem>
//                     </Field>
//                   </FormControl>
//                   <FieldArray
//                     name="color"
//                     render={(arrayHelpers) => (
//                       <Box>
//                         {values.color.map((color, index) => (
//                           <Field
//                             key={index}
//                             name={`color.${index}`}
//                             type="text"
//                             as={TextField}
//                             label={`Color ${index + 1}`}
//                             fullWidth
//                             variant="outlined"
//                             helperText={<ErrorMessage name={`color.${index}`} />}
//                           />
//                         ))}
//                       </Box>
//                     )}
//                   />
//                   <Field name="for_gender" as={RadioGroup} row>
//                     <FormControlLabel
//                       value="male"
//                       control={<Radio />}
//                       label="Male"
//                     />
//                     <FormControlLabel
//                       value="female"
//                       control={<Radio />}
//                       label="Female"
//                     />
//                     <ErrorMessage name="for_gender" />
//                   </Field>
//                   <Field
//                     name="cost"
//                     type="number"
//                     as={TextField}
//                     label="Cost"
//                     fullWidth
//                     variant="outlined"
//                     helperText={<ErrorMessage name="cost" />}
//                   />
//                   <FieldArray
//                     name="size"
//                     render={(arrayHelpers) => (
//                       <Box>
//                         {values.size.map((size, index) => (
//                           <Field
//                             key={index}
//                             name={`size.${index}`}
//                             type="text"
//                             as={TextField}
//                             label={`Size ${index + 1}`}
//                             fullWidth
//                             variant="outlined"
//                             helperText={<ErrorMessage name={`size.${index}`} />}
//                           />
//                         ))}
//                       </Box>
//                     )}
//                   />
//                 </Box>
//                 <Field
//                   name="product_name"
//                   type="text"
//                   as={TextField}
//                   label="Product Name"
//                   fullWidth
//                   variant="outlined"
//                   sx={{ mt: 2 }}
//                   helperText={<ErrorMessage name="product_name" />}
//                 />
//                 <Field
//                   name="description"
//                   type="text"
//                   as={TextField}
//                   label="Description"
//                   fullWidth
//                   multiline
//                   rows={3}
//                   variant="outlined"
//                   sx={{ mt: 1 }}
//                   helperText={<ErrorMessage name="description" />}
//                 />
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   disabled={isSubmitting}
//                   sx={{ mt: 2 }}
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

// export default AddProductModal;



import * as React from "react";
import {
  Modal,
  Backdrop,
  Box,
  Typography,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import category from "../../../service/category2";
import product from "../../../service/product";

const validationSchema = Yup.object().shape({
  age_max: Yup.number().required("Age Max is required"),
  age_min: Yup.number().required("Age Min is required"),
  category_id: Yup.string().required("Category ID is required"),
  color: Yup.array()
    .of(Yup.string().required("Color is required"))
    .min(1, "At least one color is required"),
  cost: Yup.number().required("Cost is required"),
  count: Yup.number().required("Count is required"),
  description: Yup.string().required("Description is required"),
  discount: Yup.number().required("Discount is required"),
  for_gender: Yup.string().required("Gender is required"),
  made_in: Yup.string().required("Made in is required"),
  name: Yup.string().required("Product Name is required"),
  size: Yup.array()
    .of(Yup.string().required("Size is required"))
    .min(1, "At least one size is required"),
});

const Fade = ({ children, in: open }) => {
  const style = {
    opacity: open ? 1 : 0,
    transition: "opacity 0.5s",
  };

  return <div style={style}>{open ? children : null}</div>;
};

const AddProductModal = ({ open, handleClose }) => {
  const initialValues = {
    age_max: "",
    age_min: "",
    category_id: "",
    color: [""],
    cost: "",
    count: "",
    description: "",
    discount: "",
    for_gender: "",
    made_in: "",
    name: "",
    size: [""],
  };

  const [categories, setCategories] = React.useState([]);

  const fetchCategories = async () => {
    try {
      const response = await category.get();
      if (response.status === 200 && response?.data?.categories) {
        setCategories(response?.data?.categories);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await product.create(values);
      if (response.status === 201) {
        window.location.reload();
      } else {
        console.error("Failed to save product:", response);
      }
    } catch (error) {
      console.log("Error saving product:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: "80%",
            maxWidth: 600,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ my: 2 }}>
            Add Product
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            enableReinitialize
          >
            {({ isSubmitting, values }) => (
              <Form>
                <Box
                  sx={{
                    display: "grid",
                    gap: "10px",
                    gridTemplateColumns: "1fr 1fr",
                    textAlign: "left",
                  }}
                >
                  <Field
                    name="age_max"
                    type="number"
                    as={TextField}
                    label="Age Max"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="age_max" />}
                  />
                  <Field
                    name="count"
                    type="number"
                    as={TextField}
                    label="Count"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="count" />}
                  />
                  <Field
                    name="age_min"
                    type="number"
                    as={TextField}
                    label="Age Min"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="age_min" />}
                  />
                  <Field
                    name="discount"
                    type="number"
                    as={TextField}
                    label="Discount"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="discount" />}
                  />
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="category_id_label">Category</InputLabel>
                    <Field
                      name="category_id"
                      as={Select}
                      labelId="category_id_label"
                      label="Category"
                      fullWidth
                      variant="outlined"
                      helperText={<ErrorMessage name="category_id" />}
                    >
                      {categories.map((category) => (
                        <MenuItem key={category.category_id} value={category.category_id}>
                          {category.category_name}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="made_in_label">Country</InputLabel>
                    <Field
                      name="made_in"
                      as={Select}
                      labelId="made_in_label"
                      label="Country"
                      fullWidth
                      variant="outlined"
                      helperText={<ErrorMessage name="made_in" />}
                    >
                      <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
                      <MenuItem value="Turkey">Turkey</MenuItem>
                      <MenuItem value="China">China</MenuItem>
                    </Field>
                  </FormControl>
                  <FieldArray
                    name="color"
                    render={(arrayHelpers) => (
                      <Box>
                        {values.color.map((color, index) => (
                          <Field
                            key={index}
                            name={`color.${index}`}
                            type="text"
                            as={TextField}
                            label={`Color ${index + 1}`}
                            fullWidth
                            variant="outlined"
                            helperText={<ErrorMessage name={`color.${index}`} />}
                          />
                        ))}
                      </Box>
                    )}
                  />
                  <Field name="for_gender" as={RadioGroup} row>
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
                    <ErrorMessage name="for_gender" />
                  </Field>
                  <Field
                    name="cost"
                    type="number"
                    as={TextField}
                    label="Cost"
                    fullWidth
                    variant="outlined"
                    helperText={<ErrorMessage name="cost" />}
                  />
                  <FieldArray
                    name="size"
                    render={(arrayHelpers) => (
                      <Box>
                        {values.size.map((size, index) => (
                          <Field
                            key={index}
                            name={`size.${index}`}
                            type="text"
                            as={TextField}
                            label={`Size ${index + 1}`}
                            fullWidth
                            variant="outlined"
                            helperText={<ErrorMessage name={`size.${index}`} />}
                          />
                        ))}
                      </Box>
                    )}
                  />
                </Box>
                <Field
                  name="name"
                  type="text"
                  as={TextField}
                  label="Product Name"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 2 }}
                  helperText={<ErrorMessage name="name" />}
                />
                <Field
                  name="description"
                  type="text"
                  as={TextField}
                  label="Description"
                  fullWidth
                  multiline
                  rows={3}
                  variant="outlined"
                  sx={{ mt: 1 }}
                  helperText={<ErrorMessage name="description" />}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                  sx={{ mt: 2 }}
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddProductModal;

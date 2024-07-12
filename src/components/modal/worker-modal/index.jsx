import worker from "../../../service/worker";
import * as React from "react";
import {
  Modal,
  Backdrop,
  Box,
  Typography,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: 1.3,
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    outline: "none",
    p: 3,
};

const WorkerSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    gender: Yup.string().required("Gender is required"),
    age: Yup.number().required("Age is required"),
    phone_number: Yup.string().required("Phone number is required"),
});

export default function EditService({ row, open, handleClose }) {
    const initialValues = {
        age: row.age || "",
        email: row.email || "",
        first_name: row.first_name || "",
        last_name: row.last_name || "",
        gender: row.gender || "",
        password: row.password || "",
        phone_number: row.phone_number || "",
    };

    const handleSubmit = async (values) => {
        console.log(values);
        const data = {
            id: row?.id,
            ...values,
        };
        try {
            if (row.id) {
                const response = await worker.update(data);
                if (response.status === 200) {
                    window.location.reload();
                }
            } else {
                const response = await worker.add(values);
                if (response.status === 201) {
                    window.location.reload();
                }
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {row.id ? "Edit Worker" : "Add Worker"}
                </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={WorkerSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field
                                name="age"
                                type="number"
                                as={TextField}
                                label="Age"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="age"
                                        component="p"
                                        className="text-[red] text-[15px]"
                                    />
                                }
                            />
                            <Field
                                name="email"
                                type="text"
                                as={TextField}
                                label="Email"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="email"
                                        component="p"
                                        className="text-[red] text-[15px]"
                                    />
                                }
                            />
                            <Field
                                name="first_name"
                                type="text"
                                as={TextField}
                                label="First Name"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="first_name"
                                        component="p"
                                        className="text-[red] text-[15px]"
                                    />
                                }
                            />
                            <div className="flex justify-center" >
                            <Field name="gender" as={RadioGroup} row>
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
                            </Field>
                            </div>
                            <Field
                                name="last_name"
                                type="text"
                                as={TextField}
                                label="Last Name"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="last_name"
                                        component="p"
                                        className="text-[red] text-[15px]"
                                    />
                                }
                            />
                            <Field
                                name="password"
                                type="password"
                                as={TextField}
                                label="Password"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="password"
                                        component="p"
                                        className="text-[red] text-[15px]"
                                    />
                                }
                            />
                            <Field
                                name="phone_number"
                                type="text"
                                as={TextField}
                                label="Phone"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="phone_number"
                                        component="p"
                                        className="text-[red] text-[15px]"
                                    />
                                }
                            />
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "end",
                                    gap: "12px",
                                    marginTop: "5px",
                                }}
                            >
                                <Button
                                    onClick={handleClose}
                                    type="button"
                                    variant="contained"
                                    color="warning"
                                >
                                    Close
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="success"
                                    disabled={isSubmitting}
                                >
                                    {row.id ? "Update" : "Add"}
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Modal>
    );
}

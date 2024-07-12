import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import categoryService from "../../../service/category";

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
  p: 3,
  outline: "none",
};

const OrderValidationSchema = Yup.object().shape({
  category_name: Yup.string().required("Category name is required"),
});

export default function AddCategory({ open, handleClose, category }) {
  const initialValues = category || {
    category_name: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (category) {
        // Tahrirlash
        const response = await categoryService.edit(values, category.category_id);
        console.log("Tahrirlash Javob: ", response);
      } else {
        // Yaratish
        const response = await categoryService.create(values);
        console.log("Yaratish Javob: ", response);
      }
      window.location.reload();
    } catch (error) {
      console.log("Xatolik: ", error);
    }
    setSubmitting(false);
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
          {category ? "Edit Category" : "Add Category"}
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={OrderValidationSchema}
          enableReinitialize
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                name="category_name"
                type="text"
                as={TextField}
                label="Categoryni kiriting"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText={
                  <ErrorMessage
                    name="category_name"
                    component="span"
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
                  Chiqish
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Yuborilmoqda" : category ? "Tahrirlash" : "Yaratish"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import category from "../../../service/category";

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

export default function AddCategory({ open, handleClose }) {
  const initialValues = {
    category_name: "",
    category_id: ""
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("Yuborilayotgan qiymatlar: ", values);
    try {
      const response = await category.edit(values);
      console.log("Javob: ", response);
      if (response.status === 201) {
        console.log("Buyurtma muvaffaqiyatli yaratildi!");
        window.location.reload();
      } else {
        console.log("Buyurtmani yaratishda xatolik. Status kodi: ", response.status);
      }
    } catch (error) {
      console.log("Buyurtmani yaratishda xatolik: ", error);
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
          Edit a category
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={OrderValidationSchema}
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
                  {isSubmitting ? "Yuborilmoqda" : "Yaratish"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}

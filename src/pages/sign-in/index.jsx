// import {
//   Button,
//   IconButton,
//   InputAdornment,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { auth } from "../../service/index";
// import { Notification } from "../../utils/index";
// import { signInValidationSchema } from "../../utils/validation";
// import { SignInModal } from "../../components/modal";

// const Index = () => {
//   const initialValues = {
//     email: "",
//     password: "",
//   };
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       const response = await auth.sign_in(values);
//       if (response.status === 200) {
//         localStorage.setItem("access_token", response?.data?.access_token);
//         Notification({
//           title: "Sign In Successfully",
//           type: "success",
//         });
//         setTimeout(() => {
//           navigate("/");
//         }, 2300);
//       }
//     } catch (error) {
//       console.error(error);
//       Notification({
//         title: "Sign In Failed",
//         type: "error",
//       });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     if (localStorage.getItem("access_token")) {
//       navigate("/");
//     }
//   }, [navigate]);

//   return (
//     <>
//       <SignInModal open={open} />
//       <div className="flex justify-center items-center bg-[url('https://avatars.mds.yandex.net/get-altay/2056672/2a0000016d7d92ce888813ed1ab980e0ab87/orig')] bg-cover bg-center h-screen w-full">
//       <div className="h-screen flex-col flex items-center justify-center p-5 'custom': '32px 0px 32px 0px' w-[700px] h-[350px] bg-white bg-opacity-60">
//         <h1 className="text-[35px] font-normal sm:text-[36px] md:text-[56px]">
//           Sign In
//         </h1>
//         <div className="max-w-[600px]">
//           <Formik
//             initialValues={initialValues}
//             onSubmit={handleSubmit}
//             validationSchema={signInValidationSchema}
//           >
//             {({ isSubmitting }) => (
//               <Form>
//                 <Field
//                   name="email"
//                   type="email"
//                   as={TextField}
//                   label="Email address"
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   helperText={
//                     <ErrorMessage
//                       name="email"
//                       component="span"
//                       className="text-[red] text-[15px]"
//                     />
//                   }
//                 />
//                 <p
//                   className="mb-3 cursor-pointer text-blue-500 flex justify-end mb-[-3px] "
//                   onClick={() => setOpen(true)}
//                 >
//                   Forgot Password?
//                 </p>
//                 <Field
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   as={TextField}
//                   label="Password"
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   helperText={
//                     <ErrorMessage
//                       name="password"
//                       component="span"
//                       className="text-[red] text-[15px]"
//                     />
//                   }
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           onClick={() => setShowPassword(!showPassword)}
//                           edge="end"
//                         >
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   disabled={isSubmitting}
//                   sx={{ marginBottom: "8px" }}
//                 >
//                   {isSubmitting ? "Signing" : "Sign In"}
//                 </Button>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default Index;

import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import auth from "../../service/auth";
import { Notification } from "../../utils/index";
import { signInValidationSchema } from "../../utils/validation";
import { SignInModal } from "../../components/modal";

const Index = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await auth.sign_in(values);
      if (response.status === 200) {
        localStorage.setItem("access_token", response?.data?.access_token);
        localStorage.setItem("refresh_token", response?.data?.refresh_token);
        Notification({
          title: "Sign In Successfully",
          type: "success",
        });
        setTimeout(() => {
          navigate("/");
        }, 2300);
      }
    } catch (error) {
      console.error(error);
      Notification({
        title: "Sign In Failed",
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <SignInModal open={open} />
      <div className="flex justify-center items-center bg-[url('https://avatars.mds.yandex.net/get-altay/2056672/2a0000016d7d92ce888813ed1ab980e0ab87/orig')] bg-cover bg-center h-screen w-full">
        <div
          className="flex flex-col items-center justify-center p-5 w-[700px] h-[350px] bg-white bg-opacity-70"
          style={{ borderRadius: "32px 0px 32px 0px" }}
        >
          <h1 className="text-[35px] font-normal sm:text-[36px] md:text-[56px] text-">
            Log in
          </h1>
          <div className="max-w-[600px]">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={signInValidationSchema}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    name="email"
                    type="email"
                    as={TextField}
                    label="Email address"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                  />
                  <p
                    className="cursor-pointer text-blue-500 flex justify-end -mb-3"
                    onClick={() => setOpen(true)}
                  >
                    Forgot Password?
                  </p>
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    as={TextField}
                    label="Password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    helperText={
                      <ErrorMessage
                        name="password"
                        component="span"
                        className="text-[red] text-[15px]"
                      />
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{ marginBottom: "8px" }}
                  >
                    {isSubmitting ? "Signing" : "Sign In"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

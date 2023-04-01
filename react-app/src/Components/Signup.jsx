import { Formik } from "formik";
import AuthService from "../auth";
import { useState } from "react";
import * as Yup from "yup";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [showCPassword, setshowCPassword] = useState(false);

  const handleShowPassword = () => {
    setshowPassword(!showPassword);
    let password = document.getElementById("password");
    if (password.getAttribute("type") == "password") {
      password.parentElement.children[2].children[0].children[0].setAttribute(
        "d",
        "M19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L14.032 8.55382C13.4365 8.20193 12.7418 8 12 8C9.79086 8 8 9.79086 8 12C8 12.7418 8.20193 13.4365 8.55382 14.032L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L9.96803 15.4462C10.5635 15.7981 11.2582 16 12 16C14.2091 16 16 14.2091 16 12C16 11.2582 15.7981 10.5635 15.4462 9.96803L19.7071 5.70711ZM12.518 10.0677C12.3528 10.0236 12.1792 10 12 10C10.8954 10 10 10.8954 10 12C10 12.1792 10.0236 12.3528 10.0677 12.518L12.518 10.0677ZM11.482 13.9323L13.9323 11.482C13.9764 11.6472 14 11.8208 14 12C14 13.1046 13.1046 14 12 14C11.8208 14 11.6472 13.9764 11.482 13.9323ZM15.7651 4.8207C14.6287 4.32049 13.3675 4 12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C1.92276 13.7326 2.86706 15.0637 4.21194 16.3739L5.62626 14.9596C4.4555 13.8229 3.61144 12.6531 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C12.7719 6 13.5135 6.13385 14.2193 6.36658L15.7651 4.8207ZM12 18C11.2282 18 10.4866 17.8661 9.78083 17.6334L8.23496 19.1793C9.37136 19.6795 10.6326 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C22.0773 10.2674 21.133 8.93627 19.7881 7.62611L18.3738 9.04043C19.5446 10.1771 20.3887 11.3469 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18Z"
      );
      password.setAttribute("type", "text");
    } else {
      password.parentElement.children[2].children[0].children[0].setAttribute(
        "d",
        "M6.30147 15.5771C4.77832 14.2684 3.6904 12.7726 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C14.1843 6 16.1261 7.07185 17.6986 8.42294C19.2218 9.73158 20.3097 11.2274 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18C9.81574 18 7.87402 16.9282 6.30147 15.5771ZM12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C2.00757 13.8624 3.23268 15.5772 4.99812 17.0941C6.75717 18.6054 9.14754 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C21.9925 10.1376 20.7674 8.42276 19.002 6.90595C17.2429 5.39462 14.8525 4 12 4ZM10 12C10 10.8954 10.8955 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12ZM12 8C9.7909 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.7909 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8Z"
      );
      password.setAttribute("type", "password");
    }
  };
  const handleShowCPassword = () => {
    setshowCPassword(!showCPassword);
    let confirmPassword = document.getElementById("confirmPassword");
    if (confirmPassword.getAttribute("type") == "password") {
      confirmPassword.parentElement.children[2].children[0].children[0].setAttribute(
        "d",
        "M19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L14.032 8.55382C13.4365 8.20193 12.7418 8 12 8C9.79086 8 8 9.79086 8 12C8 12.7418 8.20193 13.4365 8.55382 14.032L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L9.96803 15.4462C10.5635 15.7981 11.2582 16 12 16C14.2091 16 16 14.2091 16 12C16 11.2582 15.7981 10.5635 15.4462 9.96803L19.7071 5.70711ZM12.518 10.0677C12.3528 10.0236 12.1792 10 12 10C10.8954 10 10 10.8954 10 12C10 12.1792 10.0236 12.3528 10.0677 12.518L12.518 10.0677ZM11.482 13.9323L13.9323 11.482C13.9764 11.6472 14 11.8208 14 12C14 13.1046 13.1046 14 12 14C11.8208 14 11.6472 13.9764 11.482 13.9323ZM15.7651 4.8207C14.6287 4.32049 13.3675 4 12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C1.92276 13.7326 2.86706 15.0637 4.21194 16.3739L5.62626 14.9596C4.4555 13.8229 3.61144 12.6531 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C12.7719 6 13.5135 6.13385 14.2193 6.36658L15.7651 4.8207ZM12 18C11.2282 18 10.4866 17.8661 9.78083 17.6334L8.23496 19.1793C9.37136 19.6795 10.6326 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C22.0773 10.2674 21.133 8.93627 19.7881 7.62611L18.3738 9.04043C19.5446 10.1771 20.3887 11.3469 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18Z"
      );
      confirmPassword.setAttribute("type", "text");
    } else {
      confirmPassword.parentElement.children[2].children[0].children[0].setAttribute(
        "d",
        "M6.30147 15.5771C4.77832 14.2684 3.6904 12.7726 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C14.1843 6 16.1261 7.07185 17.6986 8.42294C19.2218 9.73158 20.3097 11.2274 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18C9.81574 18 7.87402 16.9282 6.30147 15.5771ZM12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C2.00757 13.8624 3.23268 15.5772 4.99812 17.0941C6.75717 18.6054 9.14754 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C21.9925 10.1376 20.7674 8.42276 19.002 6.90595C17.2429 5.39462 14.8525 4 12 4ZM10 12C10 10.8954 10.8955 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12ZM12 8C9.7909 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.7909 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8Z"
      );
      confirmPassword.setAttribute("type", "password");
    }
  };
  let obj = {};
  let message = "";
  return (
    <Formik
      initialValues={{
        FirstName: "",
        LastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      // validationSchema={validation}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.FirstName) {
          errors.FirstName = "Required";
        } else if (values.FirstName.length < 3) {
          errors.FirstName = "Name length is so short";
        }
        if (!values.LastName) {
          errors.LastName = "Required";
        } else if (values.LastName.length < 3) {
          errors.LastName = "Name length is so short";
        }

        if (!values.password) {
          errors.password = "Required";
        } else if (
          !/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/i.test(
            values.password
          )
        ) {
          errors.password = "A password contains at least eight characters";
        } else if (values.password.length < 8) {
          errors.password = "Password length is so short ";
        }

        if (!values.confirmPassword) {
          errors.confirmPassword = "Required";
        } else if (values.confirmPassword !== values.password) {
          errors.password = "field doesn't match password ";
        }

        console.log(values);

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        obj = values;
        console.log(values);
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);

        AuthService.signup(
          obj?.FirstName,
          obj?.LastName,
          obj?.email,
          obj?.password,
          obj?.confirmPassword
        )
          .then(
            (data) => {
              window.location.reload();
              window.location.replace("/login");
              toast.success("You Created an account successfully");
            },
            (error) => {
              message = error.response.data;
              toast.error(message);
            }
          )
          .catch(console.log("error"));
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div
        // className="hero min-h-screen"
        // style={{
        //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://cdn.quizly.co/wp-content/uploads/2018/02/24044755/1145.jpg")`,
        // }}
        >
          <section className=" flex items-center justify-center ">
            <div className="bg-gray-50 flex rounded-2xl shadow-lg max-w-3xl items-center m-20">
              <div className="md:w-1/2 px-12">
                <h2 className="font-bold text-3xl mt-10 text-[#272B51]">
                  Sign Up
                </h2>
                <p className="text-sm mt-4 text-[#272B51]">
                  {" "}
                  Already a member?{" "}
                  <NavLink className="underline decoration-2 " to="/login">
                    {" "}
                    Log in{" "}
                  </NavLink>
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 m-auto  text-black/80 "
                >
                  <div className="mt-8 ">
                    <label className="mb-4" htmlFor="FirstName  ">
                      First Name
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="FirstName"
                      name="FirstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.FirstName}
                      placeholder="John"
                      className="p-1  rounded-xl text-[#272B51]  input input-bordered leading-tight focus:outline-none focus:border-[#272B51] focus:text-[#272B51] bg-transparent"
                    />
                    <div className="message text-red-400">
                      {errors.FirstName &&
                        touched.FirstName &&
                        errors.FirstName}
                    </div>
                  </div>
                  <div>
                    <label className="mb-4" htmlFor="LastName ">
                      Last Name
                    </label>
                    <br></br>

                    <input
                      type="text"
                      id="LastName"
                      name="LastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.LastName}
                      placeholder="ex: John"
                      className="p-1  rounded-xl text-[#272B51]  input input-bordered leading-tight focus:outline-none focus:border-[#272B51] focus:text-[#272B51] bg-transparent"
                    />
                    <div className="message text-red-400">
                      {errors.LastName && touched.LastName && errors.LastName}
                    </div>
                  </div>
                  <div>
                    <label className="mb-4 " htmlFor="email">
                      Email
                    </label>
                    <br></br>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@example.com"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="p-1  rounded-xl text-[#272B51]  input input-bordered leading-tight focus:outline-none focus:border-[#272B51] focus:text-[#272B51] bg-transparent"
                    />
                    <div className="message text-red-400">
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>
                  <div className="relative">
                    <label htmlFor="password">Password</label>
                    <br></br>

                    <input
                      name="password"
                      id="password"
                      type={showPassword ? "text" : "password"}
                      // type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="p-1  rounded-xl text-[#272B51]  input input-bordered leading-tight focus:outline-none focus:border-[#272B51] focus:text-[#272B51] bg-transparent"
                    />

                    <button
                      onClick={handleShowPassword}
                      className="absolute mt-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="w-4 h-4 absolute top--1/2 right-4 -translate-y-1/2"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.30147 15.5771C4.77832 14.2684 3.6904 12.7726 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C14.1843 6 16.1261 7.07185 17.6986 8.42294C19.2218 9.73158 20.3097 11.2274 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18C9.81574 18 7.87402 16.9282 6.30147 15.5771ZM12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C2.00757 13.8624 3.23268 15.5772 4.99812 17.0941C6.75717 18.6054 9.14754 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C21.9925 10.1376 20.7674 8.42276 19.002 6.90595C17.2429 5.39462 14.8525 4 12 4ZM10 12C10 10.8954 10.8955 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12ZM12 8C9.7909 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.7909 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8Z"
                          fill="#000000"
                        />
                      </svg>
                    </button>
                    <div className="message text-red-400">
                      {errors.password && touched.password && errors.password}
                    </div>
                  </div>
                  <div className="relative">
                    <label htmlFor="confirmPassword">Confirm Password</label>

                    <input
                      name="confirmPassword"
                      id="confirmPassword"
                      type={showCPassword ? "text" : "password"}
                      // type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      className="p-1  rounded-xl text-[#272B51]  input input-bordered leading-tight focus:outline-none focus:border-[#272B51] focus:text-[#272B51] bg-transparent"
                    />
                    <button
                      onClick={handleShowCPassword}
                      className="absolute mt-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="w-4 h-4 absolute top--1/2 right-4 -translate-y-1/2"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.30147 15.5771C4.77832 14.2684 3.6904 12.7726 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C14.1843 6 16.1261 7.07185 17.6986 8.42294C19.2218 9.73158 20.3097 11.2274 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18C9.81574 18 7.87402 16.9282 6.30147 15.5771ZM12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C2.00757 13.8624 3.23268 15.5772 4.99812 17.0941C6.75717 18.6054 9.14754 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C21.9925 10.1376 20.7674 8.42276 19.002 6.90595C17.2429 5.39462 14.8525 4 12 4ZM10 12C10 10.8954 10.8955 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12ZM12 8C9.7909 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.7909 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8Z"
                          fill="#000000"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="message text-red-400">
                    {errors.confirmPassword &&
                      touched.confirmPassword &&
                      errors.confirmPassword}
                  </div>
                  <div className="message text-red-400">{message}</div>
                
                <input type="submit" value="Submit" className="btn btn-sm bg-[#272B51] capitalize rounded-xl w-2/5 -mt-4 text-white hover:scale-105 duration-300"  disabled={isSubmitting} />

                    
                  
                </form>
              </div>
              <figure className="w-1/2  object-cover ">
                <img
                  className=" "
                  src="https://i.pinimg.com/564x/44/5b/cd/445bcda5d3da1630ea05dbdd228b5cea.jpg"
                ></img>
              </figure>
            </div>
          </section>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;

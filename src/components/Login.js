import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import "./css/Contact.css"

const Login = () => {
    const DefaultValues = {
        name: "",
        email: "",

    }
    const Validation = yup.object().shape({
        name: yup.string().required("*Please Enter Your Name").min(4, "*Name must be 4 characters or more"),
        email: yup.string().required("*Please Enter Your Email").email("*Enter Valid Email"),
    })
    const handleSubmit = (values) => {
        console.log("values", values);

    }
  return (
    <>
        <section className="Back-Contact">
                <div className="SignUp text-center ">
                    <div className='Contact-content'>
                        <h1 className='Contact-Heading'>Login</h1>
                        <div className='Contact-form'>
                            <Formik initialValues={DefaultValues}
                                validationSchema={Validation}
                                onSubmit={handleSubmit}>
                                <Form>
                                    <div className="Contact-fields row gy-5 gx-5 justify-content-center">
                                        <div className="col-12">
                                            <label class="form-label float-start">Name:</label>
                                            <Field className="p-2 form-control" type="text" name="name" placeholder="Enter Your Name " />
                                            <p className="Cont-para text-danger float-start">
                                                <ErrorMessage name="name" />
                                            </p>
                                        </div>
                                        <div className="col-12">
                                            <label class="form-label float-start">Email:</label>
                                            <Field className="p-2 form-control" type="text" name="email" placeholder="Enter Your Email " />
                                            <p className="Cont-para text-danger float-start">
                                                <ErrorMessage name="email" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <button type="submit" className="Contact-Button btn">Login</button>
                                    </div>
                                    <div className="my-3">
                                        don't have an account? <Link to="/Sign">Sign In</Link>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>

                </div>
            </section>
    </>
  )
}

export default Login

import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import "./css/Contact.css"

const Signup = () => {
    const DefaultValues = {
        name: "",
        email: "",
        phone: "",
        address: "",

    }
    const Validation = yup.object().shape({
        name: yup.string().required("*Please Enter Your Name").min(4, "*Name must be 4 characters or more"),
        email: yup.string().required("*Please Enter Your Email").email("*Enter Valid Email"),
        phone: yup.string().required("*Please Enter Your Phone Number ").length(11, "*Enter Complete Phone Number"),
        address: yup.string().required("*Please Enter Your address ")
    })
    const handleSubmit = (values) => {
        console.log("values", values);

    }
    return (
        <>
            <section className="Back-Contact">
                <div className="SignUp text-center ">
                    <div className='Contact-content'>
                        <h1 className='Contact-Heading'>Sign In</h1>
                        <div className='Contact-form'>
                            <Formik initialValues={DefaultValues}
                                validationSchema={Validation}
                                onSubmit={handleSubmit}>
                                <Form>
                                    <div className="Contact-fields row gy-5 gx-5 justify-content-center">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <label class="form-label float-start">Name:</label>
                                            <Field className="p-2 form-control" type="text" name="name" placeholder="Enter Your Name " />
                                            <p className="Cont-para text-danger float-start">
                                                <ErrorMessage name="name" />
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <label class="form-label float-start">Email:</label>
                                            <Field className="p-2 form-control" type="text" name="email" placeholder="Enter Your Email " />
                                            <p className="Cont-para text-danger float-start">
                                                <ErrorMessage name="email" />
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <label class="form-label float-start">Phone Number:</label>
                                            <Field className="p-2 form-control" type="text" name="phone" placeholder="Enter Your Phone Number" />
                                            <p className=" Cont-para text-danger float-start">
                                                <ErrorMessage name="phone" />
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <label class="form-label float-start">Address:</label>
                                            <Field className="p-2 form-control" type="text" name="address" placeholder="Enter Your Address" />
                                            <p className=" Cont-para text-danger float-start">
                                                <ErrorMessage name="phone" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <button type="submit" className="Contact-Button btn">Sign In</button>
                                    </div>
                                    <div className="my-3">
                                        already have an account? <Link to="/Login">Login</Link>
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

export default Signup

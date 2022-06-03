import React, {useState} from 'react';
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import {Formik} from "formik";
import * as Yup from "yup";
import {Form, 
    FormRow, 
    Field, 
    ErrorMessage,
    FormWrapper,
    FormSuccessMessage
} from "../../lib/style/generalStyles";
import { Button } from "../../components/Button/ButtonStyle";
import { getAllUsers, loginUser } from "../../Api/users";

const SignIn = () => {
    const [successMessage, setSuccessMessage] = useState(null);
    return (
    <>
        <Header isSecondary/>
        <Section title={"Sign in"} isMainSection isCentered>
            <Formik 
            initialValues={{
            email: "",
            password: "",
            }} 
            validationSchema={Yup.object({
                email: Yup.string()
                    .email("Invlaid email address")
                    .required("Email is required"),
                password: Yup.string()
                    .min(8, "Password must be at least 8 characters long")
                    .required("Password is required"),
            })}

            onSubmit={async(values, actions) => {
            //async await način, umjesto .then u Register
                try {
                const res = await loginUser(values);
                const users = await getAllUsers(res.access_token);
                const user = users.find(user => user.email === values.email);

                localStorage.setItem("accessToken", res.access_token);

                actions.setSubmitting(false)
                    actions.resetForm({
                    email: "",
                    password: "",
                });

                setSuccessMessage({
                    error: false,
                    message: `Hi ${user.first_name + ' ' + user.last_name}, login was successful.`
                });

                setTimeout(() => {
                    setSuccessMessage(null);
                }, 3000);
                
                } catch (err) {
                    setSuccessMessage({
                        error: true,
                        message: "Error occured, try again!",
                    });

                    actions.setSubmitting(false);
                }
            }}>
                {formik => (
                    <FormWrapper isCentered>
                        <Form>
                            { successMessage && (
                                <FormRow>
                                    <FormSuccessMessage isError={setSuccessMessage.error}>{successMessage.message}</FormSuccessMessage>
                                </FormRow>
                                )
                            }
                            <FormRow>
                                <Field type="text" name="email" placeholder="Email..." disabled={formik.isSubmitting}/>
                                <ErrorMessage component={"div"} name="email"/>
                            </FormRow>
                            <FormRow>
                                <Field type="password" name="password" placeholder="Password..." disabled={formik.isSubmitting}/>
                                <ErrorMessage component={"div"} name="password"/>
                            </FormRow>
                            <FormRow>
                                <Button isOutline isForma disabled={formik.isSubmitting}>
                                    {formik.isSubmitting ? "Processing..." : "Sign in"}
                                </Button>
                            </FormRow>
                        </Form>
                    </FormWrapper>
                )}
            </Formik>
        </Section>  
        
    </>
    );
};

export default SignIn;

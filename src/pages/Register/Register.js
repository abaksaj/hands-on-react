import {useState} from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import {Formik} from "formik";
import * as Yup from "yup";
import {Form, 
    FormRow, 
    Field, 
    Select, 
    Option, 
    ErrorMessage,
    FormWrapper,
    FormSuccessMessage
} from "../../lib/style/generalStyles";
import { Button } from "../../components/Button/ButtonStyle";
import { registerUser } from "../../Api/users";


const Register= () => {
    const [successMessage, setSuccessMessage] = useState(null);
    return (
    <>
        <Header isSecondary/>
        <Section title={"Register"} isMainSection isCentered>
            <Formik 
            initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmed: "",
            githubUsername: "",
            zeplinUsername: "",
            activeFacultyYear: "",
            isAdmin: false,
            }} 
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .required("First name is required"),
                lastName: Yup.string() 
                    .required("Last name is required"),
                email: Yup.string()
                    .email("Invlaid email address")
                    .required("Email is required"),
                password: Yup.string()
                    .min(8, "Password must be at least 8 characters long")
                    .required("Password is required"),
                passwordConfirmed: Yup.string()
                    .test("passwords-match", "Passwords must match", function(value) {
                        return this.parent.password === value}),
                githubUsername: Yup.string()
                    .required("Github username is required"),
                zeplinUsername: Yup.string()
                    .required("Zeplin useername is required"),
                activeFacultyYear: Yup.string()
                    .required("Active faculty year is reqired")
            })}

            onSubmit={(values, actions) => {
                const user = {
                    first_name: values.firstName,
                    last_name: values.lastName,
                    password: values.password,
                    github_username: values.githubUsername,
                    zeplin_username: values.zeplinUsername,
                    active_faculty_year: 
                    // Number ili + radi isto, pretvara string u broj
                        +values.activeFacultyYear=== 0 
                            ? null
                            : Number(values.activeFacultyYear), //možemo koristiti i parseInt
                    is_admin: false,
                };

                registerUser(user)
                .then(res => {
                    actions.setSubmitting(false)
                    actions.resetForm({
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        passwordConfirmed: "",
                        githubUsername: "",
                        zeplinUsername: "",
                        activeFacultyYear: "",
                        isAdmin: false,
                }); 

                setSuccessMessage({
                    error: false,
                    message: "User registration was successfull",
                });

                setTimeout(() => {
                    setSuccessMessage(null);
                }, 3000)
                })
                .catch(err => {

                    setSuccessMessage({
                        error: true,
                        message: "Error occured, try again!",
                    });

                    actions.setSubmitting(false);
                });
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
                                <Field type="text" name="firstName" placeholder="First name..." disabled={formik.isSubmitting}/>
                                <ErrorMessage component={"div"} name="firstName"/>
                            </FormRow>
                            <FormRow>
                                <Field type="text" name="lastName" placeholder="Last name..." disabled={formik.isSubmitting}/>
                                <ErrorMessage component={"div"} name="lastName"/>
                            </FormRow>
                            <FormRow>
                                <Field type="text" name="email" placeholder="Email..." disabled={formik.isSubmitting}/>
                                <ErrorMessage component={"div"} name="email"/>
                            </FormRow>
                            <FormRow>
                                <Field type="password" name="password" placeholder="Password..." disabled={formik.isSubmitting}/>
                                <ErrorMessage component={"div"} name="password"/>
                            </FormRow>
                            <FormRow>
                                <Field type="password" name="passwordConfirmed" placeholder="Confirm password..." disabled={formik.isSubmitting}/>
                                <ErrorMessage component={"div"} name="passwordConfirmed"/> 
                            </FormRow>
                            <FormRow>
                                <Field type="text" name="githubUsername" placeholder="Github username..." disabled={formik.isSubmitting}/>
                                <ErrorMessage component={"div"} name="githubUsername"/>
                            </FormRow>
                            <FormRow>
                                <Field type="text" name="zeplinUsername" placeholder="Zeplin username..." disabled={formik.isSubmitting}/>
                                <ErrorMessage component={"div"} name="zeplinUsername"/>
                            </FormRow>
                            <FormRow>
                                <Select id="activeFacultyYear" {...formik.getFieldProps("activeFacultyYear")}>
                                <Option value="" disabled hidden>
                                    Choose an Active faculty year
                                </Option>
                                    <Option value='0'>Not a student</Option>
                                    <Option value='1'>1st faculty year</Option>
                                    <Option value='2'>2nd faculty year</Option>
                                    <Option value='3'>3rd faculty year</Option>
                                    <Option value='4'>4th faculty year</Option>
                                    <Option value='5'>5th faculty year</Option>
                                </Select>
                                <ErrorMessage component={"div"} name="activeFacultyYear"/>
                            </FormRow>
                            <FormRow>
                                <Button isOutline isForm disabled={formik.isSubmitting}>
                                    {formik.isSubmitting ? "Processing..." : "Register"}
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

export default Register;


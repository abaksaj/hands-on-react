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
    FormWrapper
} from "../../lib/style/generalStyles";
import { Button } from "../../components/Button/ButtonStyle";

const SignIn = () => {
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

            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false)
                    actions.resetForm({
                    email: "",
                    password: "",
                });
                },1000);
            }}>
                {formik => (
                    <FormWrapper isCentered>
                        <Form>
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

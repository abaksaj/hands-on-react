import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Form,
  FormRow,
  Field,
  Select,
  Option,
  ErrorMessage,
  FormWrapper,
  SectionOut,
  FormikOut,
  MiddleBoxOut,
  MiddleBoxStyle,
  MiddleBox,
  InputValues,
  InputFill,
  TextPassword,
  ButtonText,
  TopRightButton,
  TopRightButtonOut
} from "../../lib/style/generalStyles";
import { Button } from "../../components/Button/ButtonStyle";

const Profile = () => {
  const [editPassword, setEditPassword] = useState(false);
  return (
    <>
      <Header isSecondary />
      <SectionOut >
      <Section title={"My Profile"}>
        <FormikOut>
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
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string()
              .email("Invlaid email address")
              .required("Email is required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 characters long")
              .required("Password is required"),
            passwordConfirmed: Yup.string().test(
              "passwords-match",
              "Passwords must match",
              function (value) {
                return this.parent.password === value;
              }
            ),
            githubUsername: Yup.string().required(
              "Github username is required"
            ),
            zeplinUsername: Yup.string().required(
              "Zeplin useername is required"
            ),
            activeFacultyYear: Yup.string().required(
              "Active faculty year is reqired"
            ),
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
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
            }, 1000);
          }}
        >
          {(formik) => (
            <FormWrapper>
              <Form>
                <FormRow>
                  <label htmlFor="firstName">First name:</label>
                  <Field
                    type="text"
                    name="firstName"
                    id="firstName"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="firstName" />
                </FormRow>
                <FormRow>
                  <label htmlFor="lastName">Last name:</label>
                  <Field
                    type="text"
                    name="lastName"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="lastName" />
                </FormRow>
                <FormRow>
                  <label htmlFor="email">Email:</label>
                  <Field
                    type="text"
                    name="email"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="email" />
                </FormRow>
                <FormRow>
                  <label htmlFor="githubUsername">Github username:</label>
                  <Field
                    type="text"
                    name="githubUsername"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="githubUsername" />
                </FormRow>
                <FormRow>
                  <label htmlFor="zeplinUsername">Zeplin username:</label>
                  <Field
                    type="text"
                    name="zeplinUsername"
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="zeplinUsername" />
                </FormRow>
                <FormRow>
                  <Select
                    id="activeFacultyYear"
                    {...formik.getFieldProps("activeFacultyYear")}
                  >
                    <Option value="" disabled hidden>
                      Choose an Active faculty year
                    </Option>
                    <Option value="0">Not a student</Option>
                    <Option value="1">1st faculty year</Option>
                    <Option value="2">2nd faculty year</Option>
                    <Option value="3">3rd faculty year</Option>
                    <Option value="4">4th faculty year</Option>
                    <Option value="5">5th faculty year</Option>
                  </Select>
                  <ErrorMessage component={"div"} name="activeFacultyYear"/>
                </FormRow>
              </Form>
            </FormWrapper>
          )}
        </Formik>
        </FormikOut>
        <MiddleBoxOut>
        <MiddleBoxStyle>
          <MiddleBox>
            {editPassword ? (
              <InputValues>
                <TextPassword>Password Reset</TextPassword>
                <Formik
          initialValues={{
            oldPassword: "",
            newpassword: "",
            newPasswordConfirmed: "",
          }}
          validationSchema={Yup.object({
            oldpassword: Yup.string()
              .min(8, "Password must be at least 8 characters long")
              .required("Password is required"),
              newPassword: Yup.string()
              .min(8, "Password must be at least 8 characters long")
              .required("Password is required"),
            newPasswordConfirmed: Yup.string().test(
              "passwords-match",
              "Passwords must match",
              function (value) {
                return this.parent.password === value;
              }
            ),
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              actions.resetForm({
                oldPassword: "",
                newPassword: "",
                newPasswordConfirmed: "",
              });
            }, 1000);
          }}
        >
          {(formik) => (
            <FormWrapper isLeft>
              <Form>
              <FormRow>
                <Field type="text" name="oldPassword" placeholder="Old password..." disabled={formik.isSubmitting}/>
                <ErrorMessage component={"div"} name="oldPassword"/>
              </FormRow>
              <FormRow>
                <Field type="text" name="newPassword" placeholder="New password..." disabled={formik.isSubmitting}/>
                <ErrorMessage component={"div"} name="newPassword"/>
              </FormRow>
              <FormRow>
                <Field type="text" name="newPasswordConfirmed" placeholder="New password confirmed..." disabled={formik.isSubmitting}/>
                <ErrorMessage component={"div"} name="firstName"/>
              </FormRow>
              </Form>
            </FormWrapper>
          )}
        </Formik>
              </InputValues>
            ) : (
              <InputFill>
                <TextPassword>Password Reset</TextPassword>
                <ButtonText>
                  In Order to Change the password click the edit button
                </ButtonText>
              </InputFill>
            )}
          </MiddleBox>
          <Button isOutline>Update Password</Button>
        </MiddleBoxStyle>
        </MiddleBoxOut>

       <TopRightButtonOut isOutline>
        <TopRightButton>
          <Button
            onClick={() => {
              setEditPassword(!editPassword);
            }}
          >
            {editPassword ? (
              <TextPassword>Cancel</TextPassword>
            ) : (
              <TextPassword>Edit</TextPassword>
            )}
          </Button>
        </TopRightButton>
       </TopRightButtonOut> 

      </Section>
      </SectionOut>
    </>
  );
};

export default Profile;

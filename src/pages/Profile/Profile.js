import React, {useState} from "react";
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
  Label,
  FormikOut,
  MiddleBox,
  InputValues,
  InputFill,
  TextPassword,
  ButtonText,
  ProfileContainer
} from "../../lib/style/generalStyles";
import {Button} from "../../components/Button/ButtonStyle";

const Profile = (
) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <Header isSecondary/>
      <Section 
        buttonText={isEditing ? "Cancel" : "Edit"}
        onClick={() => setIsEditing(!isEditing)}
        title={"My Profile"} 
        isLeft>
        <ProfileContainer>
        <FormikOut isLeft>
        <Formik
          initialValues={{
            firstName:"Ana",
            lastName:"Bakšaj",
            email:"ana.baksaj55@gmail.com",
            githubUsername: "abaksaj",
            zeplinUsername: "anabaksaj55",
            activeFacultyYear: "0"
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            githubUsername: Yup.string()
            .required("Github username is required"),
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
                githubUsername: "",
                zeplinUsername: "",
                activeFacultyYear: "",
                isAdmin: false,
              });
            }, 1000);
          }}>

          {(formik) => (
            <FormWrapper>
              <Form>
                <FormRow>
                  <Label htmlFor="firstName">First name:</Label>
                  <Field
                    type="text"
                    name="firstName"
                    id="firstName"
                    disabled={formik.isSubmitting || !isEditing}/>
                  <ErrorMessage component={"div"} name="firstName"/>
                </FormRow>
                <FormRow>
                <Label htmlFor="lastName">Last name:</Label>
                  <Field
                    type="text"
                    name="lastName"
                    disabled={formik.isSubmitting || !isEditing}/>
                  <ErrorMessage component={"div"} name="lastName"/>
                </FormRow>
                <FormRow>
                <Label htmlFor="email">Email:</Label>
                  <Field
                    type="text"
                    name="email"
                    disabled={formik.isSubmitting || !isEditing}/>
                  <ErrorMessage component={"div"} name="email"/>
                </FormRow>
                <FormRow>
                <Label htmlFor="githubUsername">Github username:</Label>
                  <Field
                    type="text"
                    name="githubUsername"
                    disabled={formik.isSubmitting || !isEditing}/>
                  <ErrorMessage component={"div"} name="githubUsername"/>
                </FormRow>
                <FormRow>
                <Label htmlFor="zeplinUsername">Zeplin username:</Label>
                  <Field
                    type="text"
                    name="zeplinUsername"
                    disabled={formik.isSubmitting || !isEditing}/>
                  <ErrorMessage component={"div"} name="zeplinUsername"/>
                </FormRow>
                <FormRow>
                  <Select disabled={formik.isSubmitting || !isEditing}
                    id="activeFacultyYear"
                    {...formik.getFieldProps("activeFacultyYear")}>
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
                <FormRow>
                {isEditing ? <Button type="submit" isOutline isForma disabled={formik.isSubmitting}>
                                    {formik.isSubmitting ? "Processing..." : "Update"}
                </Button>:""} 
                </FormRow>
              </Form>
            </FormWrapper>
          )}
        </Formik>
        </FormikOut>

        {/*Reset password form */}

          <MiddleBox>
            {isEditing ?  (
              <InputValues>
                <TextPassword>Password reset</TextPassword>
                <Formik
                initialValues={{
                  oldPassword: "",
                  newPassword: "",
                  newPasswordConfirmed: ""}
               }
                validationSchema={Yup.object({
                  oldPassword: Yup.string()
                  .required("Old password is required"),
                  newPassword: Yup.string()
                  .min(8, "Password must be at least 8 characters long")
                  .required("New password is required"),
                  newPasswordConfirmed: Yup.string()
                  .required("New password is required")
                  .test(
                  "passwords-match",
                  "Passwords must match",
                  function (value) {
                    return this.parent.newPassword === value;
                  }
                )
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
                }}>
          {(formik) => (
            <FormWrapper>
              <Form>
              <FormRow>
                <Field  type="password" name="oldPassword" placeholder="Old password..." disabled={formik.isSubmitting}/>
                <ErrorMessage component={"div"} name="oldPassword"/>
              </FormRow>
              <FormRow>
                <Field  type="password" name="newPassword" placeholder="New password..." disabled={formik.isSubmitting}/>
                <ErrorMessage component={"div"} name="newPassword"/>
              </FormRow>
              <FormRow>
                <Field  type="password" name="newPasswordConfirmed" placeholder="New password confirmed..." disabled={formik.isSubmitting}/>
                <ErrorMessage component={"div"} name="newPasswordConfirmed"/>
              </FormRow>
              <FormRow>
              <Button type="submit" isOutline isForma disabled={formik.isSubmitting}>
                      {formik.isSubmitting ? "Processing..." : "Update password"}
              </Button>
              </FormRow>
              </Form>
            </FormWrapper>
          )}
            </Formik>
              </InputValues>
              ) : (
              <InputFill>
                <TextPassword>Password reset</TextPassword>
                <ButtonText>In order to change the password click the Edit button</ButtonText>
              </InputFill>
            )}
          </MiddleBox>
          </ProfileContainer>
      </Section>
    </>
  );
};

export default Profile;

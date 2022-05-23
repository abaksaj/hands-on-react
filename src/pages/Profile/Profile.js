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
import {Button} from "../../components/Button/ButtonStyle";

const Profile = (
) => {
  const [editPassword, setEditPassword] = useState(false);
  const [showbtn,setShowbtn]=useState(true);
  const [showupdate,setShowupdate]=useState(true);
  const [data,setData]=useState({
    firstName:"Ana",
    lastName:"Bakšaj",
    email:"ana.baksaj55@gmail.com",
    githubUsername: "abaksaj",
    zeplinUsername: "anabaksaj55",
  })

  const [passwordData, setPasswordData]=useState({
    oldPassword: "",
    newPassword: "",
    newPasswordConfirmed: "",
  })

  const handleChange=(event)=>{
    setData({[event.target.name]:event.target.value}) 
  }

  const handlePasswordChange=(event)=>{
    setPasswordData({[event.target.name]:event.target.value}) 
  }

  const showalert=()=>{
    setShowbtn(!showupdate)
    alert(JSON.stringify(data))
  }

  return (
    <>
      <Header isSecondary/>
      <SectionOut>
      <Section title={"My Profile"} isLeft>
        <FormikOut isLeft>
        <Formik
          initialValues={data}
          validationSchema={Yup.object({
          firstName: Yup.string().required("First name is required"),
          lastName: Yup.string().required("Last name is required"),
          email: Yup.string()
            .email("Invalid email address")
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
                    value={data.firstName}
                    onChange={handleChange}/>
                  <ErrorMessage component={"div"} name="firstName"/>
                </FormRow>
                <FormRow>
                  <label htmlFor="lastName">Last name:</label>
                  <Field
                    type="text"
                    name="lastName"
                    disabled={formik.isSubmitting}
                    value={data.lastName}
                    onChange={handleChange}/>
                  <ErrorMessage component={"div"} name="lastName"/>
                </FormRow>
                <FormRow>
                  <label htmlFor="email">Email:</label>
                  <Field
                    type="text"
                    name="email"
                    disabled={formik.isSubmitting}
                    value={data.email}
                    onChange={handleChange}/>
                  <ErrorMessage component={"div"} name="email"/>
                </FormRow>
                <FormRow>
                  <label htmlFor="githubUsername">Github username:</label>
                  <Field
                    type="text"
                    name="githubUsername"
                    disabled={formik.isSubmitting}
                    value={data.githubUsername}
                    onChange={handleChange}/>
                  <ErrorMessage component={"div"} name="githubUsername"/>
                </FormRow>
                <FormRow>
                  <label htmlFor="zeplinUsername">Zeplin username:</label>
                  <Field
                    type="text"
                    name="zeplinUsername"
                    disabled={formik.isSubmitting}
                    value={data.zeplinUsername}
                    onChange={handleChange}/>
                  <ErrorMessage component={"div"} name="zeplinUsername"/>
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
                <FormRow>
                {editPassword ? <Button isOutline disabled={formik.isSubmitting} onClick={showalert}>{formik.isSubmitting ? "Processing..." : "Update"}</Button>:""} 
                </FormRow>
              </Form>
            </FormWrapper>
          )}
        </Formik>
        </FormikOut>

        {/*Reset password form */}

        <MiddleBoxOut>
        <MiddleBoxStyle>
          <MiddleBox>
            {editPassword ? (
              <InputValues>
                <TextPassword>Password Reset</TextPassword>
                <Formik
          initialValues={passwordData}
          validationSchema={Yup.object({
            oldpassword: Yup.string()
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
                return this.parent.password === value;
              }
            )
            // .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
          })}
          onSubmit={(values, actions) => {
            alert('update button clicked')
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
                <Field onChange={handlePasswordChange} value={passwordData.oldPassword} type="password" name="oldPassword" placeholder="Old password..." disabled={formik.isSubmitting}/>
                <ErrorMessage component={"div"} name="oldPassword"/>
              </FormRow>
              <FormRow>
                <Field onChange={handlePasswordChange}  value={passwordData.newPassword} type="password" name="newPassword" placeholder="New password..." disabled={formik.isSubmitting}/>
                <ErrorMessage component={"div"} name="newPassword"/>
              </FormRow>
              <FormRow>
                <Field onChange={handlePasswordChange}  value={passwordData.newPasswordConfirmed} type="password" name="newPasswordConfirmed" placeholder="New password confirmed..." disabled={formik.isSubmitting}/>
                <ErrorMessage component={"div"} name="newPasswordConfirmed"/>
              </FormRow>
              <FormRow>
              <Button isOutline onClick={()=>setShowbtn(!showbtn)}>{showbtn ? "Update Password":"Processing...." }</Button>
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
        </MiddleBoxStyle>
        </MiddleBoxOut>
       <TopRightButtonOut isOutline>
        <TopRightButton>
          <Button
            onClick={() => {
              setEditPassword(!editPassword);
            }}>
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

import FormLayout from "../layouts/FormLayout";

const UserInfoForm = () => {
  return (
    <FormLayout title="enter your info">
      <input placeholder="first name" />
      <input placeholder="last name" />
      <input placeholder="age" />
    </FormLayout>
  );
}

export default UserInfoForm;
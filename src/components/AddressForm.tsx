import FormLayout from "../layouts/FormLayout";

const AddressForm = () => {
  return (
    <FormLayout title="enter your address">
      <input placeholder="street" />
      <input placeholder="state" />
      <input placeholder="zipcode" />
    </FormLayout>
  );
}

export default AddressForm;
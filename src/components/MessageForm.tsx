import FormLayout from "../layouts/FormLayout";

const MessageForm = () => {
  return (
    <FormLayout title="enter your message">
      <textarea placeholder="message" />
    </FormLayout>
  );
}

export default MessageForm;
export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Oops! Please check your email";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  return errors;
}

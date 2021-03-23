export default (values) => {
  const errors = {};

  if (!values.testingString) {
    errors.testingString = {
      message: 'Please specify a testing string',
      type: 'required'
    };
  }

  return errors;
};

export default (values) => {
  const errors = {};
  if (values.isTestEvent && !values.testEventCode) {
    errors.testEventCode = {
      message: 'To send a test event, Please enter a Test Event Code',
      type: 'required'
    };
  }

  return errors;
};

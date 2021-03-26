/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */
export default (values) => {
  const errors = {};

  if (values.isTestEvent && !values.testEventCode) {
    errors.testEventCode = {
      message: 'To send a test event, Please enter a Test Event Code',
      type: 'required'
    };
  }

  if (!values.event_name) {
    errors.event_name = {
      message: 'Please specify an event name',
      type: 'required'
    };
  }

  if (!values.event_time) {
    errors.event_time = {
      message: 'Please specify then event time',
      type: 'required'
    };
  }

  if (!values.client_ip_address) {
    errors.client_ip_address = {
      message: 'Please specify the Client IP Address',
      type: 'required'
    };
  }

  if (!values.client_user_agent) {
    errors.client_user_agent = {
      message: 'Please specify the Client User Agent',
      type: 'required'
    };
  }

  return errors;
};

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

  if (!values.eventName) {
    errors.eventName = {
      message: 'Please specify an event name',
      type: 'required'
    };
  }

  if (!values.eventTime) {
    errors.eventTime = {
      message: 'Please specify then event time',
      type: 'required'
    };
  }

  if (!values.clientIpAddress) {
    errors.clientIpAddress = {
      message: 'Please specify the Client IP Address',
      type: 'required'
    };
  }

  if (!values.clientUserAgent) {
    errors.clientUserAgent = {
      message: 'Please specify the Client User Agent',
      type: 'required'
    };
  }

  if (!values.actionSource) {
    errors.actionSource = {
      message: 'Please specify the Action Source',
      type: 'required'
    };
  }

  return errors;
};

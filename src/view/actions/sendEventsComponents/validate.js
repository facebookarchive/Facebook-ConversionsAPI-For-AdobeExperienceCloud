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

  if (
    values.actionSource &&
    values.actionSource.toLowerCase() === 'website'
    && !values.clientUserAgent
  ) {
    errors.clientUserAgent = {
      message: 'For website events, please specify the Client User Agent',
      type: 'required'
    };
  }

  if (
    values.actionSource &&
    values.actionSource.toLowerCase() === 'website'
    && !values.clientIpAddress
  ) {
    errors.clientIpAddress = {
      message: 'For website events, please specify the Client IP Address',
      type: 'required'
    };
  }

  if (
    values.actionSource &&
    values.actionSource.toLowerCase() === 'website'
    && !values.eventSourceUrl
  ) {
    errors.eventSourceUrl = {
      message: 'For website events, please specify the Event Source URL',
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

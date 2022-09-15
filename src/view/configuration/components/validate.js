/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 */
export default (values) => {
  const errors = {};

  if (!values.pixelId) {
    errors.pixelId = {
      message: 'Please specify your Facebook Pixel ID',
      type: 'required'
    };
  }

  if (!values.accessToken) {
    errors.accessToken = {
      message: 'Please specify your access token',
      type: 'required'
    };
  }
  return errors;
};

/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */
export default () => {
  const parameters = {
    customerInformation:
    [
      ['client_ip_address', 'Client IP Address', true],
      ['client_user_agent', 'Client User Agent', true],
      ['em','Email', false],
      ['ph', 'Phone', false],
      ['ge', 'Gender', false],
      ['db','Date of Birth', false],
      ['ln', 'Last Name', false],
      ['fn', 'First Name', false],
      ['ct', 'City', false],
      ['st', 'State', false],
      ['zp', 'Zip', false],
      ['country', 'Country', false],
      ['external_id', 'External ID', false],
      ['fbc', 'Click ID', false],
      ['fbp', 'Browser ID', false],
      ['subscription_id', 'Subscription ID', false],
      ['fb_login_id', 'Facebook Login ID', false],
      ['lead_id', 'Lead ID', false]
    ],
    serverEvents:
    [
      ['event_name', 'Event Name',true],
      ['event_time', 'Event Time',true],
      ['event_source_url', 'Event Source Url', false],
      ['event_id','Event ID', false],
      ['action_source','Action Source',false]
    ],
    customData:
    [
      ['value','Value', false],
      ['currency', 'Currency (Required for purchase events)', false],
      ['content_name', 'Content Name', false],
      ['content_category','Content Category', false],
      ['content_ids','Content IDs', false],
      ['contents','Contents', false],
      ['content_type','Content Type', false],
      ['order_id', 'Order ID', false],
      ['predicted_ltv', 'Predicted Lifetime', false],
      ['num_items', 'Number of Items (Use only for InitiateCheckout events)', false],
      ['search_string', 'Search String (Use only for search events)', false],
      ['status', 'Status (Use only with CompleteRegistration events)', false],
      ['delivery_category', 'Delivery Category', false]
    ],

  };

  return parameters;
};

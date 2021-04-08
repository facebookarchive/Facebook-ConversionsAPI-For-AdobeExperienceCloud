/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */
export default () => {
  const parameters = {
    customerInformation:
    [
      ['clientIpAddress', 'Client IP Address', false],
      ['clientUserAgent', 'Client User Agent', false],
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
      ['externalId', 'External ID', false],
      ['fbc', 'Click ID', false],
      ['fbp', 'Browser ID', false],
      ['subscriptionId', 'Subscription ID', false],
      ['fbLoginId', 'Facebook Login ID', false],
      ['leadId', 'Lead ID', false]
    ],
    serverEvents:
    [
      ['eventName', 'Event Name',true],
      ['eventTime', 'Event Time',true],
      ['eventSourceUrl', 'Event Source Url (Required if Action Source is "website")', false],
      ['eventId','Event ID', false],
      ['actionSource','Action Source', true],
      ['optOut','Opt Out', false]
    ],
    customData:
    [
      ['value','Value', false],
      ['currency', 'Currency (Required for purchase events)', false],
      ['contentName', 'Content Name', false],
      ['contentCategory','Content Category', false],
      ['contentIds','Content IDs', false],
      ['contents','Contents', false],
      ['contentType','Content Type', false],
      ['orderId', 'Order ID', false],
      ['predictedLtv', 'Predicted Lifetime', false],
      ['numItems', 'Number of Items (Use only for InitiateCheckout events)', false],
      ['searchString', 'Search String (Use only for search events)', false],
      ['status', 'Status (Use only with CompleteRegistration events)', false],
      ['deliveryCategory', 'Delivery Category', false]
    ]
  };

  return parameters;
};

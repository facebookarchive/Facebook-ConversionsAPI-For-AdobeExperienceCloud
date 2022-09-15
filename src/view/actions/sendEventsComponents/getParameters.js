/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 */
export default () => {
  const parameters = {
    customerInformation:
    [
      ['clientIpAddress', 'Client IP Address'],
      ['clientUserAgent', 'Client User Agent'],
      ['email','Email'],
      ['phone', 'Phone'],
      ['gender', 'Gender'],
      ['dob','Date of Birth'],
      ['lastName', 'Last Name'],
      ['firstName', 'First Name'],
      ['city', 'City'],
      ['state', 'State'],
      ['zip', 'Zip'],
      ['country', 'Country'],
      ['externalId', 'External ID'],
      ['fbc', 'Click ID'],
      ['fbp', 'Browser ID'],
      ['subscriptionId', 'Subscription ID'],
      ['fbLoginId', 'Facebook Login ID'],
      ['leadId', 'Lead ID']
    ],
    serverEvents:
    [
      ['eventName', 'Event Name'],
      ['eventTime', 'Event Time'],
      ['eventSourceUrl', 'Event Source Url'],
      ['eventId','Event ID'],
      ['actionSource','Action Source'],
      ['optOut','Opt Out']
    ],
    customData:
    [
      ['value','Value'],
      ['currency', 'Currency (Required for purchase events)'],
      ['contentName', 'Content Name'],
      ['contentCategory','Content Category'],
      ['contentIds','Content IDs'],
      ['contents','Contents'],
      ['contentType','Content Type'],
      ['orderId', 'Order ID'],
      ['predictedLtv', 'Predicted Lifetime'],
      ['numItems', 'Number of Items (Use only for InitiateCheckout events)'],
      ['searchString', 'Search String (Use only for search events)'],
      ['status', 'Status (Use only with CompleteRegistration events)'],
      ['deliveryCategory', 'Delivery Category']
    ]
  };

  return parameters;
};

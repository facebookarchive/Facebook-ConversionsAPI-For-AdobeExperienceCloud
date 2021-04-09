/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */
'use strict';

var shaHashingHelper = require('./shaHashingHelper');

module.exports = function ({ utils, arc }) {
  const { getExtensionSettings, getSettings, fetch, logger } = utils;
  const { pixelId, accessToken, lduEnabled } = getExtensionSettings();
  const version = 'v10.0';
  const url = `https://graph.facebook.com/${version}/${pixelId}/events/?access_token=${accessToken}`;

  return fetch(url, buildEventBody(getSettings));
};

function buildEventBody(getSettings) {
  const {
    actionSource,
    clientIpAddress,
    clientUserAgent,
    country,
    city,
    customData,
    dob,
    email,
    eventName,
    eventSourceUrl,
    eventTime,
    externalId,
    fbc,
    fbLoginId,
    fbp,
    firstName,
    gender,
    isTestEvent,
    lduEnabled,
    leadId,
    lastName,
    optOut,
    phone,
    state,
    subscriptionId,
    testEventCode,
    zip,
  } = getSettings();
  const lduValue = 'LDU';
  const methodValue = 'POST';
  const contentTypeValue = 'application/json';
  const agentValue = 'adobe_launch';

  return {
    method: methodValue,
    headers: {
      'content-type': contentTypeValue,
    },
    body: JSON.stringify({
      test_event_code: (isTestEvent ? testEventCode : undefined),
      data: [
        {
          event_name: eventName,
          event_time: eventTime,
          event_source_url: (eventSourceUrl ? eventSourceUrl : undefined),
          action_source: actionSource,
          opt_out: (optOut ? optOut : undefined),
          data_processing_options: (lduEnabled ? [lduValue] : []),
          data_processing_options_country: (lduEnabled ? 0 : undefined),
          data_processing_options_state: (lduEnabled ? 0 : undefined),
          user_data: {
            client_ip_address: clientIpAddress,
            client_user_agent: clientUserAgent,
            country: (country ? shaHashingHelper(country) : undefined),
            ct: (city ? shaHashingHelper(city) : undefined),
            db: (dob ? shaHashingHelper(dob) : undefined),
            em: (email ? shaHashingHelper(email) : undefined),
            external_id: (externalId ? shaHashingHelper(externalId) : undefined),
            fb_login_id: (fbLoginId ? fbLoginId : undefined),
            fbc: (fbc ? fbc : undefined),
            fbp: (fbp ? fbp : undefined),
            fn: (firstName ? shaHashingHelper(firstName) : undefined),
            ge: (gender ? shaHashingHelper(gender) : undefined),
            lead_id: (leadId ? leadId : undefined),
            ln: (lastName ? shaHashingHelper(lastName) : undefined),
            ph: (phone ? shaHashingHelper(phone) : undefined),
            st: (state ? shaHashingHelper(state) : undefined),
            subscription_id: (subscriptionId ? subscriptionId : undefined),
            zp: (zip ? shaHashingHelper(zip) : undefined),
          },
          custom_data: (customData ? customData : undefined),
        },
      ],
      partner_agent: agentValue,
    }),
  };
};

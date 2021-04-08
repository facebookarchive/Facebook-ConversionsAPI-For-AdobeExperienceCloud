/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */
'use strict';

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
    ct,
    customData,
    db,
    em,
    eventName,
    eventSourceUrl,
    eventTime,
    externalId,
    fbc,
    fbLoginId,
    fbp,
    fn,
    ge,
    isTestEvent,
    lduEnabled,
    leadId,
    ln,
    optOut,
    ph,
    st,
    subscriptionId,
    testEventCode,
    zp,
  } = getSettings();
  const lduValue = 'LDU';
  const methodValue = 'POST';
  const contentTypeValue = 'application/json';

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
            country: (country ? country : undefined),
            ct: (ct ? ct : undefined),
            db: (db ? db : undefined),
            em: (em ? em : undefined),
            external_id: (externalId ? externalId : undefined),
            fb_login_id: (fbLoginId ? fbLoginId : undefined),
            fbc: (fbc ? fbc : undefined),
            fbp: (fbp ? fbp : undefined),
            fn: (fn ? fn : undefined),
            ge: (ge ? ge : undefined),
            lead_id: (leadId ? leadId : undefined),
            ln: (ln ? ln : undefined),
            ph: (ph ? ph : undefined),
            st: (st ? st : undefined),
            subscription_id: (subscriptionId ? subscriptionId : undefined),
            zp: (zp ? zp : undefined),
          },
          custom_data: (customData ? customData : undefined),
        },
      ],
    }),
  };
};

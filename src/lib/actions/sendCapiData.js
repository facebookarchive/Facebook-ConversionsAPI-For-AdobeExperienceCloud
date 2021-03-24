/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */
"use strict";

module.exports = function ({ utils, arc }) {
  const { getExtensionSettings, getSettings, fetch, logger } = utils;
  const { pixelId, accessToken, lduEnabled } = getExtensionSettings();
  const { isTestEvent, testEventCode } = getSettings();
  const version = "v10.0";
  const url = `https://graph.facebook.com/${version}/${pixelId}/events/?access_token=${accessToken}`;

  const xdmTimestamp = Math.round((new Date(arc.event.xdm.timestamp)).getTime() / 1000);

  // hardcode event for now
  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      test_event_code: (isTestEvent ? testEventCode : undefined),
      data: [
        {
          event_name: "PageView",
          event_time: xdmTimestamp,
          event_source_url:
            "https://impartial-fantastic-albertonykus.glitch.me/",
          action_source: "website",
          user_data: {
            client_ip_address: "2620:10d:c090:400::5:37f2",
            client_user_agent:
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
          },
        },
      ],
    }),
  });
};

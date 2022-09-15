/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 */
import React from 'react';

import ExtensionView from '../components/extensionView';

import SendEventFields from './sendEventsComponents/fields';
import getSendEventInitValues from './sendEventsComponents/getInitValues';
import getSendEventSettings from './sendEventsComponents/getSettings';
import validateSendEventFields from './sendEventsComponents/validate';

export default () => (
  <ExtensionView
    getInitialValues={({ initInfo }) => ({
      ...getSendEventInitValues(initInfo)
    })}
    getSettings={({ values }) => ({
      ...getSendEventSettings(values)
    })}
    validate={(values) => ({
      ...validateSendEventFields(values)
    })}
    render={() => (
      <>
        <SendEventFields />
      </>
    )}
  />
);

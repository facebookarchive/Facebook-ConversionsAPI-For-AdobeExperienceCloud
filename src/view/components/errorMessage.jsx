/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

import React from 'react';
import { IllustratedMessage, Heading, Content } from '@adobe/react-spectrum';
import NotFound from '@spectrum-icons/illustrations/NotFound';

export default ({ message = 'There was an error!' }) => (
  <IllustratedMessage marginTop="size-1000">
    <NotFound />
    <Heading>An error has occured</Heading>
    <Content>{message}</Content>
  </IllustratedMessage>
);

import React from 'react';
import { TextField, Flex } from '@adobe/react-spectrum';
import WrappedTextField from '../../components/wrappedTextField';

export default () => (
  <Flex direction="column" gap="size-65">
    <WrappedTextField
      name="testingString"
      component={TextField}
      width="size-4600"
      label="some thing"
      isRequired
      necessityIndicator="label"
      supportDataElement
    />
  </Flex>
);

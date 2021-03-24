import React from 'react';
import { Checkbox, TextField, Flex } from '@adobe/react-spectrum';
import WrappedTextField from '../../components/wrappedTextField';
import WrappedCheckboxComponent from '../../components/wrappedCheckboxComponent';

export default () => {
  const [selected, setSelection] = React.useState(false);
  return (
    <Flex direction="column" gap="size-65">
      <WrappedCheckboxComponent
        name="isTestEvent"
        component={Checkbox}
        isSelected={selected}
        onChange={setSelection}
      >
        Send as Test Event
      </WrappedCheckboxComponent>
      <WrappedTextField
        name="testEventCode"
        component={TextField}
        width="size-4600"
        label="Test Event Code"
        isRequired
        isDisabled={!selected}
        necessityIndicator="label"
      />
    </Flex>
  );
};

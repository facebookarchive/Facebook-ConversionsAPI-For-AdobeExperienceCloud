/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 *
 * @format
 */
import React, {useState} from 'react';
import {useFormContext} from 'react-hook-form';
import {
  Checkbox,
  Content,
  Flex,
  Link,
  Text,
  TextField,
} from '@adobe/react-spectrum';
import WrappedTextField from '../../components/wrappedTextField';
import WrappedCheckboxComponent from '../../components/wrappedCheckboxComponent';
import Parameters from './getParameters';

export default () => {
  const {watch} = useFormContext();
  const isTestEvent = watch('isTestEvent');
  const lduEnabled = watch('lduEnabled');
  const {customerInformation, serverEvents, customData} = Parameters();

  return (
    <Flex direction="column" gap="size-65">
      <Text>
        {' '}
        Please set up the data to send events via Faceebook Conversions API{' '}
      </Text>
      <Content>
        <Link>
          <a
            href="https://developers.facebook.com/docs/marketing-api/conversions-api/parameters"
            target="_blank">
            Conversions API Parameters Document
          </a>
        </Link>
      </Content>
      <Flex direction="row" gap="size-200">
        <Flex direction="column" gap="size-65">
          <WrappedCheckboxComponent component={Checkbox} name="isTestEvent">
            Send as Test Event
          </WrappedCheckboxComponent>
          <WrappedTextField
            name="testEventCode"
            component={TextField}
            width="size-4600"
            label="Test Event Code"
            isRequired
            isDisabled={!isTestEvent}
            necessityIndicator="label"
          />
          <Text> Set up Server Event </Text>
          {serverEvents.map(([name, label, isRequired], index) => {
            return (
              <WrappedTextField
                key={index}
                name={name}
                component={TextField}
                width="size-4600"
                label={label}
                isRequired={isRequired}
                necessityIndicator="label"
                supportDataElement
              />
            );
          })}
          <WrappedCheckboxComponent component={Checkbox} name="lduEnabled">
            Enable Limited Data Use
          </WrappedCheckboxComponent>
          <Content>
            <Link>
              <a
                href="https://developers.facebook.com/docs/marketing-apis/data-processing-options/"
                target="_blank">
                Learn more about Data processing Options for users
              </a>
            </Link>
          </Content>
        </Flex>
        <Flex direction="column" gap="size-65">
          <Text> Set up Custom Data </Text>
          {customData.map(([name, label, isRequired], index) => {
            return (
              <WrappedTextField
                key={index}
                name={name}
                component={TextField}
                width="size-4600"
                label={label}
                isRequired={isRequired}
                necessityIndicator="label"
                supportDataElement
              />
            );
          })}
        </Flex>
        <Flex direction="column" gap="size-65">
          <Text> Set up Customer Information </Text>
          {customerInformation.map(([name, label, isRequired], index) => {
            return (
              <WrappedTextField
                key={index}
                name={name}
                component={TextField}
                width="size-4600"
                label={label}
                isRequired={isRequired}
                necessityIndicator="label"
                supportDataElement
              />
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 *
 * @format
 */
import React from 'react';
import {useFormContext} from 'react-hook-form';
import {
  Checkbox,
  Content,
  Dialog,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
  TextField,
  TextArea,
} from '@adobe/react-spectrum';
import WrappedTextField from '../../components/wrappedTextField';
import WrappedCheckboxComponent from '../../components/wrappedCheckboxComponent';
import Parameters from './getParameters';

export default () => {
  const {watch} = useFormContext();
  const isTestEvent = watch('isTestEvent');
  const {customerInformation, serverEvents} = Parameters();
  const parametersURI =
    'https://developers.facebook.com/docs/marketing-api/conversions-api/parameters';
  const dpoURI =
    'https://developers.facebook.com/docs/marketing-apis/data-processing-options/';

  return (
    <Dialog>
      <Flex direction="row" gap="size-200">
        <Flex direction="column" gap="size-65">
          <Heading> Facebook Event Setup </Heading>
          <Divider size="S" />
          <Content>
            <Text>
              {' '}
              Please set up the data to send events via Facebook Conversions API{' '}
            </Text>
            <Content>
              <Link>
                <a href={parametersURI} target="_blank" rel="noreferrer">
                  Facebook Conversions API Parameters
                </a>
              </Link>
            </Content>
          </Content>

          <Heading marginTop="1em"> Server Event Parameters</Heading>
          <Divider size="S" />
          <Content>
            {serverEvents.map(([name, label], index) => {
              return (
                <WrappedTextField
                  key={index}
                  name={name}
                  component={TextField}
                  width="size-4600"
                  label={label}
                  supportDataElement
                />
              );
            })}
            <WrappedCheckboxComponent component={Checkbox} name="lduEnabled">
              <Text>Enable Limited Data Use</Text>
            </WrappedCheckboxComponent>
            <Content>
              <Text>
                Learn more about{' '}
                <Link>
                  <a href={dpoURI} target="_blank" rel="noreferrer">
                    Limited Data Use and Data Processing Options
                  </a>
                </Link>
              </Text>
            </Content>
          </Content>

          <Heading marginTop="1em"> Customer Information Parameters </Heading>
          <Divider size="S" />
          <Content>
            {customerInformation.map(([name, label], index) => {
              return (
                <WrappedTextField
                  key={index}
                  name={name}
                  component={TextField}
                  width="size-4600"
                  label={label}
                  supportDataElement
                />
              );
            })}
          </Content>

          <Heading marginTop="1em"> Custom Data </Heading>
          <Divider size="S" />
          <Content>
            <WrappedTextField
              name="customData"
              component={TextArea}
              width="size-4600"
              label="Custom Data"
              placeholder='{"currency": "usd", "value": 123.45}'
              supportDataElement
            />
          </Content>

          <Heading marginTop="1em"> Test Event </Heading>
          <Divider size="S" />
          <Content>
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
          </Content>
        </Flex>
      </Flex>
    </Dialog>
  );
};

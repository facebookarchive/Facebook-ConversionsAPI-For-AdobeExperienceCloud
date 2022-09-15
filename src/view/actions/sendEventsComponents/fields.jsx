/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 *
 * @format
 */
import React from 'react';
import {useFormContext} from 'react-hook-form';
import {
  Checkbox,
  Content,
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
  const serverEventsURI =
    'https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event';
  const customerInformationURI =
    'https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters';
  const customDataURI =
    'https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/custom-data';

  const facebookEventSetupText = `Use the data mapping below to configure a Facebook event using
    your data from Adobe Edge. These events will be sent to your Pixel via Facebook Conversions
    API. For more information about these parameters, go to `;
  const serverEventsParametersText =
    'Send actions that occur as a Facebook Standard or Custom Event. For more detail, see the ';
  const customerInformationText = `These parameters are a set of identifiers Facebook can use
    for targeted attribution. You must provide at least one of the following keys in your
    request. For more detail, see the `;
  const customDataText = `Use these parameters to send additional data we can use for ads
    delivery optimization. For Purchase events, value and currency are required. If data elements
    are being utilized, please validate that they are being replaced correcly. For more
    detail, see the `;
  const testEventText = `You can verify that your server events are received correctly by
    Facebook by using the Test Events tool in Events Manager to generate a test ID. Set the
    test ID here to start seeing event activity appear in the Test Events window.`;

  return (
    <Flex direction="row" gap="size-200">
      <Flex direction="column" gap="size-65">
        <Heading> Facebook Event Setup </Heading>
        <Divider size="S" />
        <Content>
          <Text>{facebookEventSetupText}</Text>
          <Link>
            <a href={parametersURI} target="_blank" rel="noreferrer">
              Facebook for Developers.
            </a>
          </Link>
        </Content>

        <Heading marginTop="1em"> Server Event Parameters</Heading>
        <Divider size="S" />
        <Content>
          <Content marginBottom="1em">
            <Text>{serverEventsParametersText}</Text>
            <Link>
              <a href={serverEventsURI} target="_blank" rel="noreferrer">
                documentation.
              </a>
            </Link>
          </Content>
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
          <Content marginBottom="1em">
            <Text>{customerInformationText}</Text>
            <Link>
              <a href={customerInformationURI} target="_blank" rel="noreferrer">
                documentation.
              </a>
            </Link>
          </Content>
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
          <Content marginBottom="1em">
            <Text>{customDataText}</Text>
            <Link marginBottom="1em">
              <a href={customDataURI} target="_blank" rel="noreferrer">
                documentation.
              </a>
            </Link>
          </Content>
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
          <Content marginBottom="1em">
            <Text>{testEventText}</Text>
          </Content>
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
  );
};

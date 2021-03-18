/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */
import React, {useState} from "react";
import {
  Checkbox,
  Content,
  Flex,
  Link,
  Radio,
  RadioGroup,
  TextField
} from "@adobe/react-spectrum";
import {Controller,useFormContext } from "react-hook-form";
import WrappedTextField from "../../components/wrappedTextField";
import WrappedCheckboxComponent from '../../components/WrappedCheckboxComponent';

export default () => {
  const {watch, getValues} = useFormContext();
  const lduEnabled = watch("lduEnabled");

  return (
    <Flex direction="column" gap="size-65">
      <WrappedTextField
        name="pixelId"
        component={TextField}
        width="size-4600"
        label="Pixel ID"
        isRequired
        necessityIndicator="label"
        supportDataElement
      />

      <WrappedTextField
        name="accessToken"
        component={TextField}
        width="size-4600"
        label="Access Token"
        isRequired
        necessityIndicator="label"
        supportDataElement
      />
      <Content width="size-4600">
       A Facebook System User access token is required to send events via Conversions API.{' '}
        <Link>
          <a href="https://developers.facebook.com/docs/marketing-api/conversions-api/get-started#via-events-manager" target="_blank">
            How to generate a System User access token via Events Manager
          </a>
        </Link>
      </Content>
      <WrappedCheckboxComponent
        component={Checkbox}
        name="lduEnabled"
      >
        Enable Limited Data Use
      </WrappedCheckboxComponent>
      <Content>
        <Link>
          <a href="https://developers.facebook.com/docs/marketing-apis/data-processing-options/" target="_blank">
            Learn more about Data processing Options for users
          </a>
        </Link>
      </Content>
    </Flex>
  )
};

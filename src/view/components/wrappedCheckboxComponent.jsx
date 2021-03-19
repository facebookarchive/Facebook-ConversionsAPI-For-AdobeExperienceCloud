/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { ActionButton } from '@adobe/react-spectrum';
import Data from '@spectrum-icons/workflow/Data';
import ValidationWrapper from './validationWrapper';

export default ({
  name: componentName,
  component: Component,
  onChange: componentOnChange,
  onBlur: componentOnBlur,
  supportDataElement,
  defaultValue = '',
  ...rest
}) => {
  return (
    <Controller
      name={componentName}
      defaultValue={defaultValue}
      render={({ onChange, value, name, ref }) => (
        <Component
          name={name}
          onChange={(e) =>{
            onChange(e);
            if (componentOnChange){
              componentOnChange(e)
            }
          }}
          isSelected={value}
          inputRef={ref}
          {...rest}
        />
      )}
      {...rest}
    />
  );
};

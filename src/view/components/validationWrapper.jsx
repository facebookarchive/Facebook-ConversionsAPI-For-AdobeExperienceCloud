/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Text, Flex } from '@adobe/react-spectrum';

const showError = (obj, path) => {
  if (obj[path]) {
    return obj[path];
  }

  if (!path) {
    return '';
  }

  const parts = path.split('[').map((k) => k.replace(']', ''));

  for (let i = 0; i < parts.length; i += 1) {
    const part = parts[i];
    if (obj[part]) {
      obj = obj[part];
    } else {
      return obj[part];
    }
  }

  return obj;
};

export default ({ children }) => {
  const [firstChild, ...restChildren] = children;
  const fieldName = firstChild.props.name;
  const fieldOnChange = firstChild.props.onChange;
  const { errors, trigger } = useFormContext();

  return (
    <Flex direction="row">
      <Flex direction="column">
        {React.cloneElement(children[0], {
          validationState: showError(errors, fieldName) ? 'invalid' : '',
          onChange: (e) => {
            fieldOnChange(e);
            trigger(fieldName);
          }
        })}

        <div className="error">
          {showError(errors, fieldName) ? (
            <Text>{showError(errors, fieldName).message}</Text>
          ) : (
            <Text>&nbsp;</Text>
          )}
        </div>
      </Flex>
      {restChildren}
    </Flex>
  );
};

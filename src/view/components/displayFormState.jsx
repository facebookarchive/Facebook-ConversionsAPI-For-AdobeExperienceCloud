/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

/* istanbul ignore file */

import React from 'react';
import { useFormContext } from 'react-hook-form';

export default () => {
  const { formState } = useFormContext();
  return (
    <div style={{ margin: '1rem 0' }}>
      <pre
        style={{
          background: '#f6f8fa',
          fontSize: '.65rem',
          padding: '.5rem'
        }}
      >
        <strong>formState = </strong>
        {JSON.stringify(formState, null, 2)}
      </pre>
    </div>
  );
};

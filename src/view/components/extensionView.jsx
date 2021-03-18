/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */

import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import PropTypes from 'prop-types';
import ErrorBoundary from './errorBoundary';
// import DisplayFormState from './displayFormState';

const ExtensionView = ({ getInitialValues, getSettings, validate, render }) => {
  const methods = useForm({
    resolver: (values) => ({ values, errors: validate(values) })
  });

  useEffect(() => {
    let initInfo;

    window.extensionBridge.register({
      init: (_initInfo) => {
        initInfo = _initInfo;

        const initialValues = getInitialValues({ initInfo: _initInfo });

        Object.keys(initialValues || {}).forEach((k) => {
          methods.setValue(k, initialValues[k], {
            shouldValidate: false,
            shouldDirty: false
          });
        });

        methods.clearErrors();
      },

      getSettings: () =>
        getSettings({
          values: methods.getValues(),
          initInfo
        }),

      validate: () => methods.trigger()
    });
  }, []);

  return (
    <ErrorBoundary>
      <FormProvider
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...methods}
      >
        <form>{render()}</form>
        {/* <DisplayFormState /> */}
      </FormProvider>
    </ErrorBoundary>
  );
};

ExtensionView.propTypes = {
  getInitialValues: PropTypes.func.isRequired,
  getSettings: PropTypes.func.isRequired,
  validate: PropTypes.func,
  validationSchema: PropTypes.object,
  render: PropTypes.func.isRequired
};

export default ExtensionView;

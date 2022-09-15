/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 */

import React, { Component } from 'react';
import ErrorMessage from './errorMessage';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidCatch(/*error, info*/) {
    // You can also log the error to an error reporting service
    // console.error(error, info);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      // You can render any custom fallback UI
      return <ErrorMessage message={error.message} />;
    }

    return children;
  }
}

/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */
export default (initInfo) => {
  const { settings } = initInfo;
  const { pixelId = '',accessToken = '', lduEnabled = false } = settings || {};
  return {
    accessToken,
    lduEnabled,
    pixelId
  };
};

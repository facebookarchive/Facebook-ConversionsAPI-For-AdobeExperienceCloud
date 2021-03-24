export default (initInfo) => {
  const { settings } = initInfo;
  const { isTestEvent = false, testEventCode = '' } = settings || {};

  return {
    isTestEvent,
    testEventCode
  };
};

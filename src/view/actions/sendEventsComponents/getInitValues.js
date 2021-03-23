export default (initInfo) => {
  const { settings } = initInfo;
  const { testingString = '' } = settings || {};

  return {
    testingString
  };
};

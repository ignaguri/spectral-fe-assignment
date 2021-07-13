export const findNestedObj = (entireObj, keyToFind, valToFind) => {
  // avoid using `!valToFind` as it would fail for id = 0
  if (!keyToFind || valToFind === null || valToFind === undefined) {
    return null;
  }

  let foundObj;
  JSON.stringify(entireObj, (_, nestedValue) => {
    if (nestedValue && nestedValue[keyToFind] === valToFind) {
      foundObj = nestedValue;
    }
    return nestedValue;
  });

  return foundObj;
};

export const deepFlatten = (arr) =>
  [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v)));

export const extractMeasurements = (asset, measurements) => {
  const isLeaf = asset.children.length === 0;

  if (isLeaf) {
    const assetMeasurements = measurements.find(
      (measurement) => measurement.assetId === asset.id
    );

    return [assetMeasurements.measurements];
  }

  const childrenMeasurements = asset.children.map((child) => {
    return extractMeasurements(child, measurements);
  });

  return deepFlatten(childrenMeasurements);
};

const KEY = 'alias';

export const getUniqZones = (zoneArray) => {
  const arraySet = new Set();

  zoneArray.map((item) => arraySet.add(item[KEY]));

  return Array.from(arraySet);
};

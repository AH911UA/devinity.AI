const calculateTotalTime = (data) => {
  const totalTimeForEachArray = {};

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const array = data[key];
      const totalArrayTime = array.reduce((acc, service) => acc + service.time, 0);
      totalTimeForEachArray[key] = totalArrayTime;
    }
  }

  return Object.values(totalTimeForEachArray).reduce((acc, time) => acc + time, 0);
}

export default calculateTotalTime;

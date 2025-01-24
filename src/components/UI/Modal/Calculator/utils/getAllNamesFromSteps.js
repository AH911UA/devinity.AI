const getAllNamesFromSteps = (data) => {
  const allNamesString = [];

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const array = data[key];
      const arrayTimes = array.map(service => `${service.name} - ${service.time} day(s)`);
      allNamesString.push(arrayTimes);
    }
  }

  return allNamesString.join('\n');
}

export default getAllNamesFromSteps;

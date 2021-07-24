function findKayakAmount(n, d) {
  const kayaks = [];

  const filteredWeight = n.filter((item, index) => {
    if (item > d) {
      console.log(`Human ${index + 1}, sorry, you can't go camping, your weight is more than ${d}.`);
      return false;
    }
    return item;
  });
  filteredWeight.sort((a, b) => b - a);

  const weight = filteredWeight.reduce((acc, item) => acc + item, 0);
  if (weight <= d && filteredWeight.length <= 2) {
    return 1;
  }

  for (let i = 0; i < filteredWeight.length; i += 1) {
    const humanWeightI = filteredWeight[i];
    let peopleCounter = 0;
    const oneKayak = [];
    if (humanWeightI) {
      oneKayak.push(humanWeightI);
      peopleCounter += 1;
      delete filteredWeight[i];
      for (let j = 0; j < filteredWeight.length; j += 1) {
        const humanWeightJ = filteredWeight[j];
        if (humanWeightJ && j !== i) {
          const isPermissibleWeight = humanWeightI + humanWeightJ <= d;
          if (peopleCounter >= 2) {
            break;
          }
          if (isPermissibleWeight) {
            oneKayak.push(humanWeightJ);
            peopleCounter += 1;
            delete filteredWeight[j];
          }
        }
      }
      kayaks.push(oneKayak);
    }
  }
  console.log('kayaks', kayaks);
  return kayaks.length;
}

console.log('kayakAmount:', findKayakAmount([50, 120, 74, 60, 100, 82], 135));

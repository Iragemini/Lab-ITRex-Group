function generateVolumes(pages, k) {
  const len = pages.length;
  if (k > len || k <= 0) {
    throw new Error('Incorrect input data.');
  }
  let amountOfPages = pages.reduce((acc, item) => acc + item);
  let maxPages = Math.max(...pages) - 1;

  if (k === 1) return amountOfPages;

  while (maxPages + 1 < amountOfPages) {
    const mid = Math.floor((maxPages + amountOfPages) / 2);
    let curVolumes = 0;
    let lastVolumes = 0;
    for (let i = 0; i < pages.length; i += 1) {
      if (lastVolumes + pages[i] <= mid) {
        lastVolumes += pages[i];
      } else {
        curVolumes += 1;
        lastVolumes = pages[i];
        if (pages[i] > mid) {
          curVolumes = k + 1;
          break;
        }
      }
    }
    curVolumes += 1;
    if (curVolumes <= k) {
      amountOfPages = mid;
    } else {
      maxPages = mid;
    }
  }
  return amountOfPages;
}

function init(pages, k) {
  try {
    console.log('generateVolumes', generateVolumes(pages, k));
  } catch (e) {
    console.log(e);
  }
}

init([1, 2, 1], 2);
init([1, 2, 1, 1], 3);

//your code here
const sortedBandNames = bandNames.sort((a, b) => {
  const nameA = a.replace(articleRegex, '');
  const nameB = b.replace(articleRegex, '');
  return nameA.localeCompare(nameB);
});

sortedBandNames.forEach(bandName => {
  const li = document.createElement('li');
  li.textContent = bandName;
  bandList.appendChild(li);
});
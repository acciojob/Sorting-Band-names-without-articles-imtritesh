//your code here


sortedBandNames.forEach(bandName => {
  const li = document.createElement('li');
  li.textContent = bandName;
  bandList.appendChild(li);
});
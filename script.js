//your code here

sortedBands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        bandsList.appendChild(li);
      });
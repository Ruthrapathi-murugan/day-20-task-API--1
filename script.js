// Function to fetch data from API and display centres
function displayCentres() {
  fetch('https://isro.vercel.app/api/centres')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(ruthra => {
      const centresList = document.getElementById('centres-list');
      ruthra.centres.forEach(centre => {
        const centreCard = document.createElement('div');
        centreCard.classList.add('col-md-6', 'centre-card');
        centreCard.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${centre.name}</h5>
              <p class="card-text">Place: ${centre.Place}</p>
              <p class="card-text">State: ${centre.State}</p>
            </div>
          </div>
        `;
        centresList.appendChild(centreCard);
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      const centresList = document.getElementById('centres-list');
      centresList.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    });
}

// Call the function to display centres when the page loads
window.onload = displayCentres;

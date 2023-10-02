const url = 'http://localhost:6611/business'
const bodycard = document.querySelector('#card')

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json() // Parse the response as JSON
  })
  .then((data) => {
    const dataarr = data
    dataarr.forEach((element) => {
      console.log(element)
      // Create a card element
      const cardElement = document.createElement('div')
      cardElement.classList.add('card-details')
      cardElement.innerHTML = `
        <div class="card">
           <img src="${element.image}" alt="image">
          <div class="card-content">
            <h3>${element.name}</h3>
            <a href="details.html?id=${element.id}" class="read-more">Read More</a>
          </div>
        </div>
      `

      // Append the card to the card container
      bodycard.appendChild(cardElement)
    })
  })
  .catch((error) => console.error('Error:', error))

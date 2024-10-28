document.getElementById('btn').addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => {
          return response.json();
      })
      .then(data => {
          const img = document.createElement('img');
          img.src = data.message; // La URL de la imagen
          document.getElementById('fotoPerro').innerHTML = ''; // Limpiar el div
          document.getElementById('fotoPerro').appendChild(img);
      })
      .catch(error => {
          console.error('Error', error);
      });
});
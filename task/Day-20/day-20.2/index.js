const generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', fetchRandomMeme);
    
    async function fetchRandomMeme() {
      try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        const memes = data.data.memes;
        
        const randomIndex = Math.floor(Math.random() * memes.length);
        const randomMeme = memes[randomIndex];
        
        displayMeme(randomMeme);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    function displayMeme(meme) {
      const memeDiv = document.getElementById('meme');
      memeDiv.innerHTML = `
        <h2>${meme.name}</h2>
        <img src="${meme.url}" alt="${meme.name}">
      `;
    }
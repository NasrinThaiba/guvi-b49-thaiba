async function fetchLibraryInfo() {
  try {
    const response = await fetch('https://api.cdnjs.com/libraries/jquery');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function displayLibraryInfo() {
  const libraryDiv = document.getElementById('library');
  const data = await fetchLibraryInfo();
  
  if (data) {
    libraryDiv.innerHTML = `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Latest Version:</strong> ${data.version}</p>
      <p><strong>Description:</strong> ${data.description}</p>
      <p><strong>Homepage:</strong> <a href="${data.homepage}" target="_blank">${data.homepage}</a></p>
    `;
  }
}

displayLibraryInfo();
async function fetchKural() {
  try {
    const response = await fetch('https://api-thirukkural.vercel.app/api?num=1');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function displayKural() {
  const kuralDiv = document.getElementById('kural');
  const data = await fetchKural();
  
  if (data) {
    kuralDiv.innerHTML = `
      <p><strong>Number:</strong> ${data.number}</p>
      <p><strong>Line 1:</strong> ${data.line1}</p>
      <p><strong>Line 2:</strong> ${data.line2}</p>
      <p><strong>Explanation:</strong> ${data.explanation}</p>
    `;
  }
}

displayKural();
function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function renderImage(imageData) {
  document.getElementById('image-wrap').href = imageData.url;
  document.getElementById('image').src = imageData.fixed_height_small_url;
}

async function getBoobsUrl() {
  let url = 'https://api.giphy.com/v1/gifs/random?api_key=a89c66e48519481ab448a3f8356e635c&tag=boobs';
  let result = await fetch(url);
  let jsonResult = await result.json();
  return jsonResult.data;
}

document.addEventListener('DOMContentLoaded', async () => {
  renderStatus('Đang tìm vếu ...');
  var imageData = await getBoobsUrl();
  renderStatus('');
  renderImage(imageData);
});

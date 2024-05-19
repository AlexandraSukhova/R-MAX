import '../pages/index.css'

const buttonDownload = document.querySelector('.button-download');

const fileDownload = {
  link: "./catalog/R-Max_2024.pdf",
  name: "R-MAX_2024.pdf"
}

function triggerDownload(file) {
  const link = document.createElement('a');
  link.hidden = true;
  link.download = file.name;
  link.href = (file.link);
  document.body.append(link);
  //link.click();
  //link.remove();
}

buttonDownload.addEventListener('click', () => triggerDownload(fileDownload));

document.addEventListener('touchstart', function(event) {
  if(event.target.matches('.button-download')) {
      event.target.classList.add('button-touched');
  }
});

document.addEventListener('touchend', function(event) {
  if(event.target.matches('.button-download')) {
      event.target.classList.remove('button-touched');
  }
});
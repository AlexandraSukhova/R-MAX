import '../pages/index.css'
import catalog from '../catalog/R-Max_2024.pdf'


const buttonDownload = document.querySelector('.button-download');

const fileDownload = {
  link: catalog,
  name: "R-MAX_2024.pdf"
}

function triggerDownload(file) {
  const link = document.createElement('a');
  link.hidden = true;
  link.download = file.name;
  link.href = (file.link);
  document.body.append(link);
  link.click();
  link.remove();
}

buttonDownload.addEventListener('click', () => triggerDownload(fileDownload));

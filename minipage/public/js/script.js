const NowDate = () => {
  let date = new Date();
  let target = document.getElementById('jsbox');
  target.innerHTML = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};

window.onload = () => {
  NowDate();
};
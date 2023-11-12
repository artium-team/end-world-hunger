

setInterval(function () {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const secondsPassed = (now - startOfYear) / 1000;
  document.getElementById("number").innerHTML = String(Math.trunc(secondsPassed * 41.22272957889396).toString()).replace(/(.)(?=(\d{3})+$)/g,'$1,')
}, 35);

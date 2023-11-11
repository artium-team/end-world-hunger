

setInterval(function () {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const secondsPassed = (now - startOfYear) / 1000;
  // console.log(Math.trunc(secondsPassed * 0.2853881278538813));
  document.getElementById("number").innerHTML = String(Math.trunc(secondsPassed * 0.2851988815).toString()).replace(/(.)(?=(\d{3})+$)/g,'$1,')
}, 100);

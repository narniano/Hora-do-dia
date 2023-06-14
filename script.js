function carregar() {
  var msg = document.querySelector("#msg");
  var img = document.querySelector("#img");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    img.src = "morning.png";
    document.body.style.background = "#ad8375";
  } else if (hora >= 12 && hora < 18) {
    img.src = "afternoon.png";
    document.body.style.background = "#248108c0";
  } else {
    img.src = "night.png";
    document.body.style.background = "#002d4f";
  }
}

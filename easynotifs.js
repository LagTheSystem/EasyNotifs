export function createNotif(title, content, bg, accent) {
  var sent = 0;
  
  const notif = document.createElement("div");
  notif.classList.add("notif");

  notif.style.backgroundColor = bg;
  notif.style.borderBottom = accent + " 2px solid";
  
  const notifTitle = document.createElement("h4");
  notifTitle.innerHTML = title;
  
  const notifContent = document.createElement("p");
  notifContent.innerHTML = content;
  
  var top = -105;
  var opacity = 0.01;
  notif.appendChild(notifTitle);
  notif.appendChild(notifContent);
  document.body.appendChild(notif);
  
  setInterval(() => {
    if (opacity <= 0) {
      notif.remove();
    }
    if (top < 10) {
      top += 2;
      notif.style.top = top + "px";
    }
    if (top > -20 && opacity < 1 && sent == 0) {
      opacity += 0.015;
      notif.style.opacity = opacity;
    }
    if (opacity >= 1) {
      setTimeout(() => {
        sent = 1;
        opacity -= 0.01;
        notif.style.opacity = opacity;
      }, 4000);
    }
  }, 4)
}

export function injectCSS() {
  document.head.innerHTML += "<style>.notif{position:absolute;top:-105px;left:50%;transform:translate(-50%,0);min-width:200px;min-height:50px;box-shadow:3px 3px 10px 0 rgba(0,0,0,.25);border-radius:15px;font-family:Avenir,system-ui;border-bottom:3px solid #99ffa1;display:flex;flex-direction:column;padding:18px;opacity:.01}.notif h4{margin:0}.notif p{margin:8px 0 0}</style>";
}

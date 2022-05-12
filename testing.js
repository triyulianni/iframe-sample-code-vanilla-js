const BelivePlayerWidget = window.BeLivePlayerWidget;

const player = BelivePlayerWidget.initialize({
  showId: "a0832a15-b962-401e-9f95-5ea635d6373a",
  triggerElement: document.getElementById("watch-button")
});

player.on(BelivePlayerWidget.PlayerEventType.READY, () => {
    console.log("Player Widget READY");
 });

 player.on(BelivePlayerWidget.PlayerEventType.MINIMIZED, () => {
    console.log("Player Widget MINIMIZED");
 });

 player.on(BelivePlayerWidget.PlayerEventType.UNMINIMIZED, () => {
    console.log("Player Widget UNMINIMIZED");
 });

 player.on(BelivePlayerWidget.PlayerEventType.CLOSE, () => {
    console.log("Player Widget CLOSE");
 });

 document.getElementById("btn-close").addEventListener("click", () => {
    player.close();
 });

 document.getElementById("btn-minimize").addEventListener("click", () => {
    player.minimize();
 });

 document.getElementById("btn-unminimize").addEventListener("click", () => {
    player.unminimize();
 });
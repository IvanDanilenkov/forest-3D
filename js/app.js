document.addEventListener('mousemove', evt => {
  Object.assign(document.documentElement, {
    style: `
      --move-x: ${(evt.clientX - window.innerWidth / 2) * -0.005}deg;
      --move-y: ${(evt.clientY - window.innerWidth / 2) * -0.005}deg;
    `
  });
})
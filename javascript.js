/* 
Right-click on any web page and select "Inspect" or press Ctrl+Shift+I (Windows) or Cmd+Opt+I (Mac). 
copy this into your browser console */

(function() {
    const pauseVideo = () => {
      const video = document.querySelector("video");
      if (video && !video.paused) {
        video.pause();
      }
    };
  
    const playVideo = () => {
      const video = document.querySelector("video");
      if (video && video.paused) {
        video.play();
      }
    };
  
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        pauseVideo();
      } else {
        playVideo();
      }
    });
  
    window.addEventListener('blur', pauseVideo);
    window.addEventListener('focus', playVideo);
  })();
  
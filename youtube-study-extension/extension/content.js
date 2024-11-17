const filterVideos = () => {
    const keywords = JSON.parse(localStorage.getItem("topics")) || [];
    const videos = document.querySelectorAll("ytd-video-renderer");
  
    videos.forEach((video) => {
      const title = video.querySelector("#video-title").innerText;
      if (!keywords.some((keyword) => title.includes(keyword))) {
        video.style.display = "none";
      }
    });
  };
  
  setInterval(filterVideos, 2000);
  
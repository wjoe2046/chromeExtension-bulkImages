chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "get_images") {
    let imgArr = [];

    let images = $("img").map((item, img) => {
      if ($(img).data("src")) {
        imgArr.push({
          src: $(img).data("src")
        });
      } else if ($(img).src) {
        imgArr.push({
          src: $(img).src
        });
      }
    });

    sendResponse(imgArr);
  }
});

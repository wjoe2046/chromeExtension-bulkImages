chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "get_images") {
    //wait for the tab api request from popup.js, if received then begin to select images on the current page
    let formattedImages = [];
    let images = $("img").map((i, img) => {
      if ($(img).data("src")) return { src: $(img).data("src") };
      else if ($(img).src) return { src: $(img).src };
    });
    sendResponse(images);
  }
});

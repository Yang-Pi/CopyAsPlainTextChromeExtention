console.log('Background page!');

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    chrome.tabs.executeScript(tabId, { file: './foreground.js' }, () => {
        console.log('The foreground script has been injected.');
    });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('COPY WORKED');  
  if (request.message === "copy") {
      navigator.clipboard
        .writeText(request.text + '!!!!!!!!')
        .then(() => {
          console.log('success');
            // Успех!
        })
        .catch((e) => {
          console.log(e);
            // Неудача :(
        });
   }
});

document.addEventListener("copy", () => {
    console.log('Copy detected');
    navigator.clipboard.readText()
      .then(res => {
        chrome.runtime.sendMessage({message: "copy", text: res});
      })
    .catch(err => console.log(err));
   });

document.addEventListener('copy', () => {
    chrome.runtime?.sendMessage({
        command: 'copy', 
        textContent: window.getSelection()?.toString()
    });
});

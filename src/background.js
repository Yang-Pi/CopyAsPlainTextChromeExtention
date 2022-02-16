chrome.tabs.onUpdated.addListener((tabId) => {
    chrome.scripting.executeScript({
            target: {tabId: tabId, allFrames: true},
            files: ['./src/oncopy.js'],
        }, 
        () => chrome.runtime.lastError
    );
});

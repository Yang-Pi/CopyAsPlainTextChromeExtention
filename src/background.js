chrome.tabs.onUpdated.addListener((tabId) => {
    chrome.tabs.executeScript(tabId, { file: './src/oncopy.js' }, () => chrome.runtime.lastError);    
});

chrome.runtime.onMessage.addListener((request) => {
    if (request.command === 'copy') {
        const plainText = request.textContent?.trim();
        writeCopiedPlainTextToKeyboardBuffer(plainText);
    }
});

const writeCopiedPlainTextToKeyboardBuffer = plainText => {
    const textArea = createTextAreaElementWithFocus(plainText);

    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Keyboard buffer: Oops, unable to write plain text', err);
    }

    document.body.removeChild(textArea);
};

const createTextAreaElementWithFocus = text => {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    return textArea;
}

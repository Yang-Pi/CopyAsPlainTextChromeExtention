chrome.tabs.onUpdated.addListener((tabId) => {
    try {
        chrome.tabs.executeScript(tabId, { file: './src/oncopy.js' });    
    } catch(err) {}
});

chrome.runtime.onMessage.addListener((request) => {
    if (request.command === 'copy') {
        const plainText = request.textContent?.replace(/(\r\n|\n|\r)/gm, '');
        writeCopiedPlainTextToKeyBoardBuffer(plainText);
     }
});

const writeCopiedPlainTextToKeyBoardBuffer = plainText => {
    const textArea = createTextAreaElementWithFocus(plainText);

    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('KeyBoard buffer: Oops, unable to write plain text', err);
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

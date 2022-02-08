document.addEventListener('copy', () => {
    const textArea = document.createElement('textarea');
    textArea.value = window.getSelection()?.toString()?.trim();

    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('cut');
    } catch (err) {
        console.error('Keyboard buffer: Oops, unable to write plain text', err);
    }

    document.body.removeChild(textArea);
});

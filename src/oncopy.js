document.addEventListener('copy', async (e) => {
    e.preventDefault();
    try {
        let plainText = '';

        var range = window.getSelection().getRangeAt(0);
        var fragment = range.cloneContents();

        for (let i = 0; i < fragment.children.length; i++) {

          const textContent = fragment.children[i].textContent.trim();
          if (textContent !== '') {
            plainText
              += (plainText === '' ? '' : '\n')
                + textContent;
            continue;
          }

          const imageContent = fragment.querySelector('img');
          if (imageContent) {
            plainText
              += (plainText === '' ? '' : '\n')
                + imageContent.currentSrc
                + '\n';
          }
        }

        if (plainText) {
            await navigator.clipboard.writeText(plainText);
        }

    } catch (err) {
      console.error(err.name, err.message);
    }
  });
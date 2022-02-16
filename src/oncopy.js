document.addEventListener('copy', async (e) => {
    e.preventDefault();
    try {
        const plaintText = window.getSelection()?.toString()?.trim();
        if (plaintText) {
            await navigator.clipboard.writeText(plaintText);
        }
    } catch (err) {
      console.error(err.name, err.message);
    }
  });
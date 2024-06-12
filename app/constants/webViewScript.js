export const webViewScript = `
    document.addEventListener('click', function(event) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        tagName: event.target.tagName,
        id: event.target.id,
        class: event.target.className,
        x: event.clientX,
        y: event.clientY
      }));
    });
  `;

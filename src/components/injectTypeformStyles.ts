export const injectTypeformStyles = (iframe: HTMLIFrameElement) => {
  const style = document.createElement("style");
  style.textContent = `
    .tf-v1-screen button {
      max-width: 200px !important; /* Adjust this value as needed */
      width: auto !important;
    }
  `;
  const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
  if (iframeDoc) {
    iframeDoc.head.appendChild(style);
  }
};

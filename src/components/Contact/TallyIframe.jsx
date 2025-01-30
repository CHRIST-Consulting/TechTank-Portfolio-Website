import React, { useEffect } from 'react';

const TallyIframe = () => {
  useEffect(() => {
    const loadTallyEmbed = () => {
      const d = document;
      const w = "https://tally.so/widgets/embed.js";

      const loadEmbed = () => {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((iframe) => {
          iframe.src = iframe.dataset.tallySrc;
        });
      };

      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
      } else if (!d.querySelector(`script[src="${w}"]`)) {
        const script = d.createElement("script");
        script.src = w;
        script.onload = loadEmbed;
        script.onerror = loadEmbed;
        d.body.appendChild(script);
      }
    };

    loadTallyEmbed();
  }, []);

  return (
    <div className="bg-white w-full py-4 px-2">
      <iframe
        data-tally-src="https://tally.so/embed/w49xrk?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="576"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Contact form"
        className="w-full px-4 py-2 rounded-lg"
      ></iframe>
    </div>
  );
};

export default TallyIframe;

// Portfolio-safe media prepared from the owner's curated project archive.
// Every source image and video has a web-optimized display copy in /assets.
// Originals remain in the offline archive and are not modified by this site.
(function () {
  const images = (folder, count) => Array.from(
    { length: count },
    (_, index) => `assets/projects/${folder}-${String(index + 1).padStart(2, '0')}.jpg`
  );
  const videos = (folder, count) => Array.from(
    { length: count },
    (_, index) => `assets/videos/full/${folder}-${String(index + 1).padStart(2, '0')}.mp4`
  );

  const barc = images('barc-power-supply-filter-and-gamma', 6);
  const ozone = images('ozone-generator-and-igbt-development', 10);

  window.PORTFOLIO_MEDIA = {
    'navy-target-ship': { images: images('indian-navy-target-ship', 24), videos: videos('indian-navy-target-ship', 6), videoNote: 'Complete project evidence archive: 24 photos and 6 full-length field videos.' },
    'navy-eot': { images: images('navy-engine-order-telegraph', 1) },
    'navigation-light-panel': { images: images('navigation-light-panel-navy-and-merchant', 8), videos: videos('other-marine-video-review', 2), videoNote: 'Complete marine evidence archive: 8 photos and 2 full-length project videos.' },
    'sagar-samra': { images: images('sagar-samrat-offshore-6-6kv', 21) },
    'barc-custom-pcbs': { images: barc },
    'barc-power-supply': { images: barc },
    'barc-gamma': { images: barc },
    'barc-filter': { images: barc },
    'idemi-mcb': { images: images('idemi-iot-mcb', 12), videos: videos('idemi-iot-mcb', 5), videoNote: 'Complete project evidence archive: 12 photos and 5 full-length operational videos.' },
    'magnetic-polisher': { images: images('magnetic-polisher', 4) },
    'cb-re-ventilation': { images: images('cbre-co-sensor-and-ventilation', 7), videos: videos('cbre-co-sensor-and-ventilation', 1), videoNote: 'Complete project evidence archive: 7 photos and 1 full-length site video.' },
    'water-atm': { images: images('water-atm', 3) },
    'rf-beauty': { images: images('rf-beauty-equipment', 3) },
    'denki-antifouling': { images: images('denki-antifouling-power-supply', 2) },
    'denki-igbt': { images: ozone },
    'ozone': { images: ozone },
    'crest-tlc': { images: images('tlc-instrument', 1) }
  };
})();

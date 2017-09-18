import React from 'react';

require('./Carbon.css');

class Carbon extends React.Component {
  componentDidMount() {
    window.gtag('config', 'UA-106598593-1', {
      page_path: location.hash.slice(1),
    });

    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.src =
      '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=materialuicom';
    script.id = '_carbonads_js';
    const ad = document.querySelector('#ad');
    if (ad) {
      ad.appendChild(script);
    }
  }

  render() {
    return <div id="ad" />;
  }
}

export default Carbon;

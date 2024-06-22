// QRScanner.jsx

import React, { useEffect } from 'react';
import Quagga from 'quagga';
import { Html5QrcodeScanner } from 'html5-qrcode'; // Import named export
import '../component/Qr.css'
function QRScanner() {
  useEffect(() => {
    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: document.querySelector('#my-qr-reader'),
        constraints: {
          width: 480,
          height: 320,
          facingMode: 'environment', // or 'user' for front camera
        },
      },
      decoder: {
        readers: ['ean_reader', 'ean_8_reader'],
      },
    }, function(err) {
      if (err) {
        console.error('Quét mã QR thất bại:', err);
        return;
      }
      console.log('Quét mã QR thành công');
      Quagga.start();
    });

    Quagga.onDetected((result) => {
      console.log('Kết quả quét:', result);
      // Xử lý khi quét thành công ở đây
    });

    return () => {
      Quagga.stop();
    };
  }, []);

  return (
    <div className="container">
      <h1>Quét Mã QR</h1>
      <div className="section">
        <div id="my-qr-reader"></div>
      </div>
    </div>
  );
}

export default QRScanner;

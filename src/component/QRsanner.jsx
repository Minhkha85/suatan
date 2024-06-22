// QRScanner.jsx

import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode'; // Import named export
import '../component/Qr.css'
function QRScanner() {
  useEffect(() => {
    const onScanSuccess = (decodeText, decodeResult) => {
      alert(`Bạn đã quét mã QR thành công: ${decodeText}`);
      // Xử lý khi quét thành công ở đây
    };

    const htmlScanner = new Html5QrcodeScanner(
      'my-qr-reader',
      { fps: 10, qrbox: 250 }
    );
    htmlScanner.render(onScanSuccess);

    return () => {
      htmlScanner.clear();
    };
  }, []); // Chạy chỉ một lần khi component được gắn vào DOM

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
import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Suatan from './client';
import QRScanner from './QRsanner';
function NavTabs() {
  return (
    <div className="main-content">
      <Tabs defaultActiveKey="suat-an" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="suat-an" title="Nhập suất ăn">
          <div className="tab-pane fade show active" id="suat-an" role="tabpanel" aria-labelledby="suat-an-tab">
            <Suatan/>
          </div>
        </Tab>
        <Tab eventKey="QR-scanner" title="QR Scanner">
          <div className="tab-content">
            <QRScanner />
          </div>
        </Tab>
        
      </Tabs>
    </div>
  );
}

export default NavTabs;

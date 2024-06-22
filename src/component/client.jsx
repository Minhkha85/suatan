import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import '../component/client.css';  // Đảm bảo rằng đường dẫn tới tệp CSS đúng

function Suatan() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const sheetData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
      setData(sheetData);
    };
    reader.readAsBinaryString(file);
  };

  const handleFileSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('File uploaded successfully!');
    } catch (error) {
      alert('Error uploading file.');
      console.error(error);
    }
  };

  return (
    <div className="Appp">
      <h1>Import File Excel</h1>
      <input
        type="file"
        accept=".xlsx"
        onChange={handleFileUpload}
        className="btn"
      />
      {data.length > 0 && (
        <div>
          <table className="data-table">
            <thead>
              <tr>
                {data[0].map((cell, index) => (
                  <th key={index}>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn" onClick={handleFileSubmit}>Upload</button>
        </div>
      )}
    </div>
  );
}

export default Suatan;

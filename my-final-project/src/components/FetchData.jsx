import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchData() {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [bird, setBird] = useState(null);

  useEffect(() => {
    // Fetch recent bird observations by geo location as an example
    const fetchRecords = async () => {
      try {
        const response = await axios.get('https://api.ebird.org/v2/data/obs/geo/recent', {
          headers: {
            'X-eBirdApiToken': 'ni9u96j4iq8f'
          },
          params: {
            lat: 40.730610, // Example latitude
            lng: -73.935242 // Example longitude
          }
        });
        setRecords(response.data);
      } catch (error) {
        console.error('Error fetching recent observations:', error);
      }
    };
    fetchRecords();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://api.ebird.org/v2/ref/taxonomy/ebird`, {
        headers: {
          'X-eBirdApiToken': 'ni9u96j4iq8f'
        },
        params: {
          q: searchTerm
        }
      });
      setBird(response.data[0]); 
    } catch (error) {
      console.error('Error fetching data from eBird API:', error);
    }
  };

  return (
    <div>
      <div className="search-section">
        <form onSubmit={handleSearchSubmit}>
          <input 
            type="text" 
            value={searchTerm} 
            onChange={handleSearchChange} 
            placeholder="Search for a bird by name" 
          />
          <br></br><br></br>
          <button type="submit">Search</button>
        </form>
        {bird && (
          <div className="bird-info">
            <h2>{bird.comName}</h2>
            <p>Scientific Name: {bird.sciName}</p>
            <p>Category: {bird.category}</p>
            <p>Order: {bird.order}</p>
          </div>
        )}
      </div>
      <div className="records-section">
        <h2>Recent Bird Observations</h2>
        <ul>
          {records.map((record, index) => (
            <li key={index}>
              {record.comName} - {record.sciName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FetchData;

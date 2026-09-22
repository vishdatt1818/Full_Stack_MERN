import React, { useState, useEffect } from 'react';
import { fetchFlights } from './Customer/api';

export default function FlightSearch() {
  const [origin, setOrigin] = useState('JFK');
  const [destination, setDestination] = useState('LAX');
  const [maxPrice, setMaxPrice] = useState(500);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetchFlights(origin, destination, maxPrice).then((data) => {
      setFlights(data);
      setLoading(false);
    });
  }, [origin, destination, maxPrice]);

  const handleSelect = (id) => {
    // Intended to toggle selection and keep count
    setSelectedCount(selectedCount + 1);
  };

  return (
    <div>
      <h2>Flight Search</h2>
      <input value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="Origin" />
      <input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Destination" />
      <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      
      <p>Selected Flights Count: {selectedCount}</p>
      {loading && <p>Loading flights...</p>}
      
      <ul>
        {flights.map((f) => (
          <li key={f.id} onClick={() => handleSelect(f.id)}>
            {f.airline} - ${f.price} ({f.stops} stops)
          </li>
        ))}
      </ul>
    </div>
  );
}
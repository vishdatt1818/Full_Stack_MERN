const INITIAL_FLIGHTS = [
  { id: "FL-101", origin: "JFK", destination: "LAX", price: 350, stops: 0, airline: "Delta" },
  { id: "FL-102", origin: "JFK", destination: "LAX", price: 280, stops: 1, airline: "United" },
  { id: "FL-103", origin: "JFK", destination: "LAX", price: 420, stops: 0, airline: "American" },
  { id: "FL-104", origin: "JFK", destination: "SFO", price: 310, stops: 1, airline: "Delta" },
];

// Simulated Async API
export const fetchFlights = (origin, destination, maxPrice) => {
  const latency = Math.floor(Math.random() * 2000) + 500; // 500ms - 2500ms jitter
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) reject(new Error("Network Error: Flight Service Unavailable"));
      const filtered = INITIAL_FLIGHTS.filter(
        (f) => f.origin === origin && f.destination === destination && Number(f.price) <= Number(maxPrice)
      );
      resolve(filtered);
    }, latency);
  });
};
import { getCat, likeCatPic } from '../apiClient.ts';
import { Cat } from '../../models/models.ts';
import React, { useState, useEffect } from 'react';

function Home() {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    async function fetchCatData() {
      try {
        const catData = await getCat(); // Assuming getCat is a function that fetches cat data
        setCat(catData);
      } catch (error) {
        console.error('Error fetching cat data:', error);
      }
    }

    fetchCatData();
  }, []);

  return (
    <div>
      {cat.map((x) => (
        <img
          key={x.id}
          src={x.url}
          style={{ width: '500px', height: '500px' }}
          alt="Cat being funny"
        />
      ))}
    </div>
  );
}

export default Home;
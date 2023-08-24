import { useEffect, useState } from 'react';
import { getCat, likeCatPic } from '../apiClient.ts'; // Remove ".ts" extensions
import { Cat } from '../../models/models.ts'; // Remove ".ts" extensions

function Header() {
  const [cat, setCat] = useState<Cat[] | null>(null); // Specify the type for useState

  useEffect(() => {
    async function fetchCats() {
      try {
        const newCat = await getCat();
        console.log(newCat);
        setCat(newCat);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCats();
  }, []);

  return (
    <div className="header">
      <div className="logoContainer">
        <img src="images/dc65035f868ac2a6882509e856ebc36d.png" alt="Logo" className="logo" />
        <h1>OnlyCats</h1>
      </div>
      <div className="randomCat">
        {cat?.map((x) => (
          <img
            key={x.id}
            src={x.url}
            style={{ width: '500px', height: '500px' }}
            alt="Cat being funny"
          />
        ))}
      </div>
      <div className="navContainer">


        <a href="index.html" className="onlyButton">Back to Home</a>
        <button type="button" className="onlyButton randomButton">Random Cat</button>
        <button type="button" className="onlyButton browseButton">Browse OnlyCats</button>
      </div>
    </div>
  );
}

export default Header;
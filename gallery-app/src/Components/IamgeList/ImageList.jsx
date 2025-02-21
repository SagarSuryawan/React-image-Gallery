import axios from 'axios';
import { useEffect, useState } from 'react';
import Animals from '../Animals/Animals';
import './ImageList.css';

function ImageList() {
  const [images, setImages] = useState([]);
  const [offset, setOffset] = useState(0); // Current offset
  const [totalPhotos, setTotalPhotos] = useState(0); // Total available images
  const limit = 20; // Number of images per page

  // Function to fetch images from API
  async function downloadImages(newOffset) {
    try {
      const apiUrl = `https://api.slingacademy.com/v1/sample-data/photos?limit=${limit}&offset=${newOffset}`;
      const response = await axios.get(apiUrl);

      console.log("response", response);
      const responseResults = response.data.photos;
      console.log("responseResult", responseResults); // It is an array inside objects

      // Update totalPhotos(132) from API response 
      setTotalPhotos(response.data.total_photos);

      // Map API response to required structure
      const result = responseResults.map((item) => ({
        // title: item.title,
        // description: item.description,
        image: item.url,
        id: item.id,
      }));

      console.log("Result", result);
      setImages(result);
      setOffset(newOffset); // Update offset state
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  // Fetch images on component mount
  useEffect(() => {
    downloadImages(offset);
  }, []);

  return (
    <div className="image-wrapper">
      <div className="container">
        {images.map((a) => (
          <Animals  image={a.image} key={a.id} id={a.id} />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => downloadImages(offset - limit)}
          disabled={offset === 0}
        >
          Prev
        </button>
        <span> Page {offset / limit + 1} of {Math.ceil(totalPhotos / limit)} </span>
        <button
          onClick={() => downloadImages(offset + limit)}
          disabled={offset + limit >= totalPhotos}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ImageList;

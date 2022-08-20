import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './ImageGalleryElephant.css';
import { useNavigate } from 'react-router-dom'

function ImageGalleryElephant() {
  const [image, setImage] = useState([])
  const navigate = useNavigate()
  useEffect(
    () => {
      axios.get("https://pixabay.com/api/?key=29382100-4f9aee4f93e3505254b283996&q=Elephant&image_type=photo")
        .then((res) => {
          console.log(res.data.hits);
          setImage(res.data.hits)
        })
        .catch((err) => console.log(err))
    }, []
  )
  const handleclick = (user) => {
    navigate(`/view/${user}`)
  }

  return (
    <div>
      <div className="container">
        <h2>Photographer's Showcase</h2>
        {
          image.map((item) => (
            <div id="ImageContainer">
              <img src={item.largeImageURL} onClick={() => handleclick(item.user)}></img>
              <h3 onClick={() => handleclick(item.user)}>Image by: {item.user}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ImageGalleryElephant
import React, { useState } from 'react';
import './App.css';

const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prevState) => !prevState);
  };

  return (
    <div className="gallery">
      <div className="image-container">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          onClick={toggleFullscreen}
        />
      </div>
      <div className="controls">
        <button onClick={handlePrev}>Voltar</button>
        <button onClick={handleNext}>Avançar</button>
      </div>
    </div>
  );
};

const App = () => {
  const images = [
    'https://s2-oglobo.glbimg.com/PixMXPEuyPLLSpMX2J45ZyAN0vc=/0x0:740x493/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/J/8/mAHb3dTJ6l5EKYauvJrQ/adolescente-em-patins-no-verao-1.jpg',
    'https://images.unsplash.com/photo-1656276666454-e2efcfb1774b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80',
    'https://www.oxerbrasil.com.br/wp-content/uploads/2022/07/outdoor-shot-of-happy-family-having-fun-and-roller-skating-together-in-summer-park-mommy-holding-kids-hands-being-glad-to-spend-weekend-together-active-pastime-Copy.jpg',
    'https://i0.wp.com/www.hawaiisurfpoint.com.br/wp-content/uploads/2018/01/161463-5-beneficios-da-patinacao-que-voce-ainda-nao-sabia.jpg?fit=963%2C642&ssl=1',
    'https://i0.wp.com/www.hawaiisurfpoint.com.br/wp-content/uploads/2018/02/172698-patins-para-iniciantes-como-andar-com-seguranca.jpg?fit=963%2C601&ssl=1',
  ];

  return (
    <div className="app">
      <h1>Galeria de Imagens</h1>
      <Gallery images={images} />
    </div>
  );
};

export default App;

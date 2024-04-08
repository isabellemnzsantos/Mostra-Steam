// ImageBanner.js
import React from 'react';
import minhaImagem from './home.png'; // Substitua pelo caminho correto da sua imagem

const ImageBanner = () => {
  return (
    <div className="banner" >
      <img src={minhaImagem} alt="Banner" />
    </div>
  );
};

export default ImageBanner;
import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
    const image = images.map(img => <ImageCard key={img.id} img={img} />);

    return <div className='image-list'>{image}</div>;
};

export default ImageList;

import React, { useState } from 'react';

const Gallery = () => {
    const Pictures = [
        {
            id: '1',
            image: 'images/picture1.jpg'
        },
        {
            id: '2',
            image: 'images/picture2.jpg'
        },
        {
            id: '3',
            image: 'images/picture3.jpg'
        },
        {
            id: '4',
            image: 'images/picture4.jpg'
        },
        {
            id: '5',
            image: 'images/picture5.jpg'
        },
        {
            id: '6',
            image: 'images/picture6.jpg'
        },
        {
            id: '7',
            image: 'images/picture7.jpg'
        },
        {
            id: '8',
            image: 'images/picture8.jpg'
        }
    ];
    const [images, setImages] = useState(Pictures);

    return (
        <div className='main my-5' style={{ display: 'flex', flexWrap: 'wrap' }}>
            {images.map((elem) => {
                const { id, image } = elem;
                return (
                    <div key={id} style={{ margin: '10px' }}>
                        <img src={image} alt='' style={{ height: '200px', width: 'auto' }} />
                    </div>
                );
            })}
        </div>
    );
};

export default Gallery;
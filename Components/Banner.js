import Image from 'next/image';
import React from 'react';
import img from '../public/Assets/banner.jpg';

const Banner = () => {
    return (
        <div>
            <Image className='relative'  layout="fill"
              objectFit="cover"
              quality={100} 
              src={img} alt="banner"></Image>

              <h1 className='text-6xl font-bold text-white absolute w-auto h-auto'>Md. Asadul Islam</h1>
        </div>
    );
};

export default Banner;
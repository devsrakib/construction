import { useState } from 'react';

const slides = [
  { id: 1, image: 'https://plus.unsplash.com/premium_photo-1682597001042-c130c0627a7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Building Dreams' },
  { id: 2, image: 'https://media.istockphoto.com/id/2187596750/photo/construction-worker-shaking-hands-with-foreman.webp?s=2048x2048&w=is&k=20&c=Dgy4yOzJOwL21_oHIKW6woC242dMSY4KpDfz6YOfM0Y=', caption: 'Modern Architecture' },
  { id: 3, image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Strong Foundations' },
];


function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-all duration-500 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide?.image} alt={slide.caption} className="w-full h-full object-cover" />
          <div className="absolute bottom-10 left-10 bg-black bg-opacity-50 text-white p-4 rounded">
            {slide.caption}
          </div>
        </div>
      ))}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full">‹</button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full">›</button>
    </div>
  );
}

export default Carousel;

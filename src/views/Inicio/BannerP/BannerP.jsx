import { useEffect, useState, useRef, useContext } from 'react';
import { AppContext } from '../../../Context/AppContext';
import './BannerP.css';

const BannerP = () => {
  const { banners } = useContext(AppContext);
  const [slideIndex, setSlideIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const slidesRef = useRef(null);
  const dotsRef = useRef(null);
  const autoplayRef = useRef(null);

  useEffect(() => {
    if (!banners || banners.length === 0) return;

    const showSlides = (n) => {
      const slides = slidesRef.current;
      if (n >= banners.length) { setSlideIndex(0); }
      if (n < 0) { setSlideIndex(banners.length - 1); }
      slides.style.transform = `translateX(${-slideIndex * 100}%)`;
      updateDots();
    };

    const updateDots = () => {
      const dots = dotsRef.current.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
      });
    };

    const setupAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        if (autoplay) {
          setSlideIndex(prevIndex => (prevIndex + 1) % banners.length);
        }
      }, 3000);
    };

    const setupDrag = () => {
      let startX = 0;
      let currentTranslate = 0;
      let prevTranslate = 0;
      let isDragging = false;
      const slides = slidesRef.current;

      const handlePointerDown = (e) => {
        startX = e.clientX;
        slides.style.transition = 'none';
        isDragging = true;
        setAutoplay(false); 
      };

      const handlePointerMove = (e) => {
        if (!isDragging) return;
        currentTranslate = e.clientX - startX;
        slides.style.transform = `translateX(${currentTranslate + prevTranslate}px)`;
      };

      const handlePointerUp = (e) => {
        if (!isDragging) return;
        const movedBy = e.clientX - startX;
        let newIndex = slideIndex;

        if (movedBy < -50) {
          newIndex = (slideIndex + 1) % banners.length;
        } else if (movedBy > 50) {
          newIndex = (slideIndex - 1 + banners.length) % banners.length;
        }

        setSlideIndex(newIndex);
        showSlides(newIndex);

        prevTranslate += currentTranslate;
        slides.style.transition = 'transform 0.3s ease-out';
        isDragging = false;
        setAutoplay(true);
        startX = undefined;
        currentTranslate = 0;
      };

      slides.addEventListener('pointerdown', handlePointerDown);
      slides.addEventListener('pointermove', handlePointerMove);
      slides.addEventListener('pointerup', handlePointerUp);
      slides.addEventListener('pointercancel', () => { isDragging = false; });

      return () => {
        slides.removeEventListener('pointerdown', handlePointerDown);
        slides.removeEventListener('pointermove', handlePointerMove);
        slides.removeEventListener('pointerup', handlePointerUp);
      };
    };

    showSlides(slideIndex);
    setupAutoplay();
    const clearDrag = setupDrag();

    return () => {
      clearInterval(autoplayRef.current);
      clearDrag();
    };
  }, [slideIndex, autoplay, banners]);

  const nextSlide = () => {
    setSlideIndex(prevIndex => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setSlideIndex(prevIndex => (prevIndex - 1 + banners.length) % banners.length);
  };

  const goToSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="banner-slider">
      <div className="slides" ref={slidesRef}>
        {banners && banners.length > 0 ? (
          banners.map((banner, index) => (
            <div key={index} className="slide">
              <a href={banner.link}>
                <img
                  src={banner.photoURL}
                  alt={banner.title}
                  className="banner-slide-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                />
              </a>
            </div>
          ))
        ) : (
          <div>No banners available</div>
        )}
      </div>
      <div className="dots" ref={dotsRef}>
        {banners && banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default BannerP;

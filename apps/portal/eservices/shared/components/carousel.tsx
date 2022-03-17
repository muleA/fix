import Image from 'next/image';
import React, {
  Children,
  ReactChild,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './carousel.module.css';

interface props {
  children: ReactChild[],
  height:number,
  duration:number;
}
function Carousel(props: props) {
  const [slideIndex, setSlideIndex] = useState(1);
  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);
  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, props.duration);

    return () => clearInterval(interval);
  });
  function plusSlides(n): any {
    setSlideIndex(slideIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n): any {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    console.log('n', n);
    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      for (i = 0; i < slides.length; i++) {
        const t = slides[i].className.indexOf('tw-hidden');
        if (t !== -1) continue;
        else if (slides[i].className.indexOf('tw-block') !== -1) {
          slides[i].className = slides[i].className.replace(
            ' tw-block',
            ' tw-hidden'
          );
        } else slides[i].className += ' tw-hidden';
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(` ${styles.active}`, '');
      }
      console.log('slideindex', slideIndex);
      slides[slideIndex - 1].className = slides[
        slideIndex - 1
      ].className.replace(' tw-hidden', ' tw-block');
      dots[slideIndex - 1].className += ` ${styles.active}`;
    }
  }
  return (
    <>
      <div className="tw-w-full tw-relative tw-container">
       <div style={{height:`${props.height}vw`}} >
       {Children.toArray(props.children).map((items)=>{
          return items
        })}
       </div>

        <a className={styles.prev} onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className={styles.next} onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>
      <br />

      <div className="tw-flex tw-justify-center tw-items-center">
        {Array.from({ length: Children.toArray(props.children).length }).map((_, idx) => (
         
         

         <span
            key={idx}
            style={{transition:'background-color 0.6s ease'}}
            className={`dot ${styles.dot}`}
            onClick={() => currentSlide(idx + 1)}
          ></span>
        ))}
      </div>
    </>
  );
}
interface ItemProps {
  children?: ReactElement;
  caption: string;
  fontcolor?:string;
}
export const CarouselItem = (props: ItemProps) => {
  return (
    <div
      className="mySlides fade tw-w-full tw-block"
    >
      {props.children}
      <div className={`${props.fontcolor} tw-text-center tw-w-full tw-text-base tw-absolute tw-w-full tw-felx tw-justify-center tw-bottom-8 tw-px-8`}>
        {props.caption}
        </div>
    </div>
  );
};

export default Carousel;

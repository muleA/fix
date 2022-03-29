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
  children: ReactChild[];
  height: number;
  duration: number;
  report?:any,
  reportOpacity?:any,
  reportClassName?:string,
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
      <div className="tw-w-full tw-relative tw-container-fluid">
        <div style={{ height: `${props.height}vw` }} className="tw-w-full">
          {Children.toArray(props.children).map((items) => {
            return items;
          })}
        </div>

        <a className={styles.prev} onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className={styles.next} onClick={() => plusSlides(1)}>
          &#10095;
        </a>

        {/* <div className="tw-absolute tw-bottom-0 tw-w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#a2d9ff"
              fillOpacity="1"
              d="M0,288L60,282.7C120,277,240,267,360,272C480,277,600,299,720,309.3C840,320,960,320,1080,282.7C1200,245,1320,171,1380,133.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div> */}
         <div  className={`lg:tw-visible md:tw-visible sm:tw-invisible xs:tw-invisible ${props.reportClassName} tw-absolute tw-bottom-0 tw-w-full tw-h-25 tw-grid tw-grid-cols-5 tw-items-center tw-opacity-${props.reportOpacity}`}>
          {Children.toArray(props.report).map(
            (item,idx) =>{ return (
                item
            )
            }
          )}
        </div>
      </div>
      <br />
      <div className="tw-flex tw-justify-center tw-items-center">
        {Array.from({ length: Children.toArray(props.children).length }).map(
          (_, idx) => (
            <span
              key={idx}
              style={{ transition: 'background-color 0.6s ease' }}
              className={`dot ${styles.dot}`}
              onClick={() => currentSlide(idx + 1)}
            ></span>
          )
        )}
      </div>
    </>
  );
}
interface ItemProps {
  children?: ReactElement;
  caption: string;
  fontcolor?: string;
}
export const CarouselItem = (props: ItemProps) => {
  return (
    <div className="mySlides fade tw-w-full tw-block">
      {props.children}
      <div
        className={`${props.fontcolor} tw-text-center tw-w-full tw-text-base tw-absolute tw-w-full tw-felx tw-justify-center tw-bottom-8 tw-px-8`}
      >
        {props.caption}
      </div>
    </div>
  );
};

interface ReportProps {
  number?: any;
  icon?: any;
  text?: string;
  className?: string;
  iconBackGround?:string
}
export const Report = (props: ReportProps) => {
  return (
    <div className={`${props.className}`}>
      <div className="tw-flex tw-space-x-2 tw-mt-2">
        <div className={`${props.iconBackGround} tw-border tw-rounded-md tw-w-10 tw-h-10 tw-flex tw-justify-center tw-items-center`}>
          {props.icon}
          </div>
        <div className='tw-text-lg tw-font-bold tw-self-center tw-text-xl'>{props.number}</div>
      </div>
      <div >{props.text}</div>
    </div>
  );
};
export default Carousel;

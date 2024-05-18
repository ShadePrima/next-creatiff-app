'use client'
import React, { useState } from 'react'
import cl from 'clsx'
import { useKeenSlider } from "keen-slider/react"
import arrowLeft from '@/assets/icons/arrow-left.svg'
import arrowRight from '@/assets/icons/arrow-right.svg'
import doorImg1 from '@/assets/image/door-1.png';
import doorImg2 from '@/assets/image/door-2.png';
import doorImg3 from '@/assets/image/door-3.png';
import doorImg4 from '@/assets/image/door-4.png';
import doorImg5 from '@/assets/image/door-5.png';
import doorImg6 from '@/assets/image/door-6.png';
import doorImg7 from '@/assets/image/door-7.png';
import doorImg8 from '@/assets/image/door-8.png';
import doorImg9 from '@/assets/image/door-9.png';
import doorImg10 from '@/assets/image/door-10.png';



import "keen-slider/keen-slider.min.css"
import styles from './styles.module.css'
import "./styles.css"
import Image from 'next/image'

const doorImages = [
    { src: doorImg1, alt: 'door1' },
    { src: doorImg2, alt: 'door2' },
    { src: doorImg3, alt: 'door3' },
    { src: doorImg4, alt: 'door4' },
    { src: doorImg5, alt: 'door5' },
    { src: doorImg6, alt: 'door6' },
    { src: doorImg7, alt: 'door7' },
    { src: doorImg8, alt: 'door8' },
    { src: doorImg9, alt: 'door9' },
    { src: doorImg10, alt: 'door10' }
];

type Props = {
    dictionary: any
}

export default function GeneralSliderPorchTwo({ dictionary }: Props) {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
        },
        created() {
        setLoaded(true)
        },
        breakpoints: {
        "(min-width: 400px)": {
            slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
            slides: { perView: 5, spacing: 10 },
        },
    },
    slides: { perView: 1 },
    })

    return (
        <div className={styles.general_slider_colors}>
            <div className={styles.general_slider_colors__title_wrapper}>
                <h2 className={styles.general__title}>{dictionary.general.slider_porch_two_title}</h2>
                <div className={styles.general_slider_colors__buttons}>
                    {loaded && instanceRef.current && (
                        <button
                            className={styles.general_slider_colors__button}
                            onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        >
                            <Image src={arrowLeft} width={16} height={16} alt="arrow left" />
                        </button>

                    )}
                    {loaded && instanceRef.current && (
                        <button
                            className={styles.general_slider_colors__button}
                            onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                            currentSlide ===
                            instanceRef.current.track.details.slides.length - 1
                            }
                        >
                            <Image src={arrowRight} width={16} height={16} alt="arrow right" />
                        </button>
                )}
                </div>
            </div>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    {doorImages.map((image, index) => (
                        <div key={index} className={cl("keen-slider__slide", styles.general_slider_colors__item)}>
                            <Image src={image.src} width={200} height={200} alt={image.alt} />
                        </div>
                    ))}
                </div>
        </div>
        </div>
    );
}

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
    }) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
        onClick={props.onClick}
        className={`arrow ${
            props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        >
        {props.left && (
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
        </svg>
    )
}

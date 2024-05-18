'use client'
import React, { useState } from 'react'
import cl from 'clsx'
import { useKeenSlider } from "keen-slider/react"
import arrowLeft from '@/assets/icons/arrow-left.svg'
import arrowRight from '@/assets/icons/arrow-right.svg'
import porchImg1 from '@/assets/image/porch-1.png'
import porchImg2 from '@/assets/image/porch-2.png'
import porchImg3 from '@/assets/image/porch-3.png'
import porchImg4 from '@/assets/image/porch-4.png'
import porchImg5 from '@/assets/image/porch-5.png'
import porchImg6 from '@/assets/image/porch-6.png'
import porchImg7 from '@/assets/image/porch-7.png'
import porchImg8 from '@/assets/image/porch-8.png'
import porchImg9 from '@/assets/image/porch-9.png'
import porchImg10 from '@/assets/image/porch-10.png'
import porchImg11 from '@/assets/image/porch-11.png'
import porchImg12 from '@/assets/image/porch-12.png'
import porchImg13 from '@/assets/image/porch-13.png'

import "keen-slider/keen-slider.min.css"
import styles from './styles.module.css'
import "./styles.css"
import Image from 'next/image'

const colorImages = [
    { src: porchImg1, alt: 'porch1' },
    { src: porchImg2, alt: 'porch2' },
    { src: porchImg3, alt: 'porch3' },
    { src: porchImg4, alt: 'porch4' },
    { src: porchImg5, alt: 'porch5' },
    { src: porchImg6, alt: 'porch6' },
    { src: porchImg7, alt: 'porch7' },
    { src: porchImg8, alt: 'porch8' },
    { src: porchImg9, alt: 'porch9' },
    { src: porchImg10, alt: 'porch10' },
    { src: porchImg11, alt: 'porch11' },
    { src: porchImg12, alt: 'porch12' },
    { src: porchImg13, alt: 'porch13' },
];

type Props = {
    dictionary: any
}

export default function GeneralSliderPorchOne({ dictionary }: Props) {
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
                <h2 className={styles.general__title}>{dictionary.general.slider_porch_one_title}</h2>
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
                    {colorImages.map((image, index) => (
                        <div key={index} className={cl("keen-slider__slide", styles.general_slider_colors__item)}>
                            <Image src={image.src} width={200} height={200} alt={image.alt} />
                        </div>
                    ))}
                </div>
        </div>
        </div>
    );
}

// function Arrow(props: {
//     disabled: boolean
//     left?: boolean
//     onClick: (e: any) => void
//     }) {
//     const disabled = props.disabled ? " arrow--disabled" : ""
//     return (
//         <svg
//         onClick={props.onClick}
//         className={`arrow ${
//             props.left ? "arrow--left" : "arrow--right"
//         } ${disabled}`}
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         >
//         {props.left && (
//             <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//         )}
//         {!props.left && (
//             <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//         )}
//         </svg>
//     )
// }

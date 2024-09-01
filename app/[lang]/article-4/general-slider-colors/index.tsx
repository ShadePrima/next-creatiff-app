'use client'
import React, { useState } from 'react'
import cl from 'clsx'
import { useKeenSlider } from "keen-slider/react"
import arrowLeft from '@/assets/icons/arrow-left.svg'
import arrowRight from '@/assets/icons/arrow-right.svg'
import colorImg1 from '@/assets/image/colors-1.png'
import colorImg2 from '@/assets/image/colors-2.png';
import colorImg3 from '@/assets/image/colors-3.png';
import colorImg4 from '@/assets/image/colors-4.png';
import colorImg5 from '@/assets/image/colors-5.png';
import colorImg6 from '@/assets/image/colors-6.png';
import colorImg7 from '@/assets/image/colors-7.png';
import colorImg8 from '@/assets/image/colors-8.png';
import colorImg9 from '@/assets/image/colors-9.png';
import colorImg10 from '@/assets/image/colors-10.png';
import colorImg11 from '@/assets/image/colors-11.png';
import colorImg12 from '@/assets/image/colors-12.png';
import colorImg13 from '@/assets/image/colors-13.png';
import colorImg14 from '@/assets/image/colors-14.png';
import colorImg15 from '@/assets/image/colors-15.png';
import colorImg16 from '@/assets/image/colors-16.png';
import colorImg17 from '@/assets/image/colors-17.png';
import colorImg18 from '@/assets/image/colors-18.png';
import colorImg19 from '@/assets/image/colors-19.png';
import colorImg20 from '@/assets/image/colors-20.png';
import colorImg21 from '@/assets/image/colors-21.png';
import colorImg22 from '@/assets/image/colors-22.png';
import colorImg23 from '@/assets/image/colors-23.png';
import colorImg24 from '@/assets/image/colors-24.png';
import colorImg25 from '@/assets/image/colors-25.png';
import colorImg26 from '@/assets/image/colors-26.png';
import colorImg27 from '@/assets/image/colors-27.png';
import colorImg28 from '@/assets/image/colors-28.png';
import colorImg29 from '@/assets/image/colors-29.png';
import colorImg30 from '@/assets/image/colors-30.png';
import colorImg31 from '@/assets/image/colors-31.png';
import "keen-slider/keen-slider.min.css"
import styles from './styles.module.css'
import "./styles.css"
import Image from 'next/image'

const colorImages = [
    { src: colorImg1, alt: 'color1' },
    { src: colorImg2, alt: 'color2' },
    { src: colorImg3, alt: 'color3' },
    { src: colorImg4, alt: 'color4' },
    { src: colorImg5, alt: 'color5' },
    { src: colorImg6, alt: 'color6' },
    { src: colorImg7, alt: 'color7' },
    { src: colorImg8, alt: 'color8' },
    { src: colorImg9, alt: 'color9' },
    { src: colorImg10, alt: 'color10' },
    { src: colorImg11, alt: 'color11' },
    { src: colorImg12, alt: 'color12' },
    { src: colorImg13, alt: 'color13' },
    { src: colorImg14, alt: 'color14' },
    { src: colorImg15, alt: 'color15' },
    { src: colorImg16, alt: 'color16' },
    { src: colorImg17, alt: 'color17' },
    { src: colorImg18, alt: 'color18' },
    { src: colorImg19, alt: 'color19' },
    { src: colorImg20, alt: 'color20' },
    { src: colorImg21, alt: 'color21' },
    { src: colorImg22, alt: 'color22' },
    { src: colorImg23, alt: 'color23' },
    { src: colorImg24, alt: 'color24' },
    { src: colorImg25, alt: 'color25' },
    { src: colorImg26, alt: 'color26' },
    { src: colorImg27, alt: 'color27' },
    { src: colorImg28, alt: 'color28' },
    { src: colorImg29, alt: 'color29' },
    { src: colorImg30, alt: 'color30' },
    { src: colorImg31, alt: 'color31' }
];


type Props = {
    dictionary: any
}

export default function GeneralSliderColors({ dictionary }: Props) {
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
                <h2 className={styles.general__title}>{dictionary.general.color_slider_title}</h2>
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
                            <Image src={image.src} width={165} height={237} alt={image.alt} />
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

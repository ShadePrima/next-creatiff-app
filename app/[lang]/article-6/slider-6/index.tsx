'use client'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import image_1 from '@/assets/image/article-6/article-1.png'
import image_2 from '@/assets/image/article-6/article-2.png'
import image_3 from '@/assets/image/article-6/article-3.png'
import Image from "next/image"

export default function Slider_6() {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: { origin: "center", perView: 1.3, spacing: 10 },
        range: {
        min: -5,
        max: 5,
        },
      })

    return (
    <div style={{paddingTop: '32px'}} ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1"><Image src={image_1} alt='image 1' /></div>
        <div className="keen-slider__slide number-slide2"><Image src={image_2} alt='image 2' /></div>
        <div className="keen-slider__slide number-slide3"><Image src={image_3} alt='image 3' /></div>
    </div>
    )

}
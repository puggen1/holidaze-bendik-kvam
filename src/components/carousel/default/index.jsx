import React, { useEffect, useRef, useState } from 'react'
import { Carousel as AntdCarousel } from 'antd'
import { OuterCarousel, CarouselNavigation } from './index.styles'
const Carousel = ({images}) => {
    const [current, setCurrent] = useState(0)
    const [carouselNavigation, setCarouselNavigation] = useState([])
    useEffect(() => {
        console.log(current)
        setCarouselNavigation(images.map((image, index) => {
            if(current >= 4){
           
                return  (index >= current - 3 &&  index <= current + 3) || index === 4 || (current === images.length - 1 && index >= images.length - 5)? <img key={index} id={index} onClick={navigate} className={index === current ? "active" : null} src={image} alt="test"/> : null
            }
            if(current <= 4){
                return index > 4 ? null :  <img key={index} id={index} onClick={navigate} className={index === current ? "active" : null} src={image} alt="test"/>
            }
        }))
        console.log(carouselNavigation)
    }, [current, images])
    const carouselRef = useRef(null)
    const navigate = (e) => {
        carouselRef.current.goTo(e.target.id, false)
        setCurrent(parseInt(e.target.id))
        e.target.classList.add("active")
    }
    const next = () =>{carouselRef.current.next(); setCurrent(current + 1)}
    const prev = () =>{carouselRef.current.prev(); setCurrent(current - 1)}
  return (
    <OuterCarousel>
    <button onClick={prev}>prev</button>
    <AntdCarousel dots={false} ref={carouselRef}>
        {images.length === 0 ? null : images.map((image, index) => {
            return (
                <img className="bigImg"key={index} src={image} alt="test"/>
            )
        })}
    </AntdCarousel>
    <button onClick={next}>next</button>
    <CarouselNavigation>
        {carouselNavigation.length > 0 ? carouselNavigation: null}
    </CarouselNavigation>
    </OuterCarousel>
  )
}

export default Carousel
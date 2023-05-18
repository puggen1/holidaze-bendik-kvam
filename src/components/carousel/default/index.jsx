import { useEffect, useRef, useState } from 'react'
import { Carousel as AntdCarousel } from 'antd'
import { OuterCarousel, CarouselNavigation } from './index.styles'
import carouselLogic from '../../../utils/carouselLogic'
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material'
const Carousel = ({images}) => {
    let size = window.innerWidth;
    //the current carousel image
    const [current, setCurrent] = useState(0)
    //the carousel image navigation buttons that should show
    const [carouselNavigation, setCarouselNavigation] = useState([])
    //an useeffect to update what images should be shown in the navigation
    useEffect(() => {
        setCarouselNavigation(carouselLogic(images, current, navigate, size))
    }, [current, images, size])
    const carouselRef = useRef(null)

    //uses the inbuilt goto of the carousel to navigate to the correct image  also sets the current that triggers the useEffect
    const navigate = (e) => {
        carouselRef.current.goTo(e.target.id, false)
        setCurrent(parseInt(e.target.id))
    }
    //updating the current index of the carousel when the buttons are clicked
    const next = () =>{carouselRef.current.next(); if(current === images.length - 1){setCurrent(0);return}setCurrent(current + 1)}
    const prev = () =>{carouselRef.current.prev(); if(current === 0){setCurrent(images.length - 1);return}setCurrent(current - 1)}
  return (
    <OuterCarousel>
    <ChevronLeftRounded fontSize='large' className='icon prev' onClick={prev}/>
    <AntdCarousel className='carousel' dots={false} ref={carouselRef}>
        {images.length === 0 ? null : images.map((image, index) => {
            return (
                <img className="bigImg"key={index} src={image} alt="test"/>
            )
        })}
    </AntdCarousel>
    <ChevronRightRounded fontSize="large" className="icon next" onClick={next}/>
    <CarouselNavigation>
        {carouselNavigation.length > 0 ? carouselNavigation: null}
    </CarouselNavigation>
    </OuterCarousel>
  )
}

export default Carousel
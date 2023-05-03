const carouselLogic = (images, current, navigate) => {
    return images.map((image, index) => {
        if(current >= 3){
            return ((index >= current - 3 && index <= current + 3) || current === index || (current === images.length - 1 && index >= current - 4)) ? <img key={index} id={index} onClick={navigate} className={index === current ? "active show" : "show"} src={image} alt="test"/> : null

        }
        else{
            return <img key={index} id={index} onClick={navigate} className={index === current ? "active show" : "show"} src={image} alt="test"/>
        }
    })
}


export default carouselLogic
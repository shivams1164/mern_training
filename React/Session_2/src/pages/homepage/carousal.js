

// const Carousal = () => {
//     return <div>Carousals</div>
// }

// export default Carousal;


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CustomCarousel = () => {
    return (
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
            <div>
                <img src="https://mobirise.com/extensions/commercem4/assets/images/galleries-1-1200x800.png" alt="Slide 1" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="https://assets-global.website-files.com/605826c62e8de87de744596e/618e5e4a383af7f5357ac553_1%20Blog%20Covers%20eCommerce%20image%20carousels-%20The%20good%2C%20the%20bad%2C%20and%20the%20ugly.jpg" alt="Slide 2" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="https://lh3.googleusercontent.com/FUcRBUL3FEoQbcbb_nfQlzafPS109CdgwO0crAr8Ux5bwGzIMAkOCskYhtlaoC0-TyFQrQRILhg0AfzJodWF_kzy_WR6dEJXi_3i4Iuf5rR7BG6GoWioTt1ZElpJBXuIs9p7GJ-Y" alt="Slide 3" />
                <p className="legend"></p>
            </div>
        </Carousel>
    );
}

export default CustomCarousel;

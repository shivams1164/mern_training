

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
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/WA/July/PD/XGL/header/comb/eng-mob.gif" alt="Slide 1" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="https://digitalsathi.com/wp-content/uploads/2017/08/amazon-todays-deal-banner-expand-4.jpg" alt="Slide 2" />
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

import Image from "next/image";
import Link from "next/link";
import HeaderVideo from './components/video-index.jsx';
import IndexIntro from './components/Index-Introduction/IndexIntro.jsx';
import Grid4 from './components/grid-4/grid-4.jsx';
import SliderServices from './components/slider-services/sliderServices.jsx';
import SwiperComponent from './components/swiper-logos/swiperLogos.jsx';

import Spacer from './buttons/spacer.jsx';

import ContactTeam from './components/contact-draws/contact-team.jsx';

export default function HomePage() {
  return (
    <>
    <HeaderVideo />
    <div className="master__body">
    <IndexIntro />
    <Spacer className="spacer-l" />
    <Grid4 />
    <Spacer className="spacer-xl" />
    <SliderServices />
    <Spacer className="spacer-xl" />
    <ContactTeam />
    <Spacer className="spacer-xl" />
    <SwiperComponent />
    
    </div>
    
  </>
  );
}

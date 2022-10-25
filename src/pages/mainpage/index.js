import SliderMain from '../../components/slidermain/View'
import Services from '../../components/clients/View'
import Achievements from '../../components/achievements/View'
import Prices from '../../components/prices/View'
import Testimonials from '../../components/testimonials/View'
import Seo from '../../components/seo/View'
import Team from '../../components/team/View'


export default function MainPage(){
    return (
        <>
            <SliderMain />
            <Services observer={true} />
            <Achievements />
            <Prices observer={true} />
            <Testimonials observer={true} />
            <Seo observer={true} />
            <Team observer={true} />
        </>
    )
}
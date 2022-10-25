import ServicesFull from "../../components/services/BlockFull";
import Prices from "../../components/prices/View";
import Testimonials from "../../components/testimonials/View";


export default function ServicesPage(){
    return (
        <>
            <ServicesFull observer={true} />
            <Prices observer={true} />
            <Testimonials observer={true} />
        </>
    )
}
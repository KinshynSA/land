import Contacts from "../../components/contacts/View";
import Map from "../../components/contacts/Map";


export default function ContactsPage(){
    return (
        <>
            <Contacts observer={true} />
            <Map observer={true} />
        </>
    )
}
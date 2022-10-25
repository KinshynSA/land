import About from "../../components/about/View";
import Achievements from "../../components/achievements/View";
import Clients from "../../components/clients/View";
import TeamFull from '../../components/team/BlockFull';


export default function AboutPage(){
    return (
        <>
            <About observer={true} />
            <Achievements />
            <Clients observer={true} />
            <TeamFull observer={true} />
        </>
    )
}
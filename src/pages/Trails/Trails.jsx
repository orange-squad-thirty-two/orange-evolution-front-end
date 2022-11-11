import { useEffect, useState } from "react";
import Aside from "../../components/Aside/Aside"
import Header from "../../components/Header/Header";
import TrailSelected from "../../components/TrailSelected/TrailSelected";
import { useGlobalContext } from "../../context/GlobalProvider";
import trails from "../../database/trails"
import './style.css';

function Trails() {
    const { dataTrails } = useGlobalContext()
    const [trailsAll, setTrailAll] = useState(trails);

    useEffect(() => {
        if (dataTrails.data) {
            setTrailAll(dataTrails.data)
        }
    }, [setTrailAll, dataTrails])
    return (
        <>
            <Header trails={trailsAll} />
            <section className="container-trails relative flex">
                <div className="z-20">
                    <Aside trails={trailsAll} />
                </div>
                <div className="div-trail">
                    <TrailSelected trails={trailsAll} />
                </div>
            </section>
        </>

    )
}

export default Trails
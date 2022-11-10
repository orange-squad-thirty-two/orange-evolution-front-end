import Aside from "../../components/Aside/Aside"
import Header from "../../components/Header/Header";
import TrailSelected from "../../components/TrailSelected/TrailSelected";
import trails from "../../database/trails"
import './style.css';

function Trails() {
    return (
        <>
            <Header trails={trails} />
            <section className="container-trails relative flex">
                <div className="z-20">
                    <Aside trails={trails} />
                </div>
                <div className="div-trail">
                    <TrailSelected trails={trails} />
                </div>
            </section>
        </>

    )
}

export default Trails
import Aside from "../../components/Aside/Aside"
import Header from "../../components/Header/Header";
import trails from "../../database/trails"
import './style.css';

function Trails() {
    return (
        <>
            <Header trails={trails} />
            <section className="container-trails relative">
                <div className="z-20">

                    <Aside trails={trails} />
                </div>
                <div className="div-trail absolute right-5 top-2 z-10">

                </div>
            </section>
        </>

    )
}

export default Trails
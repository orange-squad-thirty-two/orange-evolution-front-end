import { useEffect, useState } from 'react';
import Aside from '../../components/Aside';
import Header from '../../components/Header';
import TrailSelected from '../../components/TrailSelected/index.jsx';
import { useGlobalContext } from '../../context/GlobalProvider';
import trails from '../../database/trails';
import './style.css';

function Trails() {
    const { dataTrails } = useGlobalContext();
    const [trailsAll, setTrailAll] = useState(trails);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (dataTrails.data) {
            setTrailAll(dataTrails.data);
        }
    }, [setTrailAll, dataTrails]);

    return (
        <>
            <Header trails={trailsAll} showMenu={showMenu} setShowMenu={setShowMenu} />
            <section className="container-trails relative flex">
                <div className={!showMenu ? "z-20" : "z-30"}>
                    <Aside trails={trailsAll} showMenu={showMenu} setShowMenu={setShowMenu} />
                </div>
                <div className="div-trail">
                    <TrailSelected trails={trailsAll} />
                </div>
            </section>
        </>
    );
}

export default Trails;

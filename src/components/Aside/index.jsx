import { NavLink } from "react-router-dom";
import './style.css';

function Aside({ trails }) {

    function handleActivePath(path) {
        if (window.location.pathname === path) {
            return true;
        }
        return false;
    }
    return (
        <aside>
            <div className='w-28 pl-4'>
                <button className="button-trails">
                    Trilhas
                </button>
                {trails.map(trail => {
                    return (
                        <NavLink
                            key={trail.id}
                            to={`/trails/${trail.id}`}
                        >
                            <button
                                className={
                                    handleActivePath(`/trails/${trail.id}`)
                                        ? "pl-3 is-active"
                                        : "pl-3 inactive"
                                }
                            >
                                {trail.nome.split(" ")[0]}
                            </button>
                        </NavLink>
                    )
                })}
            </div>
        </aside>
    )
}

export default Aside;
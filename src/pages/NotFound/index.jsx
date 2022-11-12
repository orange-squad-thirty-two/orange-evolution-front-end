import "./style.css";
import imageNotFound from '../../assets/images/not-found.svg'

function NotFound() {

    return (
        <div className="container-not-found">
            <div className="containers-childrens">

            </div>
            <div className="containers-childrens container-black">
                <img className="image-not-found "
                    src={imageNotFound} alt="imagem 2D de jovem perdido com mapa nas mãos" />

                <h1 className="title-not-found">Ops! Parece que você <br />se perdeu.</h1>
                <p className="description-not-found">Error 404, oops! Essa página não existe ou foi
                    <br />removida, por favor verifique sua conexão de internet</p>
            </div>
        </div>
    )
}

export default NotFound;
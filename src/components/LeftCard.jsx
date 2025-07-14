import './LeftCard.css'
import './CardCenter.css'

function LeftCard({title, text, image}){
    return (
        <span className="container-span left">
            <img className="imagem" src={image} alt="Foto mal carregada"/>
            <div className="container-text">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </span>
    )
}

export default LeftCard
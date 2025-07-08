import './RightCard.css'

function RightCard(ShortMessage, text) {

    return (
        <span className="container-span right">
            <img className="imagem" src="style/images/paparazzi.png" alt="Foto paparazzi"/>
            <div className="container-text">
                <h4>{ShortMessage}</h4>
                <p>{text}</p>
            </div>
        </span>
    )
}

export default RightCard
import NavBar from './components/NavBar.jsx'
import Counter from "./components/Counter.jsx";
import RightCard from "./components/RightCard.jsx";
import LeftCard from "./components/LeftCard.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <>
            <NavBar/>
            <Counter/>

            <RightCard image="/src/assets/Images/paparazzi.png" title="Você é minha Sabidinha" text="Você é a pessoa que me faz raciocinar e pensar no que eu quero. É o motivo pelo qual eu me esforço para tentar ser um homem melhor. Você é a pessoa que me motiva a aprender, para poder te ajudar."/>
            <LeftCard image="/src/assets/Images/chapter_1.png" title="Eu sou seu Cerérebro de algas" text="Eu sou a pessoa que serve para fazer as besteiras sobre as quais vamos rir depois. A pessoa que vai tentar fazer o máximo que puder para te fazer feliz. A pessoa que vai tentar te ajudar, mesmo sem fazer a mínima ideia do que está fazendo."/>
            <RightCard image="/src/assets/Images/rain.png" title="Você é minha paz" text="Apesar de você ser agitada, é a pessoa que traz paz à minha vida. É a pessoa que eu quero para o resto da minha vida. Nossa intimidade parece coisa de filme, e muitos casais têm inveja disso — inveja da harmonia tão grande que existe no nosso relacionamento."/>
            <LeftCard image="/src/assets/Images/couch.png" title="Eu sou seu Porto Seguro" text="Eu sou a pessoa que quer que você se sinta confortável em estar presente. Quero ser alguém que seja um lar para você — que, quando você precisar de algo, eu esteja aqui. Quando precisar desabafar, precisar de ajuda, de conselhos, ou de um ombro para chorar, quero ser a pessoa que você procure." />
            <RightCard image="/src/assets/Images/portaria.jpg" title="Você é meu abrigo" text="Você é quem eu preciso para me acalmar. Quando estou passando por algo tenso, é você quem eu procuro. Quando estou sufocado, é contigo que venho desabafar. Sei que, de certa forma, isso pode parecer egoísta e te deixar preocupada comigo — mas, ao mesmo tempo, isso mostra o quanto eu confio em você. Porque eu não consigo falar sobre isso com mais ninguém. Confio em você para ser quem eu sou de verdade, e para conseguir expressar, em palavras, aquilo que me pesa."/>
            <LeftCard image="/src/assets/Images/mirror_1.png" title="Você é minha perdição" text="Você é o motivo pelo qual eu vou para o inferno — e, com certeza, vou me esnobar para os demônios com um sorriso no rosto, porque vivi uma vida no paraíso, mesmo sem jamais ter visto os portões perolados do céu." />
            <RightCard image="/src/assets/Images/dark_couch.png" title="Eu sou seu prazer" text="Eu sou a pessoa que quer te dar prazer a todo momento — seja sexualmente, mentalmente ou de qualquer outra forma. Quero que você sinta prazer simplesmente em me ter por perto. Eu sou a pessoa que deseja te ajudar a perder seus medos. Me desculpa, se às vezes passo dos limites ou deixo tudo intenso demais. Mas saiba: eu nunca vou fazer nada que você não queira. Ainda assim… vou te provocar até você querer." />

            <Footer/>
        </>
    )
}

export default App

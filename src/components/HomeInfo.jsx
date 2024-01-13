import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'


const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hello, I am <span className="font-semibold">Alex</span> 👋
            <br />
            Aspiring Software Engineer from USA 🇺🇸
        </h1>
    ),
    2: (
        <InfoBox 
            text="Working to develop my skills through personal and class projects"
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
            text="Learning to program through doing! Here are some project that I've worked on"
            link="/projects"
            btnText="Projects"
         />
    ), 
    4: (
        <InfoBox 
            text="Looking for a dev? I'm just an email away!"
            link="/contact"
            btnText="Contact Me"
         />
    )
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null
}

export default HomeInfo
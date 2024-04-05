import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './alexa.png';
import SiriImage from './siri.png';
import CortanaImage from './cortana.png';

console.log(AlexaImage);
console.log(SiriImage);
console.log(CortanaImage);

function App(){
    return(
        <div>
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">Personal Digital Assistants</p>
                    {/* <p class="subtitle">Primary subtitle</p> */}
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                        <ProfileCard 
                        Title = "Alexa" 
                        handle = "@alexa99" 
                        image = {AlexaImage}
                        description="Alexa is made by Amazon, which is used for assisting" 
                        />
                        </div>
                        <div className="column is-4">
                        <ProfileCard 
                        Title = "Siri" 
                        handle = "@applesiri" 
                        image = {SiriImage} 
                        description="Siri is made by Apple, it the Famous one"
                        />
                        </div>
                        <div className="column is-4">
                        <ProfileCard 
                        Title = "Cortana" 
                        handle = "@cortana32" 
                        image = {CortanaImage} 
                        description="Cortana is developed by Microsoft."
                        /> 
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
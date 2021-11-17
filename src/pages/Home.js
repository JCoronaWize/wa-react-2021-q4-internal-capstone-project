import HeroSlider from "../components/HeroSlider"
import CardCaroussel from "../components/CardCaroussel"
import GridContainer from "../components/GridContainer"
const Home = () => {
    return(
        <div>
            <HeroSlider></HeroSlider>
            <CardCaroussel></CardCaroussel>
            <GridContainer theTitle="Featured Products"></GridContainer>
        </div>            
        )
}
export default Home
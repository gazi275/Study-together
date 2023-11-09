
import Animattion from "./Animattion";
import Banner from "./Banner";
import Faq from "./Faq";
import Footer from "./Footer";
import StaticCard from "./StaticCard";
import Team from "./Team";
import Why from "./Why";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Animattion></Animattion>
           
            <div className="container mx-auto">
            <StaticCard></StaticCard>
            </div>
            <Faq></Faq>
            <Why></Why>
            <Team></Team>
            <Footer></Footer>
         
            
        </div>
    );
};


export default Home;
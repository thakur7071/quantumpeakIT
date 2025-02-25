import Hero from "../Components/Hero/Hero"
import HomePageServices from "../Components/HomePageServices/HomePageServices"
import ChooseUs from "../Components/ChooseUs/ChooseUs"
import FeedBack from "../Components/FeedBack/FeedBack"

const Home = () => {
  return (
    <div>
      <Hero/>
      <HomePageServices/>
      <ChooseUs/>
      <FeedBack/>
    </div>
  )
}

export default Home

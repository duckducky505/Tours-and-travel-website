import Choose from "../Components/ChooseUs/Choose"
import HomeCompo from "../Components/Home/Home"
import Intro from "../Components/Introduction/Intro"
import Main from "../Components/Main/Main"

const HomePage = () => {
    return(
    <>
        <HomeCompo/>
        <Main/>
        <Intro/>
        <Choose/>
    </>
    )
}

export default HomePage;
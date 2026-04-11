import Banner from '../HomeLayout/Banner';
import AboutMe from '../HomeLayout/AboutMe';
import MySkills from '../HomeLayout/MySkills';
import Service from '../HomeLayout/Service';
import SkillsIcon from '../HomeLayout/SkillsIcon';
import MyProjects from '../HomeLayout/MyProjects';
import ContactMe from '../HomeLayout/ContactMe';
import Extra1 from '../Shared/Extra1';
import Extra2 from '../Shared/Extra2';
import Navbar from '../Navbar/Navbar';
import Achievement from '../HomeLayout/Achievement';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner/>
            <AboutMe/>
            <MySkills/>
            <SkillsIcon/>
            <Extra1/>
            <MyProjects/>
            <Extra2/>
            <Achievement/>
            <Service/>
            <ContactMe/>
        </div>
    );
};

export default Home;
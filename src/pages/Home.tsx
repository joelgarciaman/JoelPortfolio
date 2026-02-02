import MainLayout from '../layouts/MainLayout';
import Body from '../components/Body';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import AdditionalInfo from '../components/AdditionalInfo';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <MainLayout>
            <Body />
            <About />
            <Experience />
            <Projects />
            <AdditionalInfo />
            <Contact />
        </MainLayout>
    );
};

export default Home;

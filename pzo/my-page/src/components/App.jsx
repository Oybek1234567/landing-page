import Footer from "./web/footer";
import HeaderContent from "./web/headerContent";
import Main from "./web/main/main";
import Navbar from "./web/navbar";
const App = () => {
    return (
        <div className='max-w-[1140px] w-full ml-auto mr-auto'>
            <Navbar />
            <HeaderContent />
            <Main />
            <Footer />
        </div>
    );
};

export default App;

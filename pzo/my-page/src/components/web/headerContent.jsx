import HeaderContentImg from "../../../public/header-content.jpg";
import Line from "../../../public/line.png";
import BigLine from "../../../public/big-line.png";
import { Icons } from "../../assets/icons";
const HeaderContent = () => {
    return (
        <header className='absolute flex mt-[133px]'>
            <div>
                <h1 className='w-[480px] text-[36px] uppercase mt-[150px]'>
                    Start a profitable{" "}
                    <span className='text-[#437C9A]'> recycling business</span>{" "}
                    polymers with a payback period of 1 year
                </h1>
                <p className='w-[480px] text-[19px] text-[#545454] leading-[26.5px] mt-[16px]'>
                    Anim ipsum esse qui nostrud. Sint velit fugiat occaecat est
                    aliquip laboris amet qui amet nostrud. Sit minim
                    reprehenderit officia eu Lorem. Dolor labore incididunt
                    velit aliqua cupidatat Lorem et nisi voluptate officia
                    reprehenderit. Enim est velit consequat aute pariatur nulla.{" "}
                </p>
                <button className='uppercase w-[267px] h-[55px] bg-[#437C9A] text-white border-none mt-[42px] hover:opacity-80'>
                    find out the cost
                </button>
            </div>
            <div className='mt-[30px] h-[762px]'>
                <img src={HeaderContentImg} alt='Header Content Img' />
            </div>
            <div className='absolute mt-[450px] ml-[-120px]'>
                <img src={Line} alt='line' />
            </div>
            <div className='absolute ml-[1000px] mt-[-100px]'>
                <img src={BigLine} alt='line-two' />
            </div>
            <span className='absolute flex items-center mt-[800px]'>
                <Icons.location />
                <span className='ml-[7px]'>
                    Russia, Moscow region, Podolsk, st. Pleshcheevskaya, 34
                </span>
            </span>
        </header>
    );
};

export default HeaderContent;

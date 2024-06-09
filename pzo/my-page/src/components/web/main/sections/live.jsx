import LiveImg from "../../../../../public/live-img.png";
import LiveLine from "../../../../../public/live-line.png";
import LiveLineTwo from "../../../../../public/live-line-two.png";
import LiveTwo from "../../../../../public/live-img-two.png";
import LiveLineThree from "../../../../../public/live-line-three.png";
import LiveLineFour from "../../../../../public/live-line-four.png";
import VideosImg from "../../../../../public/videos.png";
import LiveLineFive from "../../../../../public/materials-line-five.png";
import LiveLineSix from "../../../../../public/materials-line-six.png";
const LiveSection = () => {
    return (
        <div className='absolute mt-[4377px]'>
            <p className='mt-[130px] ml-[617px] text-[36px] leading-[41px] font-[500] uppercase'>
                life cycle of raw materials
                <div className='w-[314px] h-[14px] bg-[#437C9A] ml-[270px] mt-[-20px]'></div>
            </p>
            <img
                src={LiveImg}
                alt='live-img'
                className='w-[1024px] h-[768px]  mt-[110px] '
            />
            <img
                src={LiveLine}
                alt='live-line'
                className='absolute ml-[-200px] mt-[-850px]'
            />
            <img
                src={LiveLineTwo}
                alt='live-line-two'
                className='absolute ml-[1176px] mt-[-600px]'
            />
            <div>
                <p className='mt-[150px] uppercase text-[36px] font-[300] text-center '>
                    contact{" "}
                    <span className='text-[#437C9A] font-[500]'>right now</span>{" "}
                    and get a <br /> detailed calculation <br /> of your polymer
                    processing business
                </p>
                <img
                    src={LiveTwo}
                    alt='live-img-two'
                    className=' w-[1000px] h-[800px] mt-[-240px] ml-[150px]'
                />
                <button className='absolute w-[267px] h-[55px] bg-[#437C9A] text-white uppercase mt-[-230px] ml-[400px] hover:opacity-80'>
                    Find out the cost
                </button>
            </div>
            <img
                src={LiveLineThree}
                alt='live-line-three'
                className='mt-[-700px] ml-[-200px]'
            />
            <img
                src={LiveLineFour}
                alt='live-line-four'
                className='mt-[-1000px] ml-[1125px]'
            />
            <img
                src={VideosImg}
                alt='videos'
                className='w-[1000px] ml-[70px] mt-[467px]'
            />
            <img src={LiveLineFive} alt='line-five' className="absolute mt-[-500px] ml-[-200px]"/>
            <img src={LiveLineSix} alt='line-six' className="absolute mt-[-600px] ml-[1045px]"/>
        </div>
    );
};

export default LiveSection;

import AdvantageImg from "../../../../../public/advantage-img.png";
import AdvantageLine from "../../../../../public/advantage-line.png";
import AdvantageLineTwo from "../../../../../public/advantage-line-two.png";
const AdvantageSection = () => {
    return (
        <div className='absolute mt-[1701px]'>
            <p className='mt-[130px] text-[36px] leading-[41px] font-[500]'>
                ADVANTAGES
                <div className='w-[114px] h-[14px] bg-[#437C9A] ml-[-10px] mt-[-20px]'></div>
            </p>
            <img src={AdvantageImg} alt="img" className="w-[854px] h-[757px] object-cover" />
            <img src={AdvantageLine} alt="line"  className="absolute mt-[-300px] ml-[-190px]"/>
            <img src={AdvantageLineTwo} alt="line2"  className="absolute mt-[-600px] ml-[1090px]"/>
        </div>
    );
};

export default AdvantageSection;
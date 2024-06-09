import InfoImg from "../../../../../public/info-img.png";
import InfoImgTwo from "../../../../../public/info-img-two.png";
import InfoLine from "../../../../../public/info-line.png";
import InfoLineTwo from "../../../../../public/info-line-two.png";

const InfoSection = () => {
  return (
      <div className='absolute mt-[2513px]'>
          <p className='ml-[900px] mt-[180px] text-[36px] leading-[41px] font-[500] uppercase'>
              Characteristics
              <div className='w-[114px] h-[14px] bg-[#437C9A] ml-[-10px] mt-[-20px]'></div>
          </p>
          <p className='max-w-[268px] text-[24px] ml-[650px] mt-[120px] font-[300]'>
              Capacity 800.0 kg/h Installed capacity 126.1 kW Practical capacity
              88.27 kW The line includes 10 units
          </p>
          <img
              src={InfoImgTwo}
              alt='info-img-two'
              className='absolute mt-[20px] ml-[400px]'
          />
          <img
              src={InfoImg}
              alt='info-img'
              className='w-[1000px] h-[800px] ml-[40px] mt-[-190px]'
          />
          <img src={InfoLine} alt='line' className="absolute ml-[-190px] mt-[-1000px]"/>
          <img src={InfoLineTwo} alt='line-two' className="absolute ml-[995px] mt-[-600px]"/>
      </div>
  );
}

export default InfoSection;

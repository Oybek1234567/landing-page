import { Icons } from "../../../../assets/icons";
import PartnersImg from "../../../../../public/partners-img.png";
import PartnersLine from "../../../../../public/partners-line.png";
import PartnersLineTwo from "../../../../../public/partners-line-two.png";
import Contact from "../../../../../public/contact.jpg";

const PartnersSection = () => {
  return (
      <div className='absolute mt-[8479px]'>
          <p className='ml-[700px] text-[36px] mt-[100px]'>
              What do we offer our partners?
          </p>
          <div className='flex items-center mt-[114px]'>
              <Icons.bank />
              <span className='pl-[17px] text-[24px]'>
                  High quality equipment
              </span>
          </div>
          <div className='flex items-center mt-[34px]'>
              <Icons.target />
              <span className='pl-[17px] text-[24px]'>
                  Modern manufacturing standards
              </span>
          </div>
          <div className='flex items-center mt-[34px]'>
              <Icons.techinc />
              <span className='pl-[17px] text-[24px]'>
                  Variety of technical solutions
              </span>
          </div>
          <div className='flex items-center mt-[44px]'>
              <Icons.equipments />
              <span className='pl-[17px] text-[24px]'>
                  Development and implementation of new <br /> equipment
                  according to the dealer's specifications
              </span>
          </div>
          <div className='mt-[-260px] ml-[900px] text-[36px]  leading-[41px] font-[500]'>
              <span className='ml-[120px]'>Technologies</span>
              <div className='w-[104px] h-[14px] bg-[#437C9A] ml-[220px] mt-[-20px]'></div>
              <p className='ml-[210px] mt-[5px]'>Service</p>{" "}
              <p className='ml-[205px] mt-[5px]'>Training</p>{" "}
              <p className='ml-[155px] mt-[5px]'>Profitability</p>
          </div>
          <button className='relative z-10 w-[238px] h-[55px] ml-[1000px] mt-[72px] uppercase bg-[#437C9A] text-white hover:opacity-80'>
              become a leader
          </button>
          <img
              src={PartnersImg}
              alt='partners-img'
              className='absolute mt-[-350px]'
          />
          <img src={PartnersLine} alt='partners-line' className="absolute mt-[-400px] ml-[-200px]"/>
          <img src={PartnersLineTwo} alt='partners-line-two' className="absolute mt-[-450px] ml-[1107px]" />
          <img src={Contact} alt="contact-img" className="absolute object-cover mt-[300px] h-full"/>
      </div>
  );
}

export default PartnersSection

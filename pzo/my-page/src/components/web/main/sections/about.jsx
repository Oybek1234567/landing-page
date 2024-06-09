import AboutImg from '../../../../../public/section-about-img.jpg' 
import AboutImgTwo from "../../../../../public/section-about-img-two.jpg"; 
import Line from "../../../../../public/about-line.png"
import LineTwo from "../../../../../public/about-line-two.png";
const AboutSection = () => {
  return (
      <section className='absolute mt-[1074px]' id='about'>
          <p className=' ml-[1057px] pt-[10px] text-[36px] leading-[41px] font-[500] '>
              ABOUT{" "}
              <div className='w-[87px] h-[14px] bg-[#437C9A] ml-[40px] mt-[-20px]'></div>
          </p>
          <div>
              <span className='absolute ml-[50px]'>
                  <img src={AboutImg} alt='about img' />
              </span>
              <span className='absolute z-[-1] mt-16'>
                  <img src={AboutImgTwo} alt='about img two' />
              </span>
          </div>
          <div>
              <p className='w-[600px] text-right ml-[580px] text-[#545454] mt-[80px] text-[16px] font-light'>
                  Commodo ullamco cillum elit laborum nulla elit fugiat sit duis
                  qui consectetur minim. Deserunt ut exercitation aute duis ea
                  deserunt nisi nisi laboris tempor culpa. Laborum in id anim id
                  do eiusmod magna adipisicing duis quis fugiat. Commodo et
                  magna labore excepteur adipisicing aliquip occaecat culpa
                  deserunt labore non consectetur. Ea deserunt elit sint ex eu.
                  Aute eiusmod reprehenderit mollit veniam ea cillum. Voluptate
                  nisi sunt sint ullamco cillum ipsum sit fugiat aute id minim
                  minim. Deserunt excepteur laboris ea irure nostrud Lorem nulla
                  deserunt ullamco consequat. Elit ipsum est quis minim
                  excepteur id in enim in aliqua reprehenderit deserunt sint
                  anim. Excepteur sunt nisi eiusmod enim incididunt ipsum
                  aliquip ut et Lorem ipsum quis pariatur adipisicing.
              </p>
          </div>
          <div className='flex ml-[740px] mt-[100px]'>
              <div>
                  <p className='ml-[20px]'>Et cillum</p>
                  <span className='absolute border-[5px] border-[#437C9A] py-[30px] px-[20px] mt-[10px] text-[36px] text-[#437C9A]'>
                      157
                  </span>
              </div>
              <div className='ml-[100px]'>
                  <p className='ml-[20px]'>Et cillum</p>
                  <span className='absolute border-[5px] border-[#437C9A] py-[30px] px-[20px] mt-[10px] text-[36px] text-[#437C9A]'>
                      80%
                  </span>
              </div>
              <div className='ml-[100px]'>
                  <p className='ml-[20px]'>Et cillum</p>
                  <span className='absolute border-[5px] border-[#437C9A] py-[30px] px-[20px] mt-[10px] text-[36px] text-[#437C9A]'>
                      323
                  </span>
              </div>
          </div>
          <div>
              <img src={Line} alt='line about'  className='absolute z-[-2] ml-[-160px] mt-[-400px]'/>
              <img src={LineTwo} alt='line about two'  className='absolute ml-[1216px] mt-[-500px]'/>
          </div>
      </section>
  );
}

export default AboutSection

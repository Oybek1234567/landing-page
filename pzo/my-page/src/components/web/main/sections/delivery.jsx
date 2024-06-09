import Map from '../../../../../public/map.png'
import DeliveryLine from "../../../../../public/delivery-line.png";
import DeliveryLineTwo from "../../../../../public/delivery-line-two.png";

const DeliverySection = () => {
  return (
      <div className='absolute mt-[6924px]'>
          <p className='mt-[130px] text-[36px] leading-[41px] uppercase font-[500]'>
              delivery
              <div className='w-[114px] h-[14px] bg-[#437C9A] ml-[-10px] mt-[-20px]'></div>
          </p>
          <p className='absolute max-w-[613px] text-[#545454] mt-[95px]'>
              Commodo ullamco cillum elit laborum nulla elit fugiat sit duis qui
              consectetur minim. Deserunt ut exercitation aute duis ea deserunt
              nisi nisi laboris tempor culpa. Laborum in id anim id do eiusmod
              magna adipisicing duis quis fugiat. Commodo et magna labore
              excepteur adipisicing aliquip occaecat culpa deserunt labore non
              consectetur. Ea deserunt elit sint ex eu. Aute eiusmod
              reprehenderit mollit veniam ea cillum. Voluptate nisi sunt sint
              ullamco cillum ipsum sit fugiat aute id minim minim. Deserunt
              excepteur laboris ea irure nostrud Lorem nulla deserunt ullamco
              consequat. Elit ipsum est quis minim excepteur id in enim in
              aliqua reprehenderit deserunt sint anim. Excepteur sunt nisi
              eiusmod enim incididunt ipsum aliquip ut et Lorem ipsum quis
              pariatur adipisicing.
          </p>
          <button className='absolute w-[356px] h-[55px] bg-[#437C9A] text-white uppercase mt-[436px] hover:opacity-80'>
              find out the cost of delivery
          </button>
          <img src={Map} alt='map' className='mt-[-100px] ml-[375px]' />
          <img src={DeliveryLine} alt='delivery-line' className='absolute ml-[-200px] mt-[-100px]'/>
          <img src={DeliveryLineTwo} alt='delivery-line-two'  className='absolute ml-[1056px] mt-[-200px]'/>
      </div>
  );
}

export default DeliverySection

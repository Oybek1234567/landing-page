import DealerImg from "../../../../../public/dealer-img.png";

const DealerSection = () => {
    return (
        <div className='absolute mt-[7584px]'>
            <p className='mt-[130px] ml-[888px] text-[36px]  leading-[41px] uppercase font-[500]'>
                become a dealer
                <div className='w-[144px] h-[14px] bg-[#437C9A] ml-[180px] mt-[-20px]'></div>
            </p>
            <h3 className='absolute max-w-[617px] text-[32px] mt-[100px]'>
                We invite dealers to cooperation for sale polymer equipment
            </h3>
            <p className='absolute max-w-[617px] text-[#545454] mt-[300px] ml-[300px] text-[20px] '>
                We are a Russian manufacturer and specialize in the production
                of high-quality equipment for the manufacture and processing of
                polymer material, which is subsequently reused in many
                industries.
            </p>
            <img
                src={DealerImg}
                alt='dealer-img'
                className='ml-[400px] mt-[70px]'
            />
            <div className='flex items-center'>
                <div className=' uppercase ml-[200px] mt-[-70px]'>
                    <div className='w-[123px] h-[123px] bg-[#437C9A] text-white pt-[31px] pl-[25px] text-[36px] '>
                        200+
                    </div>
                    <span className='absolute ml-[-10px] mt-[30px] font-[300] '>
                        equipment items
                    </span>
                </div>
                <div className=' uppercase ml-[200px] mt-[-70px]'>
                    <div className='w-[123px] h-[123px] bg-[#437C9A] text-white pt-[31px] pl-[35px] text-[36px] '>
                        13
                    </div>
                    <span className='absolute max-w-[215px] text-center ml-[-40px] mt-[30px] font-[300] '>
                        Mastered product categories
                    </span>
                    <div className='uppercase ml-[300px] mt-[-120px]'>
                        <div className='w-[123px] h-[123px] bg-[#437C9A] text-white pt-[31px] pl-[25px] text-[36px] '>
                            30+
                        </div>
                        <span className='absolute max-w-[215px] text-center mt-[30px] ml-[-40px] font-[300] '>
                            Equipment models available
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealerSection;

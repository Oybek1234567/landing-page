import MaterialsImg from "../../../../../public/materials-img.jpg";
import Two from "../../../../../public/02.png";
import Three from "../../../../../public/03.png";
import { Icons } from "../../../../assets/icons";
import MaterialsLine from "../../../../../public/materials-line.png";
import MaterialsLineTwo from "../../../../../public/materials-line-two.png";

const MaterialsSection = () => {
    return (
        <div className='absolute mt-[3578px]'>
            <p className='mt-[130px] text-[36px] leading-[41px] font-[500]'>
                MATERIALS
                <div className='w-[114px] h-[14px] bg-[#437C9A] ml-[-10px] mt-[-20px]'></div>
            </p>
            <div>
                <Icons.o1 className='mt-[120px] ml-[-30px]' />
                <span className='absolute mt-[-10px] ml-[-4px]'>
                    <Icons.line />
                </span>
                <p className='uppercase text-[#437C9A] ml-4 mt-[-10px] text-[24px]'>
                    Plastic
                </p>
                <p className='max-w-[305px] text-[12px] ml-4'>
                    Quis reprehenderit fugiat voluptate excepteur dolor
                    incididunt velit consectetur nisi esse eu nostrud. Sint ut
                    in adipisicing culpa tempor mollit. Qui ad elit ullamco
                    eiusmod amet nisi veniam reprehenderit culpa non proident
                    incididunt adipisicing ut.
                </p>
                <div className='mt-[60px]'>
                    <img
                        src={Two}
                        alt='two'
                        className='absolute ml-[-40px] mt-[20px]'
                    />
                    <p className='uppercase ml-4 mt-[-10px] text-[24px]'>
                        film
                    </p>
                    <p className='max-w-[305px] text-[12px] ml-4'>
                        Quis reprehenderit fugiat voluptate excepteur dolor
                        incididunt velit consectetur nisi esse eu nostrud. Sint
                        ut in adipisicing culpa tempor mollit. Qui ad elit
                        ullamco eiusmod amet nisi veniam reprehenderit culpa non
                        proident incididunt adipisicing ut.
                    </p>
                </div>
                <div className='mt-[60px]'>
                    <img
                        src={Three}
                        alt='two'
                        className='absolute ml-[-40px] mt-[20px]'
                    />
                    <p className='uppercase ml-4 mt-[-10px] text-[24px]'>
                        paper
                    </p>
                    <p className='max-w-[305px] text-[12px] ml-4'>
                        Quis reprehenderit fugiat voluptate excepteur dolor
                        incididunt velit consectetur nisi esse eu nostrud. Sint
                        ut in adipisicing culpa tempor mollit. Qui ad elit
                        ullamco eiusmod amet nisi veniam reprehenderit culpa non
                        proident incididunt adipisicing ut.
                    </p>
                </div>
            </div>
            <img
                src={MaterialsImg}
                alt='img'
                className='ml-[500px] mt-[-470px]'
            />
            <div className='flex ml-[800px]'>
                <Icons.fillSquare className='mt-[20px] cursor-pointer' />
                <Icons.square className='mt-[20px] ml-[15px] cursor-pointer' />
                <Icons.square className='mt-[20px] ml-[15px] cursor-pointer' />
            </div>
            <img src={MaterialsLine} alt='materials-line' className="absolute mt-[-650px] ml-[-200px]"/>
            <img src={MaterialsLineTwo} alt='materials-line-two' className="absolute z-[-1] mt-[-650px] ml-[1047px]"/>
        </div>
    );
};

export default MaterialsSection;

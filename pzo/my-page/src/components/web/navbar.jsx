import Logo from "../../../public/logo.svg";
import { Icons } from "../../assets/icons";
const Navbar = () => {
    return (
        <nav className='fixed flex shadow-md z-10 justify-between items-center h-[103px] pt-[12px] pb-[11px] uppercase bg-white'>
            <a href="/">
            <img src={Logo} alt='logo' className="ml-[40px]"/>
            </a>
            <ul className='flex ml-[82px]'>
                <li className='mr-[22px]'>
                    <a href='#about'>About us</a>
                </li>
                <li className='mr-[22px]'>
                    <a href='#'>Equipment</a>
                </li>
                <li className='mr-[22px]'>
                    <a href='#'>Materials</a>
                </li>
                <li className='mr-[22px]'>
                    <a href='#'>Delivery</a>
                </li>
                <li className='mr-[22px]'>
                    <a href='#'>Dealers</a>
                </li>
                <li className='mr-[22px]'>
                    <a href='#'>Contacts</a>
                </li>
            </ul>
            <span className='flex mr-[147px]'>
                <Icons.mail />
                <span className='ml-2'>line@p-z-o.com</span>
            </span>
        </nav>
    );
};

export default Navbar;

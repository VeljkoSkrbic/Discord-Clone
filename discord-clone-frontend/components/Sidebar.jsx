// import icon from '/assets/icons/icon.png';
import SideBarIcon from './SideBarIcon';

function Sidebar () {
    return (
        <div className="m-top-0 m-left-0 h-screen w-[100%] m-0 bg-primary text-secondary shadow">
            {/* <img src='/assets/icons/icon.png'/> */}
            <SideBarIcon icon='/assets/icons/icon.png'/>
        </div>
    )

}
export default Sidebar;
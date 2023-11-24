function SideBarIcon ({icon}) {
    return(
    <div className="sidebar-icon rounded-full">
        <img src={icon} className="pb-2 rounded-2xl"/>
        <hr></hr>
        <img src={icon} className="pb-2 pt-2 rounded-full"/>
        <img src={icon} className="pb-2 rounded-full"/>
    </div>
    
    )
};
export default SideBarIcon;
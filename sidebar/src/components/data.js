import { FiSettings, FiPower } from "react-icons/fi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdDashboard,MdGridOn,MdTimer,MdOutlineGroupAdd,MdPlaylistAdd,MdArchive,MdMiscellaneousServices } from "react-icons/md";
import { FaUserFriends,FaDollarSign ,FaKey,FaUser} from "react-icons/fa";
import { RiRidingLine,RiAlertFill } from "react-icons/ri";
import { BsGrid3X3GapFill,BsChevronRight } from "react-icons/bs";

 let dataArr = [
    {lefticon: <MdDashboard/> , title: "Dashboard"},
    {lefticon: <MdGridOn/> , title: "System", righticon:<BsChevronRight/> },
    {lefticon: <MdTimer/> , title: "Rentals"},
    {lefticon: <MdOutlineGroupAdd/> , title: "Approval list" , righticon:<BsChevronRight/>},
    {lefticon: <FaUserFriends/> , title: "User Management", righticon:<BsChevronRight/>},
    {lefticon: <RiRidingLine/> , title: "Asset Management" , righticon:<BsChevronRight/>},
    {lefticon: <RiAlertFill/> , title: "Alarms" , righticon:<BsChevronRight/>},
    {lefticon: <MdPlaylistAdd/> , title: "Guide Screens" , righticon:<BsChevronRight/>},
    {lefticon: <MdArchive/> , title: "Archived Data" , righticon:<BsChevronRight/>},
    {lefticon: <FaDollarSign/> , title: "Payouts"},
    {lefticon: <AiFillQuestionCircle/> , title: "Need help"},
 ];

 export default dataArr;
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdDashboard,MdGridOn,MdTimer,MdOutlineGroupAdd,MdPlaylistAdd,MdArchive } from "react-icons/md";
import { FaUserFriends,FaDollarSign } from "react-icons/fa";
import { RiRidingLine,RiAlertFill } from "react-icons/ri";
import { BsChevronRight } from "react-icons/bs";

//  importing react icons for each icons

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
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";

const DashboardLayout=({
    children
}:{
    children: React.ReactNode;
}) =>{
    return(
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-orange-700 ">
                <div><Sidebar/></div>
            </div>   
            <main className="md:pl-72"> <Navbar/> {children}</main>  
        </div>
    )
}

export default DashboardLayout;
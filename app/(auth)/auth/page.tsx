import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
const AuthPage = () => {
    return (<div className="font-sans justify-center  justify-items-center">
    <h1 className="m-[50px] " >login</h1>
    <div>HELLO FROM AUTH PAGE</div>
    <DropdownMenu>
  <DropdownMenuTrigger className=" bg-slate-200 ">Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
    <DropdownMenuItem>log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </div> );
}
 
export default AuthPage;
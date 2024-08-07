
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  import  { LayoutDashboard , Newspaper , Folder , CreditCard , Settings, User} from 'lucide-react'
  import Link from "next/link";



const Sidebar = () => {
    return ( <div>
        <Command className="bg-secondary rounded-none">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <LayoutDashboard className="mr-2 h-4 w-4" />
        <Link href='/'>Dashboard</Link>
      </CommandItem>
      <CommandItem>
      <Newspaper className="mr-2 h-4 w-4" />
      <Link href='/posts'>posts</Link>
      </CommandItem>
      <CommandItem>
      <Folder className="mr-2 h-4 w-4" />
      <Link href='/'>Categories</Link>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <User className="mr-2 w-4 h-4" />
        <span>Profile</span> 
        <CommandShortcut>XP</CommandShortcut>
      </CommandItem>
      <CommandItem>
      <CreditCard className="mr-2 w-4 h-4" />
        <span>billing</span> 
        <CommandShortcut>XB</CommandShortcut>
      </CommandItem>
      <CommandItem>       
        <Settings className="mr-2 w-4 h-4" />
        <span>Sttings</span> 
        <CommandShortcut>XS</CommandShortcut>
        </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

    </div> );
}
 
export default Sidebar;
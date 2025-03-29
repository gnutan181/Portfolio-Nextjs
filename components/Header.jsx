import Link from "next/link"
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = async()=>{
return (
  
    <header className="py-3 sm:py-3 text-white mx-auto">
 <div className="container flex justify-between items-center py-3">
<Link href='/'>
<h1 className="text-4xl font-semibold px-2 xl:px-10 ">
Nutan<span className="text-accent">.</span>
</h1>
</Link>
<div className="hidden lg:flex items-center gap-8">
<Nav />
<Link href="/contact">
<Button className="text-black">Hire me</Button>
</Link>
</div>
{/* mobile */}
<div className="xl:hidden lg:hidden">
<MobileNav />
</div>

 </div>
    </header>
  
)
}

export default Header;
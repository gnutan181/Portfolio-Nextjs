import Link from "next/link"
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = async()=>{
return (
  
    <header className="py-5 xl:py-8 sm:py-3 text-white">
 <div className="container mx-auto flex justify-around items-center py-3">
<Link href='/'>
<h1 className="text-4xl mx-auto font-semibold">
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
<div className="xl:hidden">
<MobileNav />
</div>

 </div>
    </header>
  
)
}

export default Header;
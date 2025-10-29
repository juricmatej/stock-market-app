import Link from "next/link";
import  Image from "next/image";
import NavItems from "../NavItems";

const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
            <Link href="/">
            <Image src="/assets/icons/logo.svg" alt="Lgoo" width={140} height={32} className="h-8 w-auto cursor-pointer"></Image>
            </Link>
            <nav className="hidden sm:block">
                <NavItems />
            </nav>

            </div>
        </header>

    )
}


export default Header
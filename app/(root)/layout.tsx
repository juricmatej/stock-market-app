import Header from "@/components/ui/Header";

const Layout = ({ children}: {children : React.ReactNode}) => {
    return ( 
        <main className="min-h-screen text-gray-400">
            <Header />
            <div className="containder py-10">
                {children}
            </div>

        </main>

     );
}
 

export default Layout
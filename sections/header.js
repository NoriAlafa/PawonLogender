import Logo from "../components/Logo";
import {useTheme} from "next-themes";
import{SunIcon ,MoonIcon} from "@heroicons/react/solid";
import {useState, useEffect} from "react";

const Header = () => {
    const [mounted,setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true);
    },[]);

    const {SystemTheme , theme , setTheme} = useTheme();
    const renderChange = () => {
        if(!mounted) return null;
        const currentTheme = theme === "system" ? SystemTheme : theme;

        if(currentTheme === "dark"){
            return(
                <SunIcon className="w-8 h-8 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
            )
        }else{
            return(
                <MoonIcon className="w-8 h-8 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
            )
        }
        
    };
    return (
      <nav className="flex sm:justify-center space-x-4">
         <Logo/>
        {[
          ['Home', '/dashboard'],
          ['Team', '/team'],
          ['Projects', '/projects'],
          ['Reports', '/reports'],
          
        ].map(([title, url]) => (
          <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
        ))}
        {/* Logo */}
        {renderChange()}
      </nav>
      
    );
  };
 


export default Header;
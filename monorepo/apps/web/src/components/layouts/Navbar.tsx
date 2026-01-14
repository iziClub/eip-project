"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function Navbar() {
    const pathname = usePathname();
    const { user } = useAuth();
    
    const navigation = [
        { name: 'Tableau de bord', href: '/dashboard', icon: '' },
        { name: 'Événements', href: '/events', icon: '' },
        { name: 'Statistiques', href: '/statistics', icon: '' },
        { name: 'Vitrine', href: '/vitrine', icon: '' },
        { name: 'Membre', href: '/members', icon: '' },
    ];
    
    return (
        <nav className="fixed h-screen w-[275px] bg-white flex flex-col px-4 py-5 border-r justify-between">
            <div className="">
                <img src="/logo/logo-bw.png" alt="Logo" className="w-2/3" />
                <div className="pt-20 space-y-2">
                    {navigation.map(({ name, href }) => {
                        const isActive = pathname === href;
                        return (
                            <Link 
                                key={name} 
                                href={href} 
                                className={`
                                    block py-3 px-4 rounded-lg font-medium transition-all duration-200 text-sm
                                    ${isActive 
                                        ? 'bg-primary text-white shadow-md' 
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                    }
                                `}
                            >
                                {name}
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-row gap-2">
                    <span className="w-[50px] aspect-square bg-grey-3 rounded-full"></span>
                    <div className="flex flex-col">
                        <span className="text-sm text-black">{user?.firstName} {user?.firstName}</span>
                        <span className="text-xs text-grey-3 font-medium">AS talange</span>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </nav>
    );
}
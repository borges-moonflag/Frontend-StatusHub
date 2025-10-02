import SettingIcons from "../../components/Icons/SettingsIcon";
import LogoutIcon from "../../components/Icons/LogoutIcon";
import HelpIcon from "../../components/Icons/HelpIcon";
import DashboardIcon from "../../components/Icons/DashboardIcon";
import Link from "next/link";

export default function Perfil() {
    return (
        <>
            <section className="w-dvw min-h-dvh bg-[var(--background)]">
                <main className="w-fit min-h-full">
                    <div className="border-gray-700 border-r-2">
                        <div className="py-6 px-6 border-gray-700 border-b-2">
                        <img src="/moonflag-logo.webp" alt="Logo da Moonflag" />
                    </div>
                    <div className="flex flex-col justify-between px-6 py-6 text-[var(--primary-color)] ">
                        <div>
                            <p className="pb-1 font-bold">Menu</p>
                            <Link href="/dashboard" className="flex items-center gap-2 p-2 rounded cursor-pointer transition-all duration-300 hover:bg-[var(--primary-color)]/30"><DashboardIcon className="w-5 h-5" fillColor="fill-[var(--primary-color)]"/> Dashboard</Link>
                        </div>
                        <div className="">
                            <h1 className="flex items-center gap-1 p-2 rounded cursor-pointer transition-all duration-300 hover:bg-[var(--primary-color)]/30"><SettingIcons className="w-6 h-6" fillColor="fill-[var(--primary-color)]"/> Configurações</h1>
                            <div className="flex flex-col gap-2">
                                <h1>Ajuda</h1>
                                <h1>Ajuda</h1>
                            <h1 className="flex items-center gap-2 p-2 rounded cursor-pointer transition-all duration-300 hover:bg-[var(--primary-color)]/30"><HelpIcon className="w-5 h-5" fillColor="fill-[var(--primary-color)]"/> Ajuda</h1>
                            <h1 className="flex items-center gap-1 p-2 rounded cursor-pointer transition-all duration-300 hover:bg-[var(--primary-color)]/30"><LogoutIcon className="w-6 h-6" fillColor="fill-[var(--primary-color)]"/> Sair</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </main>
            </section>
        </>
    )
}
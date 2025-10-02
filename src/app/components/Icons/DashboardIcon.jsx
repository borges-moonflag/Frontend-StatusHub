export default function DashboardIcon({className, fillColor}) {
    return (
        <>
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <path d="M3.66245 0.396484V2.06251H5.88381V0.396484H3.66245ZM3.66245 5.39456H5.88381V2.61785H3.66245V5.39456ZM0.885742 5.39456H3.10711V3.72853H0.885742V5.39456ZM0.885742 3.17319H3.10711V0.396484H0.885742V3.17319Z" className={`${fillColor}`} />
            </svg>
        </>
    )
}
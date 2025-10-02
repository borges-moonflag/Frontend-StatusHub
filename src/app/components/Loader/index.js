export default function Loader() {

    return (
        <>
            <div className="w-full h-full bg-[var(--background-opacity)] absolute flex justify-center items-center">
                <div className="flex flex-col justify-center items-center ">
                    <div className="spinner-wrapper">
                        <div className="spinner">
                            <div className="sk-folding-cube">
                                <div className="sk-cube1 sk-cube"></div>
                                <div className="sk-cube2 sk-cube"></div>
                                <div className="sk-cube4 sk-cube"></div>
                                <div className="sk-cube3 sk-cube"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

function Language() {
    const [mainImgPath, setmainImgPath] = useState("")

    const laPath = "images/la-circle.png"
    const enPath = "images/en-circle.png"
    const [isCheckLang, setisCheckLag] = useState(false)
    function toggleCheckLang() {
        setisCheckLag(!isCheckLang)
    }
    function changeLang() {
        setisCheckLag(!isCheckLang);

    }
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        if (t("change_language") === "EN") {
            setmainImgPath(enPath)
        } else {
            setmainImgPath(laPath)
        }
    }, [t("change_language")])

    return (
        <div className="w-20 mr-3 flex justify-center">
            <button onClick={toggleCheckLang} className="flex items-end">
                <img className="w-7" src={mainImgPath} alt="" />
                <span className="ml-2 font-medium text-white">{t("change_language")}</span>
            </button>
            <div className={`${isCheckLang ? 'block' : 'hidden'} w-32 h-auto bg-transparent absolute top-12 flex justify-center  `}>
                <div className="w-3 h-3 bg-white rotate-45 absolute"></div>
                <div className="w-full h-auto bg-white mt-1  rounded-md shadow-2xl p-2 flex flex-col ">
                    <button onClick={() => {
                        changeLang(),
                            changeLanguage("lo")
                    }}
                        className="flex items-end p-1 mt-2 hover:bg-slate-200 rounded-md">
                        <img className="w-7" src={laPath} alt="" />
                        <span className="ml-2 font-medium text-[#3a393a]"> ລາວ</span>
                    </button>
                    <button onClick={() => {
                        changeLang(),
                            changeLanguage("en")
                    }}
                        className="flex items-end p-1 hover:bg-slate-200 rounded-md">
                        <img className="w-7 " src={enPath} alt="" />
                        <span className="ml-2 font-medium text-[#3a393a]"> EN</span>
                    </button>
                </div>
            </div>

        </div>
        // [#3a393a]
    )
}

export default Language
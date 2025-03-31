import { useEffect, useState } from "react";
import { GetTableByStatusBusyService } from "../../../services/sale/get-table-by-status-busy";
import { createIncTableErrors, generalErrors } from "../../../utils/error";
import { TableIncludedService } from "../../../services/sale/table-included";
import { alertSuccess } from "../../../utils/alert";
import { useNavigate } from "react-router-dom";
import LoadingMessage from "../../../utils/loadingMessage";
import { useAuth } from "../../../context/context";
import { useTranslation } from "react-i18next";

interface TableincludedProps {
    handleClickCloseModle: () => void;
    table_ID: String;

}

const Tableincluded: React.FC<TableincludedProps> = ({ handleClickCloseModle, table_ID }) => {
    const [items, setItems] = useState<any[]>([]);
     const { t } = useTranslation();
    const navigate = useNavigate();
    const [loadingMessage, setLoadingMessage] = useState(false);
    const [loadingMessageText, setLoadingMessageTesxt] = useState("");
    const { token } = useAuth();
    const handleClick = async (tableIncluded: string) => {
        try {
            setLoadingMessage(true)
            setLoadingMessageTesxt("ກຳລັງລວມໂຕະ")
            let newTable_ID = String(table_ID);
            let newTableIncluded = String(tableIncluded)
            const res = await TableIncludedService.TableIncluded(newTable_ID, newTableIncluded, token || "")
            if (res.status === "200") {
                alertSuccess(navigate, '/sale', (t("included")), 'success');
            }
        } catch (error) {
            createIncTableErrors(error)
        } finally {
            setLoadingMessage(false)
            setLoadingMessageTesxt("")
        }
    }
    const fetchData = async () => {
        try {
            const res = await GetTableByStatusBusyService.GetTableByStatusBusy(token||"");
            if (res.status === "200") {
                setItems(res.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            generalErrors(error)
        }

    }
    useEffect(() => { fetchData(); }, []);
    return (
        <div className="flex flex-col justify-center items-center ">
            {loadingMessage && <LoadingMessage text={loadingMessageText} />}
            <div className="flex justify-between items-center border-b-2 w-full">
                <p className="text-2xl pb-2 text-orange-500 font-semibold">
                   {t("Select")} {t("Table")}
                </p>
                <button
                    onClick={handleClickCloseModle}
                    className=" text-red-500"
                >
                    {t("cancel")}
                </button>
            </div>
            <div className="h-96 ">
                <div className="h-auto grid grid-cols-5 gap-1 overflow-y-scroll mt-2">
                    {items.length > 0 ? (
                        items.map((item) => (
                            item.table_ID != table_ID ? (
                                <button
                                    onClick={() => (handleClick(item.table_ID))}
                                    key={item.table_ID}
                                    className="w-16 h-16 rounded-sm bg-red-600 hover:bg-red-500 text-xl font-semibold text-white"
                                >
                                    {item.table_name}
                                </button>
                            ) : (null)
                        ))
                    ) : (
                        <span className="flex justify-center items-center w-full h-full col-span-4">
                           {t("noData")}
                        </span>
                    )}
                </div>

            </div>

        </div>
    )
}

export default Tableincluded;
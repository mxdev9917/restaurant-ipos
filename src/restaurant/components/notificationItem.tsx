import { useTranslation } from "react-i18next";
import { HiX } from "react-icons/hi";
import { NotificationService } from "../../services/notification/notificationService";
import { generalErrors } from "../../utils/error";
import { useAuth } from "../../context/context";
import { useEffect } from "react";

interface NavProps {
    message: string;
    date: string;
    id: string;
    isCheckEven: boolean;
}

const NotificationItem: React.FC<NavProps> = ({ message, date, id, isCheckEven }) => {
    const { token } = useAuth();
    const { t } = useTranslation();

    const handleUpdate = async () => {
        if (isCheckEven) {
            console.log("Notification item clicked");
        } else {
            console.log("Message item clicked");
        }

        // Uncomment to enable actual update API call
        // try {
        //     const res = await NotificationService.updateNotification(id, token || "");
        //     if (res.status === "200") {
        //         window.location.reload();
        //     }
        // } catch (err: any) {
        //     console.error(err);
        //     generalErrors(err);
        // }
    };

    useEffect(() => {
        console.log("isCheckEven changed:", isCheckEven);
    }, [isCheckEven]);

    return (
        <div className="w-full min-h-24 h-fit flex flex-col justify-between gap-1 bg-gray-100 rounded-md p-2 border-b-[2px] border-orange-500 mb-3">
            <div className="w-full flex justify-between text-orange-500">
                {t("notification")}
                <button
                    onClick={handleUpdate}
                    className="text-sm hover:bg-gray-100 rounded-full px-1.5 cursor-pointer"
                >
                    <HiX className="text-xl" />
                </button>
            </div>
            <p className="w-full h-full text-sm">{message}</p>
            <p className="text-xs text-gray-500">{new Date(date).toLocaleString()}</p>
        </div>
    );
};

export default NotificationItem;

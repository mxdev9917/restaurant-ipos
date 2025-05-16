
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/context";
import { NotificationService, NotificationData } from "../../services/notification/notificationService";
import { generalErrors } from "../../utils/error";
import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";

const Notification = () => {
    const { data, token } = useAuth();
    const [notifications, setNotifications] = useState<NotificationData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { t } = useTranslation();
    const handleUpdateNotification = async (notifications_ID: string) => {
        try {
            const res = await NotificationService.updateNotification(notifications_ID, token || "");
            if (res.status === "200") {
                window.location.reload();
            }
        } catch (err: any) {
            console.error(err);
            setError(t("error_updating_notification") || "Error updating notification.");
            generalErrors(err);
        }
    }
    const getNotification = async () => {
        try {
            setLoading(true);
            let resId = String(data.restaurant_ID);
            const response = await NotificationService.getNotification(String(resId), token || "");
            setNotifications(response.data);
            localStorage.setItem("notification", JSON.stringify(response.data.length));
        } catch (error) {
            console.error("Error fetching notifications:", error);
            generalErrors(error);
            setError("Failed to load notifications.");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (token) {
            getNotification();
        }
    }, []);

    useEffect(() => { }, [notifications]);
    return (
        <div className="absolute w-96 h-[92vh] bg-white  right-0 z-50 overflow-y-auto p-4 shadow-lg">
            {loading ? (
                <p className="text-white text-center mt-4">{t("loading")}</p>
            ) : error ? (
                <p className="text-red-400 text-center mt-4">{error}</p>
            ) : notifications.length > 0 ? (
                notifications.map((item, index) => (
                    <div key={index} className="w-full min-h-24 h-fit flex flex-col justify-between gap-1 bg-gray-100 rounded-md p-2 border-b-[2px] border-orange-500 mb-3">
                        <div className="w-full flex justify-between text-orange-500">
                            {t("notification")}
                            <button
                                 onClick={() => handleUpdateNotification(item.notifications_ID)}
                                className="text-sm hover:bg-gray-100 rounded-full px-1.5 cursor-pointer"
                            ><HiX className="text-xl" />
                            </button>
                        </div>
                        <p className="w-full h-full text-sm">{item.notifications} </p>
                        <p className="text-xs text-gray-500">{new Date(item.created_at).toLocaleString()}</p>
                    </div>
                ))
            ) : (
               <p className="text-gray-500 text-center mt-4">{t("no_notifications")}</p>

            )}
        </div>
    );
};

export default Notification;

import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/context";
import { NotificationService, NotificationData } from "../../services/notification/notificationService";
import { generalErrors } from "../../utils/error";
import { useEffect, useState } from "react";
import { MessageService } from "../../services/messages/message";
import NotificationItem from "./notificationItem";

const Notification = () => {
    const { data, token } = useAuth();
    const [notifications, setNotifications] = useState<NotificationData[]>([]);
    const [messages, setMessages] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [isCheckEven, setIsCheckEven] = useState(true);
    const { t } = useTranslation();

    const getNotification = async () => {
        try {
            setIsCheckEven(true);
            setLoading(true);
            const resId = String(data.restaurant_ID);
            const response = await NotificationService.getNotification(resId, token || "");
            setNotifications(response.data);
            localStorage.setItem("notification", JSON.stringify(response.data.length));
        } catch (err) {
            console.error("Error fetching notifications:", err);
            generalErrors(err);
            setError("Failed to load notifications.");
        } finally {
            setLoading(false);
        }
    };

    const getMessage = async () => {
        try {
            setIsCheckEven(false);
            const resId = String(data.restaurant_ID);
            const response = await MessageService.countMessage(resId);
            if (response.status === "200") {
                localStorage.setItem("message", JSON.stringify(response.data.length));
                setMessages(response.data);
            }
        } catch (err) {
            console.error("Error fetching messages:", err);
            generalErrors(err);
        }
    };

    useEffect(() => {
        if (token) {
            getNotification();
            getMessage();
        }
    }, [token]);

    return (
        <div className="absolute w-96 h-[92vh] bg-white right-0 z-40 overflow-y-auto p-4 shadow-lg">
            {loading ? (
                <p className="text-gray-500 text-center mt-4">{t("loading")}</p>
            ) : error ? (
                <p className="text-red-400 text-center mt-4">{error}</p>
            ) : (
                <>
                    {(isCheckEven ? notifications : messages).length > 0 ? (
                        (isCheckEven ? notifications : messages).map((item) => (
                            <NotificationItem
                                key={isCheckEven ? item.notifications_ID : item.chat_id}
                                isCheckEven={isCheckEven}
                                message={isCheckEven ? item.notifications.message : item.messages.message}
                                date={isCheckEven ? item.update_at : item.sent_at}
                                id={isCheckEven ? item.notifications_ID : item.chat_id}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500 text-center mt-4">
                            {t("no_notifications")}
                        </p>
                    )}
                </>
            )}
        </div>
    );
};

export default Notification;

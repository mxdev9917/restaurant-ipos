import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react"; // Correct import
import { HiOutlineX } from "react-icons/hi";
import { CLIENT_BASE_URL } from "../../../utils/connection";
interface ShowQRProps {
    handleClickQrCloseModle: () => void;
    txtToken: string;
}

const ShowQr: React.FC<ShowQRProps> = ({ handleClickQrCloseModle, txtToken }) => {
    const [urlQR, setUrlQR] = useState("");

    useEffect(() => {
        const generatedURL = `${CLIENT_BASE_URL}${txtToken}`;
        console.log(`${CLIENT_BASE_URL}${txtToken}`);
        
        setUrlQR(generatedURL);
        console.log("Generated QR URL:", generatedURL);
    }, [txtToken]);

    return (
        <div className="w-80 sm:w-96 h-80 sm:h-96 bg-white flex flex-col items-center justify-start p-4 shadow-lg rounded-md">
            <div className="flex justify-end w-full ">
                <button className="p-2 hover:bg-gray-200 rounded-full" onClick={handleClickQrCloseModle}><HiOutlineX className="text-2xl text-orange-500" /></button>
            </div>
            <div className="w-full h-full flex items-center justify-center">
                {urlQR && <QRCodeCanvas value={urlQR} size={250} />}
            </div>
        </div>
    );
};

export default ShowQr;
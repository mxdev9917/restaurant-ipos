import { HiOutlinePhotograph } from "react-icons/hi";
import { GettAllGalleryService } from "../../services/gallery";
import { useEffect, useRef, useState } from "react";
import Loading from "../../utils/Loading";
import { IPOS_BASE_URL } from "../../utils/connection";

interface CreateGalleryProps {
    handleGallery: () => void;
    handleSelectPath:(path:string)=>void
}


const Gallery: React.FC<CreateGalleryProps> = ({ handleGallery,handleSelectPath }) => {
    const [items, setItems] = useState<any[]>([]);
    const [totalItem, setTotalItem] = useState(0);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const fetchedItemIDs = useRef(new Set<string>());

    // Fetch foods data from the API
    const fetchfoodData = async (currentPage: number) => {
        try {
            const response = await GettAllGalleryService.getAllGallery(currentPage, 40); // Replace with your actual API URL

            if (response.status === "200") {
                setTotalItem(response.total_item);
                // Create an array of items to append without duplicates
                const newItems = response.data.filter((item: any) => {
                    if (fetchedItemIDs.current.has(item.pathImg_ID)) {
                        return false; // Skip this item if it's already been added
                    } else {
                        fetchedItemIDs.current.add(item.pathImg_ID); // Mark this ID as fetched
                        return true; // Keep this item
                    }
                });

                // Append the new unique items to the state
                if (newItems.length > 0) {
                    setItems((prevItems) => [...prevItems, ...newItems]);
                }
            } else {
                console.error("Failed to fetch data:", response.message);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Load more items when reaching the bottom of the container
    const loadMoreItems = () => {
        if (totalItem === items.length) {
            return; // Stop loading more items if all items are fetched
        }
        setIsLoading(true);
        setTimeout(() => {
            setPage((prevPage) => prevPage + 1); // Increment page number for the next request
            fetchfoodData(page); // Fetch next page data
            setIsLoading(false);
        }, 1200);
    };

    // Initial data fetch when the component mounts
    useEffect(() => {
        fetchfoodData(page); // Fetch data for the first page
    }, [page]);

    // Handle scrolling and load more items
    useEffect(() => {
        const container = containerRef.current;
        if (!container || !(container instanceof HTMLElement)) return;

        const handleScroll = () => {
            if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10 && !isLoading) {
                loadMoreItems();
            }
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [isLoading, totalItem, items.length]);

    return (
        <div className="flex flex-col w-full h-full px-3 overflow-hidden">
            <div className="flex justify-between items-center border-b-[1.5px] h-14 ">
                <p className="flex items-center gap-2 text-2xl font-semibold text-orange-500 ">
                    <HiOutlinePhotograph className="text-4xl" />
                    ຄັງຮູບພາບ
                </p>
                <button onClick={handleGallery} className="mr-5 hover:bg-slate-200 hover:text-orange-500 px-2 py-1 rounded-md">
                    ຍົກເລີກ
                </button>
            </div>

            <div className="w-full h-full mt-3 p-3 overflow-x-auto">
    <div
        ref={containerRef}
        className="w-full h-fit p-3 flex flex-wrap"
    >
        {items.length > 0 ? (
            items.map((item) => (
                <div 
                    key={item.pathImg_ID} 
                    className="relative group w-48 h-48 "
                >
                    {/* Image */}
                    <img 
                        className="w-full h-full border-2 object-cover" 
                        src={`${IPOS_BASE_URL}${item.pathImg_name}`} 
                        alt="" 
                    />

                    {/* Hover Effect */}
                    <div onClick={()=>(handleSelectPath(item.pathImg_name))}  className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                        <span className="text-white font-semibold">ເລືອກ</span>
                    </div>
                </div>
            ))
        ) : (
            <div className="col-span-full flex justify-center items-center h-40 text-gray-500">
                No data available.
            </div>
        )}
        {isLoading && (
            <p className="text-center w-full mt-2">
                <Loading text="ໂຫລດຂໍ້ມູນ" />
            </p>
        )}
    </div>
</div>

        </div>
    );
}

export default Gallery;

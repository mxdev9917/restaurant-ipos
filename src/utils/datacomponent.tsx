import React from "react";

type DataComponentProps = {
    itemsPerPage: number;
    setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
};

const DataComponent: React.FC<DataComponentProps> = ({ itemsPerPage, setItemsPerPage }) => {
    // Function to handle changes in the select dropdown
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(event.target.value, 10); // Parse the selected value as a number
        setItemsPerPage(value); // Update the parent state
        console.log(value); // Log the selected value
    };

    return (
        <div>
            <select
                onChange={handleChange} // Pass the event handler directly
                className="bg-transparent border-none h-fit mt-3 text-sm"
                value={itemsPerPage} // Set the value to the current state
                name="itemsPerPage"
                id="itemsPerPage"
            >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
        </div>
    );
};

export default DataComponent;

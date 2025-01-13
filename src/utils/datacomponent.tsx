import React from "react";

// Define the type for the prop that will be passed down
interface DataComponentProps {
    onSelectChange: (value: number) => void;
}

const DataComponent: React.FC<DataComponentProps> = ({ onSelectChange }) => {
    // Function to handle changes in the select dropdown
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(event.target.value, 10); // Parse the selected value as a number
        onSelectChange(value); // Call the function passed as a prop
    };

    return (
        <div>
            <select
                onChange={handleChange} // Pass the event handler directly
                className="bg-transparent border-none h-fit mt-3 text-sm focus:ring-orange-500 focus:rounded-[5px]"
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

import { PieChart, Pie, Cell } from "recharts";

interface DonutChartOrderProps {
    datalist: { reserved_count: string; busy_count: string; empty_count: string }[];
}

const DonutChartOrder: React.FC<DonutChartOrderProps> = ({ datalist }) => {
    // Assuming datalist is an array of objects, extract the first object
    const { reserved_count, busy_count, empty_count } = datalist[0]; // Accessing first item of the array
    const TotalTable = Number(reserved_count) + Number(busy_count) + Number(empty_count)
    // Convert the counts from strings to numbers if necessary
    const data = [
        { name: "Reserved", value: parseInt(reserved_count, 10) },
        { name: "Busy", value: parseInt(busy_count, 10) },
        { name: "Empty", value: parseInt(empty_count, 10) },
    ];

    const COLORS = ["#faca15", "#e02424", "#0e9f6e"];

    return (
        <>
            <div className="flex justify-center items-center w-36 h-36">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%" // Center horizontally
                        cy="50%" // Center vertically
                        innerRadius={80}
                        outerRadius={130}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                    >
                        {data.map((_entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            {/* Display value (you can customize it further based on your needs) */}
            <div className="flex w-28 h-28 absolute justify-center items-center text-4xl font-bold text-gray-500 pl-7 ">
                {TotalTable} {/* Display reserved count here */}
            </div>
        </>
    );
};

export default DonutChartOrder;

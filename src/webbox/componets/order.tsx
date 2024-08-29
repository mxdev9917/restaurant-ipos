

function Order() {
    return (
        <div className="w-[260px] h-[300px] relative  flex justify-center mr-4 mt-4 mb-6">
            <div className="bg-orange-500 w-fit h-fit p-3 font-semibold rounded-full absolute text-white">Save 300,000</div>
            <button className="w-full h-full bg-slate-200 mt-6 rounded-xl focus:ring-2 focus:ring-orange-500 flex flex-col py-10 items-center">
                <p className="text-xl text-[#3a393a] font-semibold">24 MONTHS</p>
                <p className="text-4xl text-orange-500 font-bold my-4">4,000,000</p>
                <p className="text-xl text-[#3a393a] font-semibold mb-2">KIP/month</p>
                <p className=" text-[#3a393a] font-semibold opacity-65 mb-2">Plan renews at 4,000,000 kip/month on</p>
                <p className="text-xl text-[#3a393a] font-semibold opacity-65">19/08/2025</p>
            </button>
        </div>
    )
}

export default Order
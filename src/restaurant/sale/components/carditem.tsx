
function CartsItem() {

    return (
        <div className="flex justify-between w-full border-b-[0.5px] py-2 pl-2">
            <p className="w-full">ເຂົ້າຜັດໝູຈານໃຫ່ຍ</p>
            <p className=" w-12 flex justify-center">2</p>
            <p className="w-52 flex justify-center">100,000</p>

            <button className="hover:bg-slate-100 p-1.5 rounded-full w-16">
                <svg
                    className="w-5.5 h-5.5 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                    />
                </svg>
            </button>
        </div>
    );


}
export default CartsItem
import Sidebar_Nav from "./components/sidebar-nav";
import { Link } from "react-router-dom"
function help() {
  return (
    <div className="flex flex-col">
      <Sidebar_Nav />
      <div className="p-1 sm:ml-64">
        <div className=" w-full h-screen flex items-start  lg:items-center  justify-center">
          <div className="flex flex-col lg:flex-row gap-3 bg-[#0e3c50] px-7 py-10 rounded-2xl shadow-lg">
            <div className=" w-auto lg:w-96 h-[450px] pt-5  text-white font-semibold ">
              <div className="text-3xl  md:border-b-2 pb-3">
                <p>Lest't talk</p>
                <p>
                  on something <span className="text-orange-500">Great</span>
                </p>
                <p>togetther</p>
              </div>
              <div className="mt-3"></div>
              <p className="flex items-end my-1">
                <svg
                  className="w-8 h-8 text-orange-500  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="pl-4">eh.dev9917@gmail.com</span>
              </p>
              <p className="flex items-end my-1">
                <svg
                  className="w-8 h-8 text-orange-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                </svg>
                <span className="pl-4">020 56085825</span>
              </p>
              <p className="flex items-end my-1">
                <svg
                  className="w-8 h-8 text-orange-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                  />
                </svg>
                <span className="pl-4">020 56085825</span>
              </p>
              <p className="flex flex-col  pt-5">
                <span className="pl-4 text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Lorem, ipsum dolor sit amet consectetur
                </span>
              </p>
              <div className="flex h-fit md:h-[140px]  flex-col lg:flex-row gap-3 items-start mt-3 lg:items-end  ">
                <Link to={"#"} className="flex items-end">
                  <svg
                    className="w-8 h-8 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>bran it</p>
                </Link>
                <Link to={"#"} className="flex items-end">
                  <svg
                    className="w-8 h-8 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="pl-2">bran it</p>
                </Link>
                <Link to={"#"} className="flex items-end">
                  <svg
                    className="w-7 h-7 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="pl-2">www.branit.la</p>
                </Link>
              </div>
            </div>
            <div>
              <form className="w-85 lg:w-96 h-fit bg-white p-8 rounded-2xl shadow-lg">
                {/* <p className="text-4xl font-semibold pb-2">ສົ່ງຂໍ້ຄວາມຫາເຮົາ</p> */}
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="block  text-sm font-medium text-gray-900 dark:text-white pl-2"
                  >
                    ຊື່
                  </label>
                  <input
                    type="name"
                    id="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-none block w-full p-2.5 "
                    placeholder="..."
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="emil"
                    className="block  text-sm font-medium text-gray-900 dark:text-white pl-2"
                  >
                    ອີເມລ
                  </label>
                  <input
                    type="text"
                    id="emil"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-none block w-full p-2.5 "
                    placeholder="..."
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="subject"
                    className="block  text-sm font-medium text-gray-900 dark:text-white pl-2"
                  >
                    ຫົວຂໍ້
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-none  block w-full p-2.5 "
                    placeholder="..."
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pl-2"
                  >
                    ຂໍ້ຄວາມ
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-none "
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  ສົ່ງຂໍ້ຄວາມ
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default help;

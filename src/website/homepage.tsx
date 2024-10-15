

import NavBar from "./components/navbar";
import Card from "./components/card";
import { Link } from "react-router-dom";



function homePage() {
    return (
        <div id="home" className=" w-full h-[100vh] flex flex-col items-center overflow-auto md:overflow-scroll scroll-smooth ">
            <div className="w-full h-[100vh] relative">
                <NavBar />
            </div>
            <div className="md:w-5/5 lg:w-4/5 h-screen flex flex-col mt-5 md:mt-14 items-center">
                <div className="w-full  bg-white md:flex  justify-between">

                    <div className="font-bold text-3xl md:text-4xl flex flex-col py-2">
                        Complete Solution
                        <span className="text-orange-500 py-2 md:text-5xl">
                            <span className="text-black text-3xl md:text-4xl"> or your</span> Restaurant
                        </span>
                        <span className="text-orange-500 md:text-5xl"> Billing</span>
                        <p className="text-sm md:text-xl mt-3 font-normal">restaurant Management Solution!</p>
                    </div>
                    <div className="w-full flex md:justify-center md:items-center">
                        <img className="md:w-[800px] w-[400px] px-4" src="https://theqpos.com/wp-content/uploads/2023/10/Facebook-QPOS-Tutorial-1.png" alt="" />
                    </div>
                </div>


            </div>
            <p id="pricing" className="text-4xl mt-5  font-extrabold mb-5 ">PRICING PLANS</p>
            <div id="card" className="h-auto w-5/5   flex justify-center md:max-2xl:justify-start max-[937px]:justify-center flex-wrap">
                <Card />
                <Card />
                <Card />
                {/* <Card /> */}
            </div>
            <div id="download" className="md:w-5/5 lg:w-4/5 h-screen flex flex-col my-7 items-center">
                <div className="w-full  bg-white md:flex  justify-between">
                    <div className="w-full flex md:justify-center md:items-center">
                        <img className=" w-[500px] px-4" src="https://cdn.prod.website-files.com/60870ff4852ead369670e13e/645a600315854a17da58f591_pos%20system.png" alt="" />
                    </div>
                    <div className=" w-full flex flex-col px-4">
                        <p className="font-bold text-3xl text-orange-500 mb-2">Lorem Ipsum</p>
                        <p className="pb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                        <div className=" h-full flex items-end">
                            <button type="button" className="flex items-end text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
                                <img className="w-6 h-6 mr-2" src="images/svg/android.svg" alt="" />
                                Android
                            </button>
                            <button type="button" className="flex items-end text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
                                <svg className="w-7 h-6  rounded-md  text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
                                </svg>
                                iOS
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex md:w-5/5 lg:w-4/6  md:mt-3">
                <p className="font-bold text-xl md:text-3xl">ຄວາມຕ້ອງການຂອງລະບົບ ສໍາລັບການຕິດຕັ້ງ</p>
            </div>
            <div className="md:w-5/5 lg:w-4/5 flex flex-col mt-5 md:mt-14 items-center">
                <div className="w-[100%]  bg-white md:flex  justify-around">
                    <div className="flex flex-col items-start  md:flex-row   w-full ">
                        <div className=" w-[350px] h-[450px] bg-white rounded-md shadow-xl m-2  flex flex-col items-center hover:bg-orange-500 cursor-pointer">
                            <div className="w-20 h-20 bg-transparent rounded-b-full flex justify-center items-center ">
                                <img className="w-14 h-14 " src="images/svg/android.svg" alt="" /></div>
                            <div className="w-full  flex justify-center mt-4 mb-2 text-2xl font-semibold" >ສຳລັບ Android</div>
                            <div className="flex flex-col w-[90%] h-full  rounded-md border mb-4 ">
                                <p className="w-full pl-5 py-2 border-b">1. Android 7.0 ເຖິງ ລຸ້ນປັດຈຸບັນ</p>
                                <p className="w-full pl-5 py-2 border-b">2. ພື້ນທີ່ ~16 MB</p>
                                <p className="w-full pl-5 py-2 border-b">3. ຄວາມລະອຽດຂັ້ນຕໍ່າ 480 px</p>
                                <p className="w-full pl-5 py-2 border-b">4. ຂະຫນາດຈໍສະແດງ 3.5 ນິ້ວ</p>
                                <p className="w-full pl-5 py-2 border-b">4. ​ຈໍາ​ເປັນ​ຕ້ອງ​ມີ​ການ​ເຊື່ອມ​ຕໍ່​ອິນ​ເຕີ​ເນັດ​ມື​ຖື</p>

                            </div>
                        </div>
                        <div className=" w-[350px] h-[450px] bg-white rounded-md shadow-xl mx-2 flex flex-col items-center  hover:bg-orange-500 cursor-pointer hover:transition hover:duration-700 hover:ease-in-out">
                            <div className="w-20 h-20 bg-transparent rounded-b-full flex justify-center items-center ">
                                <svg className="w-14 h-14  rounded-md  text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
                                </svg>
                            </div>
                            <div className="w-full  flex justify-center mt-4 mb-2 text-2xl font-semibold" >ສຳລັບ iOS</div>
                            <div className="flex flex-col w-[90%] h-full  rounded-md border mb-4 ">
                                <p className="w-full pl-5 py-2 border-b">1. iOS 11.0 ເຖິງ ລຸ້ນປັດຈຸບັນ</p>
                                <p className="w-full pl-5 py-2 border-b">2. ພື້ນທີ່ ~16 MB</p>
                                <p className="w-full pl-5 py-2 border-b">3. ຄວາມລະອຽດຂັ້ນຕໍ່າ 480 px</p>
                                <p className="w-full pl-5 py-2 border-b">4. ຂະຫນາດຈໍສະແດງ 3.5 ນິ້ວ</p>
                                <p className="w-full pl-5 py-2 border-b">4. ​ຈໍາ​ເປັນ​ຕ້ອງ​ມີ​ການ​ເຊື່ອມ​ຕໍ່​ອິນ​ເຕີ​ເນັດ​ມື​ຖື</p>

                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[450px] hidden xl:flex justify-center pl-20 relative ">
                        <div className="w-[600px] h-[400px] absolute  animate-bounce bottom-0">
                            <img className="w-[320px]  rounded-full rounded-bl-none" src="/images/test-i-img.jpg" alt="" />

                        </div>

                        <div className=" w-[400px] h-[450px]">
                            <img className="" src="images/test-r-img2.jpg" alt="" />
                        </div >

                    </div>
                </div>
            </div>
            <div className="md:w-5/5 lg:w-4/5 h-screen flex flex-col mt-5 md:px-6 ">
                <div className="w-full flex flex-col justify-start mb-4 pl-8">
                    <p className="text-2xl font-medium mb-2">Best <span className="font-bold text-orange-500 text-3xl">Wabsite and Smartphone</span> </p>
                    <p className="text-2xl font-medium">POS Software in Town</p>
                </div>
                <div className="px-5 md:p-0">
                    <img className="w-full bg-[#3a393a] rounded-2xl " src="https://theqpos.com/wp-content/uploads/2023/10/QSR-Features-1.png" alt="" />

                </div>

            </div>
            <div id="test" className=" w-full bg-[#3a393a] flex flex-col pt-10 pb-3 mt-10 items-center " >
                <p className="font-bold text-xl md:text-3xl mb-5 text-white">Contact our SALES TEAM today!</p>
                <button type="button" className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-3 focus:ring-orange-300 font-semibold rounded-2xl dm:text-xl px-4 md:px-8  py-2 md:py-4 mb-6 text-base">Contact uS</button>
                <div className="flex mb-5">
                    <Link to={"#"} className="w-11 h-11 rounded-full border-2 shadow-2xl  bg-[#0964f7] flex justify-center items-center ">
                        <svg className="w-6 h-6  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <Link to={"#"} className="w-11 h-11 rounded-full border-2 shadow-2xl bg-[#ff0000] flex justify-center items-center mx-4">
                        <svg className="w-8 h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <Link to={"#"} className="w-11 h-11 rounded-full border-2 bg-[#3edf5a] shadow-2xl flex justify-center items-center ">
                        <svg className="w-7 h-7 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd" />
                            <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                        </svg>
                    </Link>

                </div>
                <Link to={"#"} className="font-semibold text-white text-sm md:text-base pb-2">Sales: +85620 5608 5835</Link>
                <Link to={"#"} className="font-semibold text-white text-sm md:text-base">Customer Care: +85620 5608 5835</Link>
                <p className="font-semibold text-white mt-4 mb-8 flex text-center text-sm  px-2">Address: No.7/3, 3rd Floor, Nagavarapalya, Bengaluru, Karnataka 560093</p>
                <div className="flex flex-col items-center md:justify-between w-full px-2 md:px-10 text-sm md:flex-row ">
                    <p className="font-normal text-white pb-2 md:pb-0">ສະຫງວນລິຂະສິດ ໂດຍ @ IPOS | Bran IT</p>
                    <div className="font-normal text-white flex">
                        <Link to={'#'} >ເງື່ອນໄຂການໃຫ້ບໍລິການ</Link>
                        <p>|</p>
                        <Link className="focus:text-orange-500" to={'/dashboard'}>ນະໂຍບາຍສ່ວນຕົວ</Link>
                    </div>
                </div>

            </div>

            <div className="w-16 md:w-20 h-16 md:h-20 absolute bottom-0 md:bottom-16 right-0 md:right-5">
                <Link to={"#"} className="w-12 md:w-16 h-12 md:h-16 rounded-full shadow-2xl border-2  bg-[#3edf5a] flex justify-center items-center ">
                    <svg className="w-9 md:w-11 h-9 md:h-11 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd" />
                        <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
export default homePage;
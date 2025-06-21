import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="border-1 p-5 bg-black text-orange-600">
                <div className="flex " >
                    <div className="m-5 text-2xl"> SKACOM
                        <p className="text-white text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem alias veritatis expedita saepe beatae esse corporis,

                        </p>
                        <br /><br />
                        <div className="flex">

                            <p className="border-1 p-1 h-10 w-10 m-3 text-center  rounded-full bg-black text-orange-600 border-orange-600 font-bold">

                                <a href="https://www.facebook.com/" target="_blank">f</a>
                            </p>

                            <p className="border-1 p-1 h-10 w-10 m-3 text-center  rounded-full bg-black text-orange-600 border-orange-600 font-bold">

                                <a href="https://www.instagram.com/" target="_blank">
                                    <img src="src/assets/instagram-orange.png" alt="Instagram" />

                                </a>
                            </p>




                            <p className="border-1 p-1 h-10 w-10  m-3 text-center  rounded-full bg-black text-orange-600 border-orange-600 font-bold">
                                <a href="https://x.com/?lang=en-in" target="_blank">
                                    <img src="src/assets/twitter.jpg" alt="" className=" h-5 w-5 m-1.5" />
                                </a>
                            </p>
                            <p className="border-1 p-1 h-10 w-10  m-3 text-center  rounded-full bg-black text-orange-600 border-orange-600 font-bold">
                                <a href="https://www.linkedin.com/login" target="_blank">
                                    in
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="m-5">Menu
                        <p className="text-white text-sm ">
                            <ul className="list-disc text-orange-600">

                                <li >
                                    <span className="text-white">
                                        About Us
                                    </span>
                                </li>

                                <li>
                                    <span className="text-white" >
                                        Features
                                    </span>
                                </li>
                                <li >
                                    <span className="text-white">
                                        Blog</span></li>
                                <li >
                                    <span className="text-white"> Contact Us</span>
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className="m-5">Support
                        <p>
                            <ul className="list-disc text-orange-600">
                                <li>  <span className="text-white"> Terms & Conditions</span></li>
                                <li>  <span className="text-white"> Privacy Policy</span></li>
                                <li>  <span className="text-white"> FAQ</span></li>
                                <li> <span className="text-white"> Disclaimer</span></li>
                            </ul>
                        </p>
                    </div>
                    <div className="m-5">Contact Us
                        <p>
                            <ul className="list-disc text-orange-600">
                                <li>
                                    <span className="text-white">  rollballindia1@gmail.com</span>

                                </li>
                                <li> <span className="text-white">    +91-9423576777<br />
                                    +91-20-35904496</span>

                                </li>
                                <li> <span className="text-white"> Erandwana,Gavthan,Karve Road,Pune 411004,Maharastra,India.</span>

                                </li>
                            </ul>
                        </p>

                    </div>
                    <div>

                        <a href="/">
                            <p className="border-1-orange bg-orange-600 h-15 w-15 rounded-full  mt-5 mr-30 text-white text-center text-xl p-3">
                                ➝

                            </p>
                        </a>
                    </div>



                </div >
                <div className="font-bold text-8xl text-orange-600 text-center">

                    MRBA COMMUNITY
                </div>
            </div>

        </>
    )
}

export default Footer
import Link from "next/link";
import MaxWidthWrapper from "./wrappers/MaxWidthWrapper";

// Website main footer component
const Footer = () => {
    return <footer className="bg-white relative ">
        <MaxWidthWrapper className={""}>
            <div className="border-t border-gray-100" />
            <div className="h-full flex flex-col md:flex-row justify-center items-center pt-5">
                <div className="text-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} All rights reserved. E-com by MJ
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center pb-5 pt-2">
                <div className="flex">
                    <Link href="#" className="text-gray-400 hover:text-gray-800 text-sm px-5"> Terms & Conditions</Link>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex">
                    <Link href="#" className="text-gray-400 hover:text-gray-800 text-sm px-5"> Privacy & Cookie Policies</Link>
                </div>

            </div>

        </MaxWidthWrapper>
    </footer>
};

export default Footer;
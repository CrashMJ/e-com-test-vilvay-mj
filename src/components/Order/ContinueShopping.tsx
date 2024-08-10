import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const ContinueShopping = () => {
    return (
        <div className="flex items-left mt-6">
            <Link href="/" className="flex items-center text-blue-500 hover:text-blue-700">
                <FaArrowLeft className="mr-2" />
                <span className="font-semibold">Continue Shopping</span>
            </Link>
        </div>
    );
};

export default ContinueShopping;

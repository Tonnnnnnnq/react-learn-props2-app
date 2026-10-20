import Product from "./../components/Product";
import { FaFacebook, FaGoogle } from "react-icons/fa";
export default function ShowProduct() {
  return (
    <>
      <div>
        <h2 className="text-center text-4xl font-bold font-kanit text-pink-500 mt-10">
          แสดงข้อมูลสินค้า Show Product
        </h2>

        {/*แสดงไอคอน Facebook */}
        <p className="flex justify-center gap-10 mt-5">
          <FaGoogle className="text-3xl text-pink-500" />
          <FaFacebook className="text-3xl text-pink-500" />
        </p>

        <hr className="mt-10 mb-10 w-[80%] mx-auto h-2 bg-pink-800 border-none" />

        {/* แสดงสินค้า 4 ชิ้นต่อจากเส้น hr */}
        <div>
          {/* สินค้าตัวที่ 1 */}
          <Product pName="iPhone" />

          {/* สินค้าตัวที่ 2 */}
          <Product pName="Samsung" />

          {/* สินค้าตัวที่ 3 */}
          <Product pName="Vivo" />

          {/* สินค้าตัวที่ 4 */}
          <Product pName="Oppo" />
        </div>
      </div>
    </>
  );
}

import { Link } from "react-router";
export default function Home() {
  return (
    <>
      <div>
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "bold",
            color: "cadetblue",
            fontFamily: "kanit",
            marginTop: "30px",
          }}
        >
          เรียนรู้ Props ใน React
        </h2>

        <p className="text-center mt-7.5 text-3xl font-bold text-blue-500 font-kanit">
          props คือ การส่งข้อมูลจาก Component แม่ไปยัง Component ลูก
        </p>

        <hr className="mt-5 w-[80%] mx-auto h-3 bg-amber-400 border-none" />

        <div className="mt-10 flex justify-center gap-10">
          <Link
            to="/showproduct"
            className="bg-amber-700 text-white px-10 py-5 rounded-xl font-bold hover:bg-amber-500"
          >
            เปิด Show Product
          </Link>

          <Link
            to="/showperson"
            className="bg-amber-700 text-white px-10 py-5 rounded-xl font-bold hover:bg-amber-500"
          >
            เปิด Show Person
          </Link>
        </div>
      </div>
    </>
  );
}

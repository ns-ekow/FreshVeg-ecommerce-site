
import AdminLayout from "../../components/adminlayout";
import styles from "../../components/adminlayout.module.css";
import reciept from "../../public/FreshVegs/pricetag.png";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from "../../components/pagination";
import Link from "next/link";

export default function Orders() {
  const newarr = [1];

  return (
    <>
      <AdminLayout>
        <div className={styles.contentContainer}>
          {newarr.length === 0 ? <EmptyOrders /> : <CouponsList />}
        </div>
      </AdminLayout>
    </>
  );
}

const EmptyOrders = () => {
  return (
    <div className={styles.emptyOrders}>
      <div className={styles.containerHead}>
        {" "}
        <h3>Coupons</h3>
      </div>
      <div className={styles.emptyContainerBody}>
        <Image
          src={reciept}
          width={80}
          height={100}
          alt="empty"
          className="mx-auto"
        />
        <h3>No Coupons Yet</h3>
        <p>
          Add coupons to enable customers have perks, discounts, etc to make
        </p>
        <p>the platform more intuitive and attractive to users/customers</p>
        <Link href='/admin/addCoupon'>
          <div className={styles.adminButton}>Create</div>
        </Link>
      </div>
    </div>
  );
};
const CouponsList = () => {
  return (
    <div className={styles.ordersList}>
      <div className={styles.containerHead}>
        <h3>Coupons</h3>
        <div className="flex gap-4">
          <Link href='/admin/addCoupon'>
            <button className="bg-blue-500  text-white px-4 py-1 h-fit rounded-md text-lg">
              Create
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.containerBody}>
        <div className="body-head flex flex-row justify-between items-center px-2 w-full">
          <div className="flex gap-4">
            <div></div>
            <input type="text" placeholder="Search" />
          </div>
          <div className="flex gap-4">
            <button className="bg-white border border-gray-300 rounded-sm p-1 text-blue-500">
              <CiEdit />
            </button>
            <button className="bg-white border border-gray-300 rounded-sm p-1 text-blue-500">
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
        <div className="body-body w-full flex flex-col overflow-auto">
          <div className="grid grid-cols-6 text-sm text-gray-400 border-b border-gray-300 py-2 px-4 w-full">
            <span className="col-span-2">Coupon Name</span>
            <span>Usage</span>
            <span>Status</span>
            <span className="col-span-2">Date</span>
          </div>
          <div className="w-full">
            <Coupon />
            <Coupon />
            <Coupon />
          </div>
        </div>
        <div className="body-footer w-full h-full flex flex-col items-center justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

const Coupon = () => {
  return (
    <div className="grid grid-cols-6 py-4 border-b items-center">
      <div className="name col-span-2 flex gap-3 items-center">
        <input type="checkbox" className="border-gray-300" />
        <div className="image w-12 h-12 rounded-sm bg-blue-500">
          <span className="text-3xl text-white font-semibold flex items-center justify-center">
            R
          </span>
        </div>
        <div className="flex flex-col  items-start">
          <span className="font-semibold">Summer Discount 10% off</span>
          <span className="text-gray-400 text-md">Summer2020</span>
        </div>
      </div>
      <div className="usage col-span-1">
        <span>15</span> times
      </div>
      <div className="status col-span-1">
        <ActiveStatus />
      </div>
      <div className="date col-span-2">
        <span>May 5, 2020- May 15, 2020</span>
      </div>
    </div>
  );
};

const ActiveStatus = () => {
  return (
    <div className="py-1 px-3 bg-green-200 max-w-20 mx-auto text-green-500 rounded-sm">
      Active
    </div>
  );
};

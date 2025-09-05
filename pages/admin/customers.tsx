import AdminLayout from "../../components/adminlayout";
import styles from "../../components/adminlayout.module.css";
import reciept from "../../public/FreshVegs/customers.png";
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
          {newarr.length === 0 ? <EmptyOrders /> : <CustomersList />}
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
        <h3>Customers</h3>
      </div>
      <div className={styles.emptyContainerBody}>
        <Image
          src={reciept}
          width={140}
          height={140}
          alt="empty"
          className="mx-auto"
        />
        <h3>No Customers Yet</h3>
        <p>Having a customer list helps to know your audience better.</p>
        <p>
          Manage your customers in one place and target your audinece better
        </p>
        <div className={styles.adminButton}>Add Customer</div>
      </div>
    </div>
  );
};
const CustomersList = () => {
  return (
    <div className={styles.ordersList}>
      <div className={styles.containerHead}>
        <h3>Customers</h3>
        <div className="flex gap-4">
          <button className="bg-white border border-gray-300 text-blue-500 px-4 py-1 h-fit rounded-md text-lg">
            Export
          </button>
          {/* <button className="bg-blue-500  text-white px-8 py-1 h-fit rounded-md text-lg">
            Add Customer
          </button> */}
        </div>
      </div>
      <div className={styles.containerBody}>
        <div className="body-head  px-2 w-full">
          <div className="flex text-sm text-gray-400 gap-4">
            <span className="hover:text-gray-600">All Customers</span>
            <span className="hover:text-gray-600">New Customers</span>
            <span className="hover:text-gray-600">From Accra</span>
            <span className="hover:text-gray-600">Returning Customers</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex  gap-4">
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
        </div>
        <div className="body-body w-full flex flex-col overflow-auto">
          <div className="grid grid-cols-6 text-sm text-gray-400 border-b border-gray-300 py-2 px-4 w-full">
            <span className="col-span-3 text-left">Name</span>
            <span>Location</span>
            <span>Orders</span>
            <span>Total Spent</span>
          </div>
          <div className="w-full">
            <Link href="/admin/customerDetails">
              
              <Customer />
            </Link>
            <Customer />
            <Customer />
            <Customer />
            <Customer />
            <Customer />
            <Customer />
            <Customer />
          </div>
        </div>
        <div className="body-footer w-full h-full flex flex-col items-center justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

const Customer = ({
  name,
  location,
  orders,
  totalSpent,
}: {
  name: string;
  location: string;
  orders: number;
  totalSpent: number;
}) => {
  return (
    <div className="grid grid-cols-6 py-4 border-b items-center">
      <div className="product col-span-3 flex gap-3 items-center">
        <input type="checkbox" className="border-gray-300" />
        <div className="image w-12 h-12 rounded-full bg-gray-500">
          <span className="text-3xl text-white font-semibold flex items-center justify-center">
            R
          </span>
        </div>
        <span>{name}</span>
      </div>
      <div className="location col-span-1">
        <span>{location}</span>
      </div>
      <div className="orders col-span-1">
        <span>{orders}</span>
      </div>
      <div className="total col-span-1">
        <span>{totalSpent}</span>
      </div>
    </div>
  );
};
Customer.defaultProps = {
  name: "Ralph Doe",
  location: "Accra",
  orders: 5,
  totalSpent: "GHS 94.14",
};

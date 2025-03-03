import { ReactNode, useEffect, useRef, useState } from "react";
import OrderRow from "./OrderRow";
import tempData from "./tempdata";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";


const OrderTable = () => {
  const [completeOrders, setComOrders] = useState<ReactNode>([]);
  const [inProgressOrders, setinProgressOrders] = useState<ReactNode>([]);
  const [pendingOrders, setpendingOrders] = useState<ReactNode>([]);
  const [pageOrders, setpageOrders] = useState<ReactNode>([]);
  const inputRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const complete: ReactNode[] = [];
    const progress: ReactNode[] = [];
    const pendingg: ReactNode[] = [];
    tempData.forEach((p) => {
      if (p.status === "complete") {
        complete.push(
          <OrderRow id={p.id} customerName={p.customerName} orderPrice={p.orderPrice} date={p.date}  key={p.id} />
        );
      } else if (p.status === "inprogress") {
        progress.push(
          <OrderRow id={p.id} customerName={p.customerName} orderPrice={p.orderPrice} date={p.date} key={p.id}/>
        );
      } else {
        pendingg.push(
          <OrderRow id={p.id} customerName={p.customerName} orderPrice={p.orderPrice} date={p.date} key={p.id}/>
        );
      }
    });
    setComOrders(complete);
    setinProgressOrders(progress);
    setpendingOrders(pendingg);
    setpageOrders(progress);
    inputRef.current?.focus();
}, []);

  return (
    <div className="m-10 absolute top-20 left-14">
      <div className="flex gap-2 ">
        <div >
            <button ref={inputRef} className="btn focus:bg-[#8abaf0] mb-4 w-2xs flex gap-5"  onClick={()=>{setpageOrders(inProgressOrders)}}>
               <IoCartOutline className="text-2xl" />
                In progress
            </button>
        </div>
        <div >
            <button className="btn focus:bg-[#8abaf0]  mb-4 w-2xs flex gap-5" onClick={()=>{setpageOrders(completeOrders)}}>
             <FaRegCircleCheck className="text-2xl" />
                Complete
            </button>
        </div>
        <div >
            <button className="btn focus:bg-[#8abaf0]  mb-4 w-2xs flex gap-5" onClick={()=>{setpageOrders(pendingOrders)}}>
             <IoMdRefresh className="text-2xl" />
                Pending
            </button>
        </div>
      </div>
      <table className="table table-lg">
        <thead className="sticky top-0 bg-gradient-to-r from-[#99cbf3] to-[#8abaf0] z-10">
          <tr className="text-gray-900 ">
            <th>Order Id</th>

            <th>Customer</th>

            <th>Order Price</th>

            <th>Date</th>

            <th>Move to inprogress</th>
            <th>Move to pending</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{pageOrders}</tbody>
        <tfoot>
          <tr></tr>
        </tfoot>
      </table>
    </div>
  );
};

export default OrderTable;

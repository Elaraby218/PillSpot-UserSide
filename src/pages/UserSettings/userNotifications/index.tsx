import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import {
  getNotifications,
  markNotificationAsReadThunk,
  deleteNotificationThunk,
  getUnreadNotificationCountThunk,
} from '../../../features/Notifications/notificationSlice';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FaCheckCircle, FaTrash } from 'react-icons/fa';

const UserNotifications = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notifications, isLoading, unreadCount } = useSelector((state: RootState) => state.notifications);

  // Only get unread notifications
  useEffect(() => {
    dispatch(getNotifications(false));
    dispatch(getUnreadNotificationCountThunk());
  }, [dispatch]);

  const handleMarkAsRead = (id: string) => {
    dispatch(markNotificationAsReadThunk(id)).then(() => {
      dispatch(getNotifications(false));
      dispatch(getUnreadNotificationCountThunk());
    });
  };

  // const handleMarkAllAsRead = () => {
  //   dispatch(markAllNotificationsAsReadThunk()).then(() => {
  //     dispatch(getNotifications(false));
  //     dispatch(getUnreadNotificationCountThunk());
  //   });
  // };

  const handleDelete = (id: string) => {
    dispatch(deleteNotificationThunk(id)).then(() => {
      dispatch(getNotifications(false));
      dispatch(getUnreadNotificationCountThunk());
    });
  };

  return (
    <div className="px-2 py-4 sm:p-6 w-full h-[calc(100vh-8rem)]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <IoNotificationsOutline className="text-2xl sm:text-3xl text-blue-600" />
          <h2 className="text-lg sm:text-2xl font-bold">Unread Notifications</h2>
          <span className="ml-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold">
            {unreadCount} Unread
          </span>
        </div>
      </div>
      {isLoading ? (
        <div className="text-center text-gray-400 py-12">Loading...</div>
      ) : notifications.length === 0 ? (
        <div className="text-center text-gray-400 py-12">No unread notifications</div>
      ) : (
        <div className="grid gap-3 sm:gap-4 max-h-[calc(95vh-10rem)] overflow-y-auto">
          {notifications.map((notif) => (
            <div
              key={notif.notificationId}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-xl shadow border border-gray-100 p-3 sm:p-5 hover:shadow-lg transition group min-h-[6rem]"
            >
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0 w-full">
                <IoNotificationsOutline className="text-xl sm:text-2xl text-blue-500 shrink-0" />
                <div className="min-w-0 w-full">
                  <div className="font-semibold text-base sm:text-lg text-blue-900 truncate">{notif.title}</div>
                  <div className="text-gray-700 mt-1 break-words text-xs sm:text-sm line-clamp-3">{notif.message}</div>
                  <div className="text-xs text-gray-400 mt-1">{notif.createdDate ? new Date(notif.createdDate).toLocaleString() : ''}</div>
                </div>
              </div>
              <div className="flex gap-1 sm:gap-2 mt-3 sm:mt-0 w-full sm:w-auto">
                <button
                  className="flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition text-xs sm:text-sm w-full sm:w-auto justify-center"
                  onClick={() => handleMarkAsRead(notif.notificationId)}
                >
                  <FaCheckCircle /> <span className="hidden xs:inline">Mark as Read</span>
                </button>
                <button
                  className="flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-red-100 text-red-700 font-semibold hover:bg-red-200 transition text-xs sm:text-sm w-full sm:w-auto justify-center"
                  onClick={() => handleDelete(notif.notificationId)}
                >
                  <FaTrash /> <span className="hidden xs:inline">Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserNotifications;

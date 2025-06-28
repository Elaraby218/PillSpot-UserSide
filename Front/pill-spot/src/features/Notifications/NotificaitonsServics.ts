import axiosInstance from "../axiosInstance";

export const fetchNotifications = async (isRead: boolean) => {
  try {
    const response = await axiosInstance.get(
      `api/Notification`,
      {
        params: { IsRead: isRead },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching notifications:", error);
    throw error;
  }
};

export const getNotificationById = async (id: string) => {
    try {
      const response = await axiosInstance.get(`api/Notification/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching notification with id ${id}:`, error);
      throw error;
    }
  };

export const deleteNotification = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`api/Notification/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting notification with id ${id}:`, error);
    throw error;
  }
};

export const markNotificationAsRead = async (id: string) => {
  try {
    const response = await axiosInstance.post(`api/Notification/${id}/read`);
    return response.data;
  } catch (error) {
    console.error(`Error marking notification with id ${id} as read:`, error);
    throw error;
  }
};

export const markAllNotificationsAsRead = async () => {
  try {
    const response = await axiosInstance.post(`api/Notification/read-all`);
    return response.data;
  } catch (error) {
    console.error(`Error marking all notifications as read:`, error);
    throw error;
  }
};

export const getUnreadNotificationCount = async () => {
  try {
    const response = await axiosInstance.get(`api/Notification/unread/count`);
    return response.data.count;
  } catch (error) {
    console.error(`Error fetching unread notification count:`, error);
    throw error;
  }
};

export const getUnreadNotifications = async () => {
  try {
    const response = await axiosInstance.get(`api/Notification/unread`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching unread notifications:`, error);
    throw error;
  }
};


export const getProductNotificationPreference = async (productId: string) => {
  try {
    const response = await axiosInstance.get(`api/ProductNotificationPreference/product/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching notification preference for product ${productId}:`, error);
    throw error;
  }
};

export const getAllNotificationPreferences = async () => {
  try {
    const response = await axiosInstance.get(`api/ProductNotificationPreference`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching all notification preferences:`, error);
    throw error;
  }
};

export const createProductNotificationPreference = async (
  productId: string,
  body: { isEnabled: boolean; notificationTypes: string[] }
) => {
  try {
    const response = await axiosInstance.post(
      `api/ProductNotificationPreference/product/${productId}`,
      body
    );
    return response.data;
  } catch (error) {
    console.error(`Error creating notification preference for product ${productId}:`, error);
    throw error;
  }
};


export const updateProductNotificationPreference = async (
  productId: string,
  body: { isEnabled: boolean; notificationTypes: string[] }
) => {
  try {
    const response = await axiosInstance.put(
      `api/ProductNotificationPreference/product/${productId}`,
      body
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating notification preference for product ${productId}:`, error);
    throw error;
  }
};


export const deleteProductNotificationPreference = async (productId: string) => {
  try {
    const response = await axiosInstance.delete(`api/ProductNotificationPreference/product/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting notification preference for product ${productId}:`, error);
    throw error;
  }
};



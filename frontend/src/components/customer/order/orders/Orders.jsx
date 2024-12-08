import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

function Orders() {
  const UserID = 'userId';
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8070/api/order/user-orders/${UserID}');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Failed to load orders.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  console.log('orders', orders);

  if (isLoading) return <CircularProgress />; // Show loading spinner while fetching data

  if (error) return <p>{error}</p>; // Show error message if there's an error

  return (
    <div>Orders </div>
  )
}

export default Orders
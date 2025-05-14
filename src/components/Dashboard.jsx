import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import NotificationForm from './NotificationForm';

const mockData = [
  { date: '2025-05-07', orders: 10 },
  { date: '2025-05-08', orders: 14 },
  { date: '2025-05-09', orders: 9 },
  { date: '2025-05-10', orders: 20 },
  { date: '2025-05-11', orders: 17 },
  { date: '2025-05-12', orders: 22 },
  { date: '2025-05-13', orders: 19 }
];

const Dashboard = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOrdersData(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const chartOptions = {
    title: {
      text: 'Orders per Day (Last 7 Days)'
    },
    xAxis: {
      categories: ordersData.map((item) => item.date)
    },
    yAxis: {
      title: {
        text: 'Number of Orders'
      }
    },
    series: [
      {
        name: 'Orders',
        data: ordersData.map((item) => item.orders)
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">Reporting Dashboard</h1>
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="loader border-4 border-blue-500 border-t-transparent rounded-full w-10 h-10 animate-spin"></div>
        </div>
      ) : (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
      <NotificationForm />
    </div>
  );
};

export default Dashboard;
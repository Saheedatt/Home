"use client";
import Layout from "./Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#1A1F36] text-white p-4 rounded">Living room</div>
        <div className="bg-[#1A1F36] text-white p-4 rounded">Smart TV</div>
        <div className="bg-[#1A1F36] text-white p-4 rounded">
          Air Conditioner
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

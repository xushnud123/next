import React, { useEffect, useState } from "react";

type DataType = {
  posts: number;
  likes: number;
  followers: number;
  following: number;
};

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DataType | null>(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard").then(
        (res) => res.json()
      );
      setDashboardData(response);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Posts - {dashboardData?.posts}</h2>
      <h2>Likes - {dashboardData?.likes}</h2>
      <h2>Following - {dashboardData?.following}</h2>
      <h2>Followers- {dashboardData?.followers}</h2>
    </div>
  );
}

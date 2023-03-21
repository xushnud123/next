import useSwr from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard").then((res) =>
    res.json()
  );
  return response;
};

function DashboardSWR() {
  const { data, error, isLoading } = useSwr("dashboard", fetcher);
  if (error) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Dashboard-SWR</h1>
      <h2>Posts - {data?.posts}</h2>
      <h2>Likes - {data?.likes}</h2>
      <h2>Following - {data?.following}</h2>
      <h2>Followers- {data?.followers}</h2>
    </>
  );
}

export default DashboardSWR;

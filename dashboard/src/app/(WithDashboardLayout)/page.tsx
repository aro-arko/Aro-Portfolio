import { getCurrentUser } from "@/services/AuthService";

const DashboardHomePage = async () => {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <div>
      <h1>This is DashboardHomePage component</h1>
    </div>
  );
};

export default DashboardHomePage;

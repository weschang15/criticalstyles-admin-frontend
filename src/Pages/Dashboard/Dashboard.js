import React from "react";
import { AdminLayout } from "../../Components/Layouts/Layouts";
import UtilityNav from "../../Components/Navbar/UtilityNav";
import QuickActions from "../../Components/QuickActions/QuickActions";
import Summary from "../../Components/Summary/Summary";

function Dashboard() {
  return (
    <AdminLayout>
      <UtilityNav />
      <Summary />
      <QuickActions />
    </AdminLayout>
  );
}

export default Dashboard;

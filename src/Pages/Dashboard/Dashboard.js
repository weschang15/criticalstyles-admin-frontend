import React from "react";
import { AdminLayout } from "../../Components/Layouts/Layouts";
import QuickActions from "../../Components/QuickActions/QuickActions";
import Summary from "../../Components/Summary/Summary";

function Dashboard() {
  return (
    <AdminLayout>
      <Summary />
      <QuickActions />
    </AdminLayout>
  );
}

export default Dashboard;

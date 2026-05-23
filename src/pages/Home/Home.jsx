import React from "react";
import { ChartPanel, DataTable, PageHeader, StatCard, StatusBadge } from "../../components/DashboardKit";
import { transactions, userData } from "../../DummyData";

export default function Home() {
  return (
    <>
      <PageHeader
        title="Home"
        description="A modern blue-white operations dashboard with fake data for revenue, users, products, and order flow."
      />
      <div className="grid gap-6 md:grid-cols-3">
        <StatCard label="Revenue" value="$24,780" detail="+14.2% from last month" tone="green" />
        <StatCard label="Orders" value="1,284" detail="238 awaiting fulfillment" />
        <StatCard label="Cost" value="$8,940" detail="-4.1% operational spend" tone="amber" />
      </div>
      <div className="mt-8">
        <ChartPanel title="Active Users" data={userData} dataKey="Active User" type="area" />
      </div>
      <div className="mt-8">
        <DataTable
          rows={transactions.slice(0, 3)}
          getRowKey={(row) => row.id}
          columns={[
            { key: "id", header: "Transaction" },
            { key: "customer", header: "Customer" },
            { key: "amount", header: "Amount" },
            {
              key: "status",
              header: "Status",
              render: (row) => (
                <StatusBadge tone={row.status === "Approved" ? "green" : row.status === "Pending" ? "amber" : "red"}>
                  {row.status}
                </StatusBadge>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}

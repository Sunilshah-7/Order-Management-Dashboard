import React from "react";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DataTable, PageHeader, PrimaryButton, StatusBadge } from "../../components/DashboardKit";
import { userRows } from "../../DummyData";

export default function UserList() {
  const [data, setData] = React.useState(userRows);

  const handleDelete = (id) => {
    setData((currentData) => currentData.filter((item) => item.id !== id));
  };

  return (
    <>
      <PageHeader
        title="Users"
        description="Manage fake dashboard users. Deletes only update this page until refresh."
        action={
          <Link to="/users/newUser">
            <PrimaryButton>Add New User</PrimaryButton>
          </Link>
        }
      />
      <DataTable
        rows={data}
        columns={[
          { key: "id", header: "ID" },
          {
            key: "user",
            header: "User",
            render: (row) => (
              <div className="flex items-center gap-3">
                <img className="h-10 w-10 rounded-full object-cover" src={row.avatar} alt={row.username} />
                <div>
                  <div className="font-semibold text-slate-950">{row.username}</div>
                  <div className="text-xs text-slate-500">{row.role}</div>
                </div>
              </div>
            ),
          },
          { key: "email", header: "Email" },
          {
            key: "status",
            header: "Status",
            render: (row) => <StatusBadge tone={row.status === "active" ? "green" : "amber"}>{row.status}</StatusBadge>,
          },
          { key: "transaction", header: "Transactions" },
          {
            key: "action",
            header: "Action",
            render: (row) => (
              <div className="flex items-center gap-3">
                <Link
                  to={`/users/${row.id}`}
                  className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 transition hover:bg-blue-100"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  className="text-red-500 transition hover:text-red-700"
                  onClick={() => handleDelete(row.id)}
                  aria-label={`Delete ${row.username}`}
                >
                  <DeleteOutlineIcon fontSize="small" />
                </button>
              </div>
            ),
          },
        ]}
      />
    </>
  );
}

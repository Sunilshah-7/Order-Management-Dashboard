import React from "react";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DataTable, PageHeader, PrimaryButton, StatusBadge } from "../../components/DashboardKit";
import { productRows } from "../../DummyData";

export default function ProductList() {
  const [data, setData] = React.useState(productRows);

  const handleDelete = (id) => {
    setData((currentData) => currentData.filter((item) => item.id !== id));
  };

  return (
    <>
      <PageHeader
        title="Products"
        description="Browse fake inventory records. Deletes are local to this session."
        action={
          <Link to="/products/newProduct">
            <PrimaryButton>Add New Product</PrimaryButton>
          </Link>
        }
      />
      <DataTable
        rows={data}
        columns={[
          { key: "id", header: "ID" },
          {
            key: "product",
            header: "Product",
            render: (row) => (
              <div className="flex items-center gap-3">
                <img className="h-10 w-10 rounded-lg object-contain" src={row.img} alt={row.name} />
                <div>
                  <div className="font-semibold text-slate-950">{row.name}</div>
                  <div className="text-xs text-slate-500">{row.category}</div>
                </div>
              </div>
            ),
          },
          { key: "stock", header: "Stock" },
          {
            key: "status",
            header: "Status",
            render: (row) => <StatusBadge tone={row.status === "active" ? "green" : "amber"}>{row.status}</StatusBadge>,
          },
          { key: "price", header: "Price" },
          {
            key: "action",
            header: "Action",
            render: (row) => (
              <div className="flex items-center gap-3">
                <Link
                  to={`/products/${row.id}`}
                  className="rounded-md bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 transition hover:bg-blue-100"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  className="text-red-500 transition hover:text-red-700"
                  onClick={() => handleDelete(row.id)}
                  aria-label={`Delete ${row.name}`}
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

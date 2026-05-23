import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card, ChartPanel, DemoNotice, FormField, PageHeader, PrimaryButton, StatusBadge, inputClass } from "../../components/DashboardKit";
import { productData, productRows } from "../../DummyData";

export default function Product() {
  const { productId } = useParams();
  const product = productRows.find((item) => String(item.id) === productId) ?? productRows[0];

  return (
    <>
      <PageHeader
        title="Product"
        description={`Fake detail and edit screen for ${product.name}.`}
        action={
          <Link to="/products/newProduct">
            <PrimaryButton>Create Product</PrimaryButton>
          </Link>
        }
      />
      <div className="mb-6">
        <DemoNotice />
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <ChartPanel title="Sales Performance" data={productData} dataKey="Sales" />
        <Card title="Product Summary">
          <div className="flex items-center gap-4">
            <img className="h-20 w-20 rounded-2xl bg-blue-50 object-contain p-2" src={product.img} alt={product.name} />
            <div>
              <h2 className="text-xl font-bold text-slate-950">{product.name}</h2>
              <p className="text-sm text-slate-500">{product.category}</p>
              <div className="mt-3">
                <StatusBadge tone={product.status === "active" ? "green" : "amber"}>{product.status}</StatusBadge>
              </div>
            </div>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg bg-blue-50 p-4">
              <dt className="font-semibold text-blue-700">Stock</dt>
              <dd className="mt-1 text-xl font-bold text-slate-950">{product.stock}</dd>
            </div>
            <div className="rounded-lg bg-blue-50 p-4">
              <dt className="font-semibold text-blue-700">Price</dt>
              <dd className="mt-1 text-xl font-bold text-slate-950">{product.price}</dd>
            </div>
          </dl>
        </Card>
      </div>
      <div className="mt-8">
        <Card title="Edit Product">
          <form className="grid gap-4 md:grid-cols-2">
            <FormField label="Product Name">
              <input className={inputClass} type="text" defaultValue={product.name} />
            </FormField>
            <FormField label="Category">
              <input className={inputClass} type="text" defaultValue={product.category} />
            </FormField>
            <FormField label="Stock">
              <input className={inputClass} type="number" defaultValue={product.stock} />
            </FormField>
            <FormField label="Price">
              <input className={inputClass} type="text" defaultValue={product.price} />
            </FormField>
            <FormField label="In Stock">
              <select className={inputClass} defaultValue="yes">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </FormField>
            <FormField label="Active">
              <select className={inputClass} defaultValue={product.status}>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
              </select>
            </FormField>
            <div className="md:col-span-2">
              <PrimaryButton type="button">Update Product</PrimaryButton>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}

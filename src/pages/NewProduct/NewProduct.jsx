import React from "react";
import { Card, DemoNotice, FormField, PageHeader, PrimaryButton, inputClass } from "../../components/DashboardKit";

export default function NewProduct() {
  return (
    <>
      <PageHeader title="New Product" description="Add a fake product record for the demo inventory." />
      <div className="mb-6">
        <DemoNotice />
      </div>
      <Card title="Product Details">
        <form className="grid gap-4 md:grid-cols-2">
          <FormField label="Product Name">
            <input className={inputClass} type="text" placeholder="Wireless Keyboard" />
          </FormField>
          <FormField label="Category">
            <input className={inputClass} type="text" placeholder="Accessories" />
          </FormField>
          <FormField label="Stock">
            <input className={inputClass} type="number" placeholder="24" />
          </FormField>
          <FormField label="Price">
            <input className={inputClass} type="text" placeholder="$120" />
          </FormField>
          <FormField label="In Stock">
            <select className={inputClass} defaultValue="yes">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </FormField>
          <FormField label="Active">
            <select className={inputClass} defaultValue="active">
              <option value="active">Active</option>
              <option value="paused">Paused</option>
            </select>
          </FormField>
          <div className="md:col-span-2">
            <PrimaryButton type="button">Create Product</PrimaryButton>
          </div>
        </form>
      </Card>
    </>
  );
}

import React from "react";
import { Card, DemoNotice, FormField, PageHeader, PrimaryButton, inputClass } from "../../components/DashboardKit";

export default function NewUser() {
  return (
    <>
      <PageHeader title="New User" description="Create a fake user record for the demo dashboard." />
      <div className="mb-6">
        <DemoNotice />
      </div>
      <Card title="User Details">
        <form className="grid gap-4 md:grid-cols-2">
          <FormField label="Username">
            <input className={inputClass} type="text" placeholder="John" />
          </FormField>
          <FormField label="Full Name">
            <input className={inputClass} type="text" placeholder="John Smith" />
          </FormField>
          <FormField label="Email">
            <input className={inputClass} type="email" placeholder="john@example.com" />
          </FormField>
          <FormField label="Password">
            <input className={inputClass} type="password" placeholder="password" />
          </FormField>
          <FormField label="Phone">
            <input className={inputClass} type="text" placeholder="+1 234 567" />
          </FormField>
          <FormField label="Address">
            <input className={inputClass} type="text" placeholder="New York" />
          </FormField>
          <FormField label="Gender">
            <select className={inputClass} defaultValue="male">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </FormField>
          <FormField label="Active">
            <select className={inputClass} defaultValue="yes">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </FormField>
          <div className="md:col-span-2">
            <PrimaryButton type="button">Create User</PrimaryButton>
          </div>
        </form>
      </Card>
    </>
  );
}

import React from "react";
import { Link, useParams } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import { Card, DemoNotice, FormField, PageHeader, PrimaryButton, StatusBadge, inputClass } from "../../components/DashboardKit";
import { userRows } from "../../DummyData";

export default function User() {
  const { userId } = useParams();
  const user = userRows.find((item) => String(item.id) === userId) ?? userRows[0];

  return (
    <>
      <PageHeader
        title="Edit User"
        description={`Viewing fake profile details for ${user.username}.`}
        action={
          <Link to="/users/newUser">
            <PrimaryButton>Create User</PrimaryButton>
          </Link>
        }
      />
      <div className="mb-6">
        <DemoNotice />
      </div>
      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <Card title="Profile">
          <div className="flex items-center gap-4">
            <img className="h-20 w-20 rounded-2xl object-cover" src={user.avatar} alt={user.username} />
            <div>
              <h2 className="text-xl font-bold text-slate-950">{user.username}</h2>
              <p className="text-sm text-slate-500">{user.role}</p>
              <div className="mt-3">
                <StatusBadge tone={user.status === "active" ? "green" : "amber"}>{user.status}</StatusBadge>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <MailOutlineIcon fontSize="small" className="text-blue-600" />
              {user.email}
            </div>
            <div className="flex items-center gap-3">
              <PhoneAndroidIcon fontSize="small" className="text-blue-600" />
              +1 234 567
            </div>
            <div className="flex items-center gap-3">
              <LocationSearchingIcon fontSize="small" className="text-blue-600" />
              New York, USA
            </div>
          </div>
        </Card>
        <Card title="Edit Details">
          <form className="grid gap-4 md:grid-cols-2">
            <FormField label="Username">
              <input className={inputClass} type="text" defaultValue={user.username} />
            </FormField>
            <FormField label="Role">
              <input className={inputClass} type="text" defaultValue={user.role} />
            </FormField>
            <FormField label="Email">
              <input className={inputClass} type="email" defaultValue={user.email} />
            </FormField>
            <FormField label="Phone">
              <input className={inputClass} type="text" defaultValue="+1 234 567" />
            </FormField>
            <FormField label="Address">
              <input className={inputClass} type="text" defaultValue="New York, USA" />
            </FormField>
            <FormField label="Status">
              <select className={inputClass} defaultValue={user.status}>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
              </select>
            </FormField>
            <div className="md:col-span-2">
              <PrimaryButton type="button">Update User</PrimaryButton>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}

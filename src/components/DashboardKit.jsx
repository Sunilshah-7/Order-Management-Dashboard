import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function PageHeader({ title, description, action }) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
          Admin dashboard
        </p>
        <h1 className="mt-1 text-3xl font-bold text-slate-950">{title}</h1>
        {description && (
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

export function PrimaryButton({ children, type = "button" }) {
  return (
    <button
      type={type}
      className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
}

export function StatCard({ label, value, detail, tone = "blue" }) {
  const toneClass =
    tone === "green"
      ? "bg-emerald-50 text-emerald-700"
      : tone === "amber"
        ? "bg-amber-50 text-amber-700"
        : "bg-blue-50 text-blue-700";

  return (
    <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
      <div className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${toneClass}`}>
        {label}
      </div>
      <div className="mt-4 text-3xl font-bold text-slate-950">{value}</div>
      <p className="mt-2 text-sm text-slate-500">{detail}</p>
    </div>
  );
}

export function StatusBadge({ children, tone = "blue" }) {
  const tones = {
    blue: "bg-blue-50 text-blue-700 ring-blue-100",
    green: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
    red: "bg-red-50 text-red-700 ring-red-100",
    slate: "bg-slate-100 text-slate-700 ring-slate-200",
  };

  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function Card({ title, children, action }) {
  return (
    <section className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between gap-4">
          {title && <h2 className="text-base font-bold text-slate-950">{title}</h2>}
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

export function DemoNotice() {
  return (
    <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-800">
      Demo mode: this screen uses fake data. Form actions and edits do not persist after refresh.
    </div>
  );
}

export function DataTable({ columns, rows, getRowKey }) {
  return (
    <div className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-blue-100 text-left text-sm">
          <thead className="bg-blue-50 text-xs uppercase tracking-wide text-blue-700">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-5 py-3 font-bold">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, index) => (
              <tr key={getRowKey ? getRowKey(row) : row.id ?? index} className="hover:bg-blue-50/60">
                {columns.map((column) => (
                  <td key={column.key} className="whitespace-nowrap px-5 py-4 text-slate-700">
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ChartPanel({ title, data, dataKey, type = "line" }) {
  const chartColor = "#2563eb";

  return (
    <Card title={title}>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          {type === "bar" ? (
            <BarChart data={data}>
              <CartesianGrid stroke="#dbeafe" strokeDasharray="4 4" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Bar dataKey={dataKey} fill={chartColor} radius={[8, 8, 0, 0]} />
            </BarChart>
          ) : type === "area" ? (
            <AreaChart data={data}>
              <CartesianGrid stroke="#dbeafe" strokeDasharray="4 4" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey={dataKey}
                stroke={chartColor}
                fill="#bfdbfe"
                strokeWidth={3}
              />
            </AreaChart>
          ) : (
            <LineChart data={data}>
              <CartesianGrid stroke="#dbeafe" strokeDasharray="4 4" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Line type="monotone" dataKey={dataKey} stroke={chartColor} strokeWidth={3} />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export function FormField({ label, children }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

export const inputClass =
  "w-full rounded-lg border border-blue-100 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

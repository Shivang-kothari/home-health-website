"use client";

import { useMemo, useState } from "react";

export default function CoverageSearch({ areas }: { areas: string[] }) {
  const [query, setQuery] = useState("");
  const [zip, setZip] = useState("");

  const filtered = useMemo(() => {
    const q = (query + ' ' + zip).trim().toLowerCase();
    if (!q) return areas;
    return areas.filter((a) => a.toLowerCase().includes(q));
  }, [areas, query, zip]);

  return (
    <div className="mt-6">
      <div className="flex gap-3">
        <input
          className="flex-1 rounded-xl border px-3 py-2"
          placeholder="Search country, state, or province"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          className="w-32 rounded-xl border px-3 py-2"
          placeholder="Code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <div key={a} className="card p-4 text-sm text-slate-700">{a}</div>
        ))}
        {filtered.length === 0 && <div className="muted">No matching areas found.</div>}
      </div>
    </div>
  );
}

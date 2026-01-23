"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Service = { key: string; title: string; desc: string; icon?: string };

export default function ServicesList() {
  const [items, setItems] = useState<Service[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch('/api/services')
      .then((r) => r.json())
      .then((data) => {
        if (mounted) setItems(data.items || []);
      })
      .catch(() => setItems([]))
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false };
  }, []);

  const filtered = items.filter((i) => i.title.toLowerCase().includes(query.toLowerCase()) || i.desc.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <div className="flex items-center gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search modules (e.g., payroll, time off, recruiting)"
          className="w-full rounded-lg border px-3 py-2"
        />
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {loading && <div className="muted">Loading services…</div>}
        {!loading && filtered.length === 0 && <div className="muted">No services found.</div>}
        {filtered.map((i) => (
          <div key={i.key} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex gap-4 items-start">
            {i.icon && (
              <div className="h-14 w-14 flex-shrink-0">
                <Image src={i.icon} alt="" width={56} height={56} className="rounded-lg" />
              </div>
            )}
            <div>
              <div className="text-base font-semibold">{i.title}</div>
              <p className="mt-2 text-sm muted">{i.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

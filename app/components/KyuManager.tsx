import React, { useEffect, useState } from "react";

// KyuManager.tsx
// Default-exported React component that previews a minimal admin+public UI for Kyus.
// - Uses Tailwind classes for layout
// - Expects backend at http://localhost:5000
// - Stores JWT in localStorage under 'token'
// - Features: list kyus, view detail, create (admin)

type KyuItem = {
  _id?: string;
  text: string;
  video?: string;
  description?: string;
};

type KyuSection = {
  title: string;
  items: KyuItem[];
};

type Kyu = {
  _id: string;
  kyu: string;
  sections: KyuSection[];
  examRequirements: string[];
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
};

const API_BASE =
  (import.meta.env.VITE_API_BASE as string) || "http://localhost:5000";

export default function KyuManager() {
  const [kyus, setKyus] = useState<Kyu[]>([]);
  const [selected, setSelected] = useState<Kyu | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCreate, setShowCreate] = useState(false);

  // form state for create
  const [form, setForm] = useState({
    kyu: "",
    isActive: true,
    sectionsJson: "[]",
    examRequirementsJson: "[]",
  });

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    fetchKyus();
  }, []);

  async function fetchKyus() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/api/kyus`);
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      const data = await res.json();
      setKyus(data);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  // Removed unused fetchKyu function

  function handleSelect(kyu: Kyu) {
    setSelected(kyu);
  }

  function logout() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    // parse json fields
    let sections: KyuSection[] = [];
    let examRequirements: string[] = [];
    try {
      sections = JSON.parse(form.sectionsJson);
      examRequirements = JSON.parse(form.examRequirementsJson);
    } catch {
      setError("Sections or examRequirements are not valid JSON");
      return;
    }

    const payload = {
      kyu: form.kyu,
      sections,
      examRequirements,
      isActive: form.isActive,
    };

    try {
      const res = await fetch(`${API_BASE}/api/kyus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`Server ${res.status}: ${txt}`);
      }
      setShowCreate(false);
      setForm({
        kyu: "",
        isActive: true,
        sectionsJson: "[]",
        examRequirementsJson: "[]",
      });
      await fetchKyus();
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError(String(err));
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">
            Koçyiğit Dojo — Kyu Yönetimi
          </h1>
          <div className="flex items-center gap-3">
            {token ? (
              <>
                <button
                  onClick={() => setShowCreate(true)}
                  className="px-3 py-1 rounded bg-indigo-600 text-white"
                >
                  Yeni Kyu
                </button>
                <button onClick={logout} className="px-3 py-1 rounded border">
                  Logout
                </button>
              </>
            ) : (
              <small className="text-sm text-gray-600">
                Admin login required to create / edit
              </small>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="md:col-span-1">
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-medium">Tüm Kyular</h2>
                <button onClick={fetchKyus} className="text-sm text-indigo-600">
                  Yenile
                </button>
              </div>

              {loading && <p>Yükleniyor...</p>}
              {error && <p className="text-red-600">{error}</p>}

              <ul className="space-y-2">
                {kyus.map((k) => (
                  <li
                    key={k._id}
                    className="p-2 rounded hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelect(k)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{k.kyu}</div>
                        <div className="text-xs text-gray-500">
                          {k.examRequirements?.slice(0, 2).join(", ")}
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">
                        {k.isActive ? "Active" : "Inactive"}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="md:col-span-2">
            <div className="bg-white p-4 rounded shadow min-h-[300px]">
              {selected ? (
                <article>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{selected.kyu}</h3>
                      <p className="text-sm text-gray-500">
                        Oluşturulma:{" "}
                        {new Date(selected.createdAt || "").toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4">
                    {selected.sections?.map((sec, idx) => (
                      <div key={idx} className="p-3 border rounded">
                        <h4 className="font-medium">{sec.title}</h4>
                        <ul className="mt-2 space-y-2">
                          {sec.items.map((it, i2) => (
                            <li key={i2} className="text-sm">
                              <div className="font-medium">{it.text}</div>
                              {it.description && (
                                <div className="text-xs text-gray-500">
                                  {it.description}
                                </div>
                              )}
                              {it.video && (
                                <a
                                  className="text-indigo-600 text-xs"
                                  href={it.video}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Video izle
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="p-3 border rounded">
                      <h4 className="font-medium">Sınav Gereksinimleri</h4>
                      <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                        {selected.examRequirements?.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ) : (
                <div className="text-center text-gray-500">
                  Bir kyu seçin veya listeden yeni ekleyin.
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Create modal */}
        {showCreate && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <form
              onSubmit={handleCreate}
              className="bg-white p-6 rounded shadow max-w-2xl w-full"
            >
              <h3 className="text-lg font-semibold mb-3">Yeni Kyu Oluştur</h3>
              {error && <div className="text-red-600 mb-2">{error}</div>}

              <div className="grid grid-cols-1 gap-2">
                <label className="text-sm">Kyu (ör: "9. Kyu")</label>
                <input
                  required
                  value={form.kyu}
                  onChange={(e) => setForm({ ...form, kyu: e.target.value })}
                  className="border p-2 rounded"
                />

                <label className="text-sm">Sections (JSON)</label>
                <textarea
                  value={form.sectionsJson}
                  onChange={(e) =>
                    setForm({ ...form, sectionsJson: e.target.value })
                  }
                  className="border p-2 rounded h-28"
                />
                <small className="text-xs text-gray-500">
                  Örnek: [{"{"}"title":"Tachikata","items":[{"{"}"text":"Heiko
                  dachi","description":"..."{"}"}]{"}"}]
                </small>

                <label className="text-sm">
                  Exam Requirements (JSON array)
                </label>
                <input
                  value={form.examRequirementsJson}
                  onChange={(e) =>
                    setForm({ ...form, examRequirementsJson: e.target.value })
                  }
                  className="border p-2 rounded"
                />
                <small className="text-xs text-gray-500">
                  Örnek: ["10 push-up","Kata: Taikyoku"]
                </small>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.isActive}
                    onChange={(e) =>
                      setForm({ ...form, isActive: e.target.checked })
                    }
                  />{" "}
                  Aktif
                </label>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowCreate(false)}
                    className="px-3 py-1 border rounded"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-1 bg-indigo-600 text-white rounded"
                  >
                    Oluştur
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

/*
Usage:
- Put this file in your React app (Vite recommended) and ensure Tailwind is configured.
- Set VITE_API_BASE in your .env (e.g. VITE_API_BASE=http://localhost:5000)
- Admin flow: after creating an admin in backend, save the accessToken in localStorage as 'token', e.g. localStorage.setItem('token', '<accessToken>')
- The Create form expects JSON for sections and examRequirements for quick entry; you can later build a nicer UI.
*/

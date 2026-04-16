import { useEffect, useState } from "react";

interface Guest {
  name: string;
  attending: boolean;
  guests: number;
  overnight: boolean;
  created_at: string;
}

export default function Guests() {
  const [list, setList] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://functions.poehali.dev/1c472110-b453-4ad9-9eac-46f73520823f")
      .then(r => r.json())
      .then(data => {
        const parsed = typeof data === "string" ? JSON.parse(data) : data;
        setList(parsed);
      })
      .finally(() => setLoading(false));
  }, []);

  const coming = list.filter(g => g.attending);
  const notComing = list.filter(g => !g.attending);
  const totalGuests = coming.reduce((sum, g) => sum + g.guests, 0);
  const totalOvernight = coming.filter(g => g.overnight).reduce((sum, g) => sum + g.guests, 0);

  return (
    <div className="min-h-screen px-6 py-12" style={{ backgroundColor: "#f0f4f8", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#5b8fa8" }}>Список гостей</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-10" style={{ color: "#2c3e50", fontFamily: "'Playfair Display', serif" }}>
          Сергей & Александра
        </h1>

        {loading ? (
          <p style={{ color: "#5b8fa8" }}>Загружаем...</p>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="p-6 rounded" style={{ backgroundColor: "#ffffff" }}>
                <p className="text-3xl font-bold mb-1" style={{ color: "#2c3e50" }}>{coming.length}</p>
                <p className="text-xs uppercase tracking-widest" style={{ color: "#5b8fa8" }}>Придут</p>
              </div>
              <div className="p-6 rounded" style={{ backgroundColor: "#ffffff" }}>
                <p className="text-3xl font-bold mb-1" style={{ color: "#2c3e50" }}>{totalGuests}</p>
                <p className="text-xs uppercase tracking-widest" style={{ color: "#5b8fa8" }}>Всего человек</p>
              </div>
              <div className="p-6 rounded" style={{ backgroundColor: "#ffffff" }}>
                <p className="text-3xl font-bold mb-1" style={{ color: "#2c3e50" }}>{totalOvernight}</p>
                <p className="text-xs uppercase tracking-widest" style={{ color: "#5b8fa8" }}>С ночёвкой</p>
              </div>
            </div>

            {coming.length > 0 && (
              <div className="mb-10">
                <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#5b8fa8" }}>Придут</h2>
                <div className="rounded overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
                  {coming.map((g, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-6 py-4"
                      style={{ borderBottom: i < coming.length - 1 ? "1px solid #e8f0f5" : "none" }}
                    >
                      <span className="text-base" style={{ color: "#2c3e50" }}>{g.name}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm" style={{ color: "#5b8fa8" }}>
                          {g.guests} {g.guests === 1 ? "чел." : "чел."}
                        </span>
                        <span
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            backgroundColor: g.overnight ? "#d6eaf5" : "#f0f4f8",
                            color: g.overnight ? "#2c6b8a" : "#9ab0bf",
                          }}
                        >
                          {g.overnight ? "Ночёвка" : "Без ночёвки"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {notComing.length > 0 && (
              <div>
                <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#5b8fa8" }}>Не смогут</h2>
                <div className="rounded overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
                  {notComing.map((g, i) => (
                    <div
                      key={i}
                      className="flex items-center px-6 py-4"
                      style={{ borderBottom: i < notComing.length - 1 ? "1px solid #e8f0f5" : "none" }}
                    >
                      <span className="text-base" style={{ color: "#9ab0bf" }}>{g.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {list.length === 0 && (
              <p style={{ color: "#5b8fa8" }}>Пока никто не ответил.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

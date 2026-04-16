import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const [guests, setGuests] = useState("1");
  const [withPartner, setWithPartner] = useState<"alone" | "couple" | "">("");
  const [overnight, setOvernight] = useState<"yes" | "no" | "">("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !attending) return;
    setStatus("loading");
    try {
      const res = await fetch("https://functions.poehali.dev/1c472110-b453-4ad9-9eac-46f73520823f", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, attending, guests: attending === "yes" ? (withPartner === "couple" ? 2 : 1) : 0, with_partner: attending === "yes" ? withPartner === "couple" : false, overnight: attending === "yes" ? overnight : "no" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    backgroundColor: "transparent",
    borderBottom: "1px solid rgba(122,179,204,0.5)",
    color: "#1a1a1a",
    outline: "none",
    width: "100%",
    padding: "8px 0",
    fontSize: "1rem",
  };

  return (
    <section id="rsvp-form" style={{ backgroundColor: "#f0f4f8" }} className="px-6 py-20 flex justify-center">
      <div className="w-full max-w-lg">
        <p className="uppercase text-xs tracking-widest mb-3" style={{ color: "#5b8fa8" }}>Подтверждение</p>
        <h2 className="text-3xl md:text-5xl mb-10 leading-tight" style={{ color: "#2c3e50", fontFamily: "'Playfair Display', serif" }}>
          Вы придёте?
        </h2>

        {status === "success" ? (
          <div className="text-center py-12">
            <p className="text-2xl mb-3" style={{ color: "#2c3e50", fontFamily: "'Playfair Display', serif" }}>Спасибо!</p>
            <p className="text-base" style={{ color: "#5b8fa8" }}>Мы получили ваш ответ и очень ждём встречи.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "#5b8fa8" }}>Ваше имя</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Иван Иванов"
                required
                style={{ ...inputStyle }}
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-3" style={{ color: "#5b8fa8" }}>Ваш ответ</label>
              <div className="flex gap-4">
                {(["yes", "no"] as const).map(val => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setAttending(val)}
                    className="flex-1 py-3 text-sm uppercase tracking-widest border transition-all duration-300"
                    style={{
                      borderColor: "#5b8fa8",
                      backgroundColor: attending === val ? "#5b8fa8" : "transparent",
                      color: attending === val ? "#ffffff" : "#5b8fa8",
                    }}
                  >
                    {val === "yes" ? "Приду" : "Не смогу"}
                  </button>
                ))}
              </div>
            </div>

            {attending === "yes" && (
              <>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-3" style={{ color: "#5b8fa8" }}>Вы придёте один(а) или с парой?</label>
                  <div className="flex gap-4">
                    {(["alone", "couple"] as const).map(val => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setWithPartner(val)}
                        className="flex-1 py-3 text-sm uppercase tracking-widest border transition-all duration-300"
                        style={{
                          borderColor: "#5b8fa8",
                          backgroundColor: withPartner === val ? "#5b8fa8" : "transparent",
                          color: withPartner === val ? "#ffffff" : "#5b8fa8",
                        }}
                      >
                        {val === "alone" ? "Один(а)" : "С парой"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest mb-3" style={{ color: "#5b8fa8" }}>Останетесь с ночёвкой?</label>
                  <div className="flex gap-4">
                    {(["yes", "no"] as const).map(val => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setOvernight(val)}
                        className="flex-1 py-3 text-sm uppercase tracking-widest border transition-all duration-300"
                        style={{
                          borderColor: "#5b8fa8",
                          backgroundColor: overnight === val ? "#5b8fa8" : "transparent",
                          color: overnight === val ? "#ffffff" : "#5b8fa8",
                        }}
                      >
                        {val === "yes" ? "Да" : "Нет"}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {status === "error" && (
              <p className="text-sm" style={{ color: "#e07070" }}>Что-то пошло не так. Попробуйте ещё раз.</p>
            )}

            <button
              type="submit"
              disabled={!name || !attending || status === "loading"}
              className="border py-3 text-sm uppercase tracking-widest transition-all duration-300 disabled:opacity-40"
              style={{ borderColor: "#2c3e50", color: "#2c3e50" }}
              onMouseEnter={e => {
                if (!e.currentTarget.disabled) {
                  e.currentTarget.style.backgroundColor = "#2c3e50";
                  e.currentTarget.style.color = "#f0f4f8";
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#2c3e50";
              }}
            >
              {status === "loading" ? "Отправляем..." : "Подтвердить"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
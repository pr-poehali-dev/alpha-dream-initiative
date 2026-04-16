export default function Featured() {
  return (
    <div id="details" className="flex justify-center items-center min-h-screen px-6 py-20" style={{ backgroundColor: '#f0f4f8' }}>
      <div className="w-full max-w-2xl">
        <h3 className="uppercase mb-4 text-sm tracking-widest" style={{ color: '#5b8fa8' }}>Наша история</h3>
        <p className="text-2xl lg:text-4xl mb-12 leading-tight" style={{ color: '#2c3e50', fontFamily: "'Playfair Display', serif" }}>
          Мы встретились и поняли — это навсегда. Теперь хотим отметить это вместе с теми, кто нам дорог.
        </p>
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#5b8fa8' }}>Дата</p>
            <p className="text-lg font-medium" style={{ color: '#2c3e50' }}>29 августа 2026</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#5b8fa8' }}>Начало</p>
            <p className="text-lg font-medium" style={{ color: '#2c3e50' }}>15:00</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#5b8fa8' }}>Место</p>
            <p className="text-lg font-medium" style={{ color: '#2c3e50' }}>«Берёзовая роща», оз. Касарги</p>
            <p className="text-sm" style={{ color: '#5b8fa8' }}>Сосновский р-н, Челябинская обл.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#5b8fa8' }}>Дресс-код</p>
            <p className="text-lg font-medium" style={{ color: '#2c3e50' }}>Небесно-голубой</p>
          </div>
        </div>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#5b8fa8' }}>Примеры дресс-кода</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="h-64 overflow-hidden rounded mb-2">
                <img
                  src="https://cdn.poehali.dev/projects/874a15de-41fa-45bd-9249-d2c9222f707b/files/43858615-9d97-4f5a-8901-23d2f3bc54d1.jpg"
                  alt="Дресс-код для женщин"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-center" style={{ color: '#5b8fa8' }}>Для женщин</p>
            </div>
            <div>
              <div className="h-64 overflow-hidden rounded mb-2">
                <img
                  src="https://cdn.poehali.dev/projects/874a15de-41fa-45bd-9249-d2c9222f707b/files/81f64fa7-808a-452a-b7f7-875be0720329.jpg"
                  alt="Дресс-код для мужчин"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-center" style={{ color: '#5b8fa8' }}>Для мужчин</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#rsvp-form"
            className="border px-6 py-3 text-sm transition-all duration-300 w-fit uppercase tracking-widest"
            style={{ borderColor: '#5b8fa8', color: '#5b8fa8' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#5b8fa8';
              (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = '#5b8fa8';
            }}
          >
            Подтвердить участие
          </a>
          <a
            href="https://yandex.ru/maps/?text=озеро+Касарги+Берёзовая+роща+Сосновский+район"
            target="_blank"
            rel="noopener noreferrer"
            className="border px-6 py-3 text-sm transition-all duration-300 w-fit uppercase tracking-widest"
            style={{ borderColor: '#2c3e50', color: '#2c3e50' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2c3e50';
              (e.currentTarget as HTMLAnchorElement).style.color = '#f0f4f8';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = '#2c3e50';
            }}
          >
            Маршрут
          </a>
        </div>
      </div>
    </div>
  );
}
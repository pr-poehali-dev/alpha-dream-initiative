export default function Featured() {
  return (
    <div id="details" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0" style={{ backgroundColor: '#fdf6f0' }}>
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/874a15de-41fa-45bd-9249-d2c9222f707b/files/5bb2f2dc-ed7e-48db-bb4e-ca44bed51265.jpg"
          alt="Влюблённые"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-widest" style={{ color: '#c9956a' }}>Наша история</h3>
        <p className="text-2xl lg:text-4xl mb-8 leading-tight" style={{ color: '#3d2c1e', fontFamily: "'Playfair Display', serif" }}>
          Мы встретились три года назад и с тех пор знаем — это навсегда. Теперь хотим отметить это вместе с самыми близкими.
        </p>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#c9956a' }}>Дата</p>
            <p className="text-lg font-medium" style={{ color: '#3d2c1e' }}>14 июня 2025</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#c9956a' }}>Начало</p>
            <p className="text-lg font-medium" style={{ color: '#3d2c1e' }}>16:00</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#c9956a' }}>Место</p>
            <p className="text-lg font-medium" style={{ color: '#3d2c1e' }}>Усадьба Архангельское</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#c9956a' }}>Дресс-код</p>
            <p className="text-lg font-medium" style={{ color: '#3d2c1e' }}>Светлые тона</p>
          </div>
        </div>
        <a
          href="#rsvp"
          className="border px-6 py-3 text-sm transition-all duration-300 w-fit uppercase tracking-widest"
          style={{ borderColor: '#3d2c1e', color: '#3d2c1e' }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#3d2c1e';
            (e.currentTarget as HTMLAnchorElement).style.color = '#fdf6f0';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
            (e.currentTarget as HTMLAnchorElement).style.color = '#3d2c1e';
          }}
        >
          Подтвердить участие
        </a>
      </div>
    </div>
  );
}

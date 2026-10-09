// 旅行方案页：点位图集灯箱 + 区块淡入。无灯箱的页面直接跳过。
const lb = document.getElementById('lb');

if (lb) {
  const shots = [...document.querySelectorAll<HTMLElement>('.t-shot')];
  const img = document.getElementById('lb-img') as HTMLImageElement;
  const title = document.getElementById('lb-title')!;
  const link = document.getElementById('lb-link') as HTMLAnchorElement;
  const count = document.getElementById('lb-count')!;
  let idx = -1;

  const show = (i: number) => {
    idx = (i + shots.length) % shots.length;
    const s = shots[idx];
    img.src = s.querySelector('img')!.src;
    title.textContent = s.dataset.title ?? '';
    link.href = s.dataset.link ?? '#';
    count.textContent = `${idx + 1} / ${shots.length}`;
    lb.classList.add('t-on');
    document.body.style.overflow = 'hidden';
  };
  const hide = () => {
    lb.classList.remove('t-on');
    document.body.style.overflow = '';
    img.removeAttribute('src');
  };

  shots.forEach((s, i) =>
    s.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).closest('.t-cap-l')) return;
      e.preventDefault();
      show(i);
    }),
  );
  document.getElementById('lb-close')!.addEventListener('click', hide);
  document.getElementById('lb-prev')!.addEventListener('click', () => show(idx - 1));
  document.getElementById('lb-next')!.addEventListener('click', () => show(idx + 1));
  lb.addEventListener('click', (e) => {
    if (e.target === lb) hide();
  });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('t-on')) return;
    if (e.key === 'Escape') hide();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
}

const reveals = document.querySelectorAll<HTMLElement>('.t-reveal');
if (reveals.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        en.target.classList.add('t-in');
        io.unobserve(en.target);
      }
    },
    { threshold: 0.05 },
  );
  reveals.forEach((el) => io.observe(el));
}

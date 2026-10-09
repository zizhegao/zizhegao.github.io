export const GITHUB_URL = 'https://github.com/zizhegao';

export type Category = '技术' | '随笔' | '读书';

export const CATEGORIES: { label: Category; color: string; fg: string; blurb: string }[] = [
  { label: '技术', color: '#0040DD', fg: '#fff', blurb: '技术笔记' },
  { label: '随笔', color: '#FE8624', fg: '#000', blurb: '国庆亲子出行系列' },
  { label: '读书', color: '#743DFF', fg: '#fff', blurb: '读书笔记' },
];

export const CITY_COLORS: Record<string, string> = {
  义乌: '#1474A0',
  金华: '#0040DD',
  衢州: '#743DFF',
  南昌: '#16A937',
  汕头潮州: '#D3720E',
};

export const categoryColor = (c: string) => CATEGORIES.find((x) => x.label === c)?.color ?? '#72757A';
export const categoryFg = (c: string) => CATEGORIES.find((x) => x.label === c)?.fg ?? '#000';
export const cityColor = (city?: string) => (city && CITY_COLORS[city]) || '#72757A';

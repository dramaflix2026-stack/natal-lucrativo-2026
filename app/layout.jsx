import { Poppins } from 'next/font/google';
const poppins = Poppins({subsets:['latin'],weight:['400','500','600','700','800','900'],display:'swap'});
export const metadata = { title: 'Natal Lucrativo 2026 | Kit Digital', description: 'Materiais digitais para preparar sua divulgação de Natal.' };
export default function RootLayout({ children }) { return <html lang="pt-BR"><body className={poppins.className} style={{margin:0}}>{children}</body></html>; }

import {NextResponse} from 'next/server';
export const runtime='nodejs';
export async function POST(){
 return NextResponse.json({error:'A geração com IA aguarda autenticação e controle de créditos.'},{status:503,headers:{'Cache-Control':'no-store'}});
}

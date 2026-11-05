import {NextResponse} from 'next/server';
export const runtime='nodejs';
export async function POST(request){
 if(!process.env.OPENAI_API_KEY || !process.env.NATAL_TEST_CODE) return NextResponse.json({error:'Configure OPENAI_API_KEY e NATAL_TEST_CODE na Railway.'},{status:503});
 if(request.headers.get('x-test-code')!==process.env.NATAL_TEST_CODE) return NextResponse.json({error:'Acesso de teste não autorizado.'},{status:401});
 return NextResponse.json({error:'Teste autorizado. Geração ainda desativada até a implementação de limites seguros.'},{status:503});
}

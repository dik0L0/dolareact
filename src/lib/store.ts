export type TxType = 'income' | 'expense';
export type Transaction = { id: string; type: TxType; amount: number; category: string; description: string; date: string };
export type Goal = { id: string; name: string; target: number; saved: number; deadline: string };
export type Budget = { id: string; category: string; limit: number };
export type State = { transactions: Transaction[]; goals: Goal[]; budgets: Budget[]; weeklySaving: number; name: string; dark: boolean };
export const categories = ['Alimentation','Transport','Logement','Factures','Santé','Loisirs','Éducation','Shopping','Autres'];
const today = new Date();
const dateAgo = (days: number) => { const d = new Date(today); d.setDate(d.getDate()-days); return d.toISOString().slice(0,10); };
export const initial: State = { name:'',dark:false,weeklySaving:100000, transactions:[], goals:[], budgets:[] };
export const demo: State = { ...initial, name:'Mon espace', transactions:[
 {id:'d1',type:'income',amount:750000,category:'Salaire',description:'Salaire mensuel',date:dateAgo(3)},
 {id:'d2',type:'expense',amount:95000,category:'Alimentation',description:'Courses',date:dateAgo(2)},
 {id:'d3',type:'expense',amount:45000,category:'Transport',description:'Déplacements',date:dateAgo(1)},
 {id:'d4',type:'expense',amount:120000,category:'Logement',description:'Loyer',date:dateAgo(5)},
 {id:'d5',type:'income',amount:150000,category:'Activité',description:'Mission freelance',date:dateAgo(6)},
 {id:'d6',type:'expense',amount:30000,category:'Factures',description:'Internet',date:dateAgo(4)}],
 goals:[{id:'g1',name:'Fonds de sécurité',target:2000000,saved:550000,deadline:''},{id:'g2',name:'Projet personnel',target:5000000,saved:900000,deadline:''}],
 budgets:[{id:'b1',category:'Alimentation',limit:150000},{id:'b2',category:'Transport',limit:80000},{id:'b3',category:'Loisirs',limit:60000}] };
export const money = (n:number) => new Intl.NumberFormat('fr-FR',{maximumFractionDigits:0}).format(Math.round(n))+' FCFA';
export const uid = () => crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
export const currentMonth = (date:string) => date.slice(0,7) === new Date().toISOString().slice(0,7);
export function readState(): State { try { const raw=localStorage.getItem('dola-v1'); if(!raw)return initial; const p=JSON.parse(raw); return {...initial,...p}; }catch{return initial;} }
export function saveState(s:State){localStorage.setItem('dola-v1',JSON.stringify(s));}

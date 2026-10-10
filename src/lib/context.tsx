import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
import {readState,saveState,type State} from './store';
type Store={state:State;update:(fn:(s:State)=>State)=>void};
const Context=createContext<Store|null>(null);
export function StoreProvider({children}:{children:ReactNode}){const [state,setState]=useState<State>(readState);useEffect(()=>{saveState(state);document.documentElement.classList.toggle('dark',state.dark)},[state]);const update=(fn:(s:State)=>State)=>setState(s=>fn(s));return <Context.Provider value={{state,update}}>{children}</Context.Provider>}
export function useStore(){const ctx=useContext(Context);if(!ctx)throw new Error('StoreProvider manquant');return ctx;}

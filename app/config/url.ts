import { atom } from 'jotai'
import { WeatherType } from './weatherType'

export const  weatherApi = atom("")
export const  weatherDataAtom = atom(null)
export const WeatherList = atom<WeatherType[]>([]);
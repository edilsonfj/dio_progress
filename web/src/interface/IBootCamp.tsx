import { ReactNode , ImgHTMLAttributes } from 'react'

export interface IBootCampRoot {
  children: ReactNode
}

export interface IBootCampLogo extends ImgHTMLAttributes<HTMLImageElement>{
  src: string
}

export interface IBootCampInfo {
  title: string
  percentage: number,
  className: string,
}

export interface IBootCampDescription {
  curses: string,
  hours: string
  levels: string
}
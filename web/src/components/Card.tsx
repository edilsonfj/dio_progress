import { ICard } from '../interface'
import { clsx } from 'clsx'

export function Card ({ children , className }: ICard) {
  return(
    <section className={clsx('flex flex-col items-center bg-purple-50/5 rounded-xl border-solid border-2 border-purple-900' , className)}>
      {children}
    </section>
  )
}
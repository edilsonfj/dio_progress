import { IBootCampRoot , IBootCampLogo , IBootCampInfo , IBootCampDescription } from '../interface'
import Icon from '@mdi/react'
import { mdiNotebookCheck , mdiTimerPlay , mdiSignalCellular1 } from '@mdi/js'
import { clsx } from 'clsx'

export function BootCampRoot ({children , href }: IBootCampRoot) {
  return(
    <a href={href} className="w-[560px] h-[96px] px-10 py-4 flex flex-row items-center justify-between bg-gradient rounded-xl">
      {children}
    </a>
  )
}
BootCampRoot.displayName = 'BootCamp.Root'

export function BootCampLogo ({src}: IBootCampLogo) {
  return(
    <img src={src} alt="Logo bootcamp dio Querbec" />
  )
}
BootCampLogo.displayName = 'BootCamp.Logo'

export function BootCampInfo ({title , percentage , className }: IBootCampInfo) {
  return(
    <div className="w-64 min-h-min flex flex-col items-start justify-center gap-4">
      <h3 className="font-sans font-bold text-xl text-purple-50">
        {title}
      </h3>
      <div className="w-64 h-4 rounded-xl flex items-center justify-start bg-purple-50">
        <div className={clsx('h-4 rounded-xl flex items-center justify-center bg-purple-900' , className)}>
          <span className="font-sans font-bold text-xs text-purple-50">
            {percentage}
            <span>%</span>
          </span>
        </div>
      </div>
  </div>
  )
}
BootCampInfo.displayName = 'BootCamp.Info'

export function BootCampDescription ({ curses,
  hours, levels }: IBootCampDescription) {
  return(
    <article className="flex flex-col items-start justify-center gap-0.5">
      <div className="flex flex-row items-center justify-start gap-1">
        <Icon path={mdiNotebookCheck } size={0.8} color="#4C1D95"/>
        <span className="font-sans font-bold text-xs text-purple-50">{curses}</span>
      </div>
      <div className="flex flex-row items-center justify-start gap-1">
        <Icon path={mdiTimerPlay} size={0.8} color="#4C1D95"/>
        <span className="font-sans font-bold text-xs text-purple-50">{hours}</span>
      </div>
      <div className="flex flex-row items-center justify-start gap-1">
        <Icon path={mdiSignalCellular1} size={0.8} color="#4C1D95"/>
        <span className="font-sans font-bold text-xs text-purple-50">{levels}</span>
      </div>
    </article>
  )
}
BootCampDescription.displayName = 'BootCamp.Description'


export const BootCamp = {
  Root: BootCampRoot,
  Logo: BootCampLogo,
  Info: BootCampInfo,
  Description: BootCampDescription,
}

import Icon from '@mdi/react'
import { mdiLinkedin , mdiGithub  } from '@mdi/js'

export function Social () {
  return(
    <div className="min-w-min min-h-min p-2 flex flex-row items-center justify-center gap-8">
      <a href="#" className="p-1 rounded-xl hover:bg-gradient">
        <Icon path={mdiLinkedin} size={2} color="#4C1D95"/>
      </a>
      <a href="#" className="p-1 rounded-xl hover:bg-gradient">
        <Icon path={mdiGithub} size={2} color="#4C1D95"/>
      </a>
    </div>
  )
}
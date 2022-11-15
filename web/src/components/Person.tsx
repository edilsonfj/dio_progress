import Avatar from '@mui/material/Avatar'
import Profile from '../assets/efj.svg'

export function Person () {
  return(
    <div className="flex flex-col items-center justify-center text-xl font-sans font-bold gap-4">
      <Avatar className="border-solid border-2 border-purple-900" alt="Edilson Júnior" src={Profile} sx={{ width: 80, height: 80 }} />
      <div className="flex flex-col items-center justify-center gap-1">
        <h2 className="font-sans font-bold text-xl text-purple-50">
          Edilson Júnior
        </h2>
        <span className="font-sans font-normal text-sm text-gray-400">
          @Developer
        </span>
      </div>
    </div>
  )
}
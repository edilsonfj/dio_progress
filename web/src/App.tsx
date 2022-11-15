import { Card , Person , Coment , Social , BootCamp } from './components'
import './style/main.css'

export function App() {
  return (
    <main className="flex flex-row items-center justify-center gap-10">
      <Card className="w-[360px] h-[540px] justify-center gap-10">
        <Person/>
        <Coment/>
        <Social/>
      </Card>
      <Card className="w-[640px] h-[540px] p-10  justify-center gap-8">
        <h1 className="font-sans font-bold text-4xl text-purple-50">
          Dio Progress
        </h1>
        <BootCamp.Root>
          <BootCamp.Logo src="../src/assets/bootQuerbec.svg"/>
          <BootCamp.Info className="w-40"  title="Québec Java Digital" percentage={60}/>
          <BootCamp.Description curses="25 cursos" hours="93 horas" levels="Básico"/>
        </BootCamp.Root>
        <BootCamp.Root>
          <BootCamp.Logo src="../src/assets/bootPottencial.svg"/>
          <BootCamp.Info className="w-24" title="Pottencial .NET Developer" percentage={30}/>
          <BootCamp.Description curses="32 cursos" hours="96 horas" levels="Básico"/>
        </BootCamp.Root>
        <BootCamp.Root>
          <BootCamp.Logo src="../src/assets/dio.svg"/>
          <BootCamp.Info className="" title="Em breve" percentage={0}/>
          <BootCamp.Description curses="0 cursos" hours="0 horas" levels="Básico"/>
        </BootCamp.Root>
      </Card>
      
    </main>
  )
}

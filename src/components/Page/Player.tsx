import { ChevronDown, MessageCircle } from 'lucide-react'

export function Player() {
  return (
    <div className='h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center'>
      <div className='flex w-[1100px] flex-col gap-6'>
        <div className='flex items-center justify-between'>

          {/* HEADER */}
          <div className='flex flex-col gap-1'>
            <h1 className='text-2xl font-bold'>Fundamentos do Redux</h1>
            <span className='text-sm text-zinc-400'>Módulo Conceitos Iniciais</span>
          </div>
          <button className='flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600'>
            <MessageCircle className='w-4 h-4' />
            Deixar feedback
          </button>
        </div>

        <main className='relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow'>
          <div className='flex-1'>
            vídeo
          </div>
          <aside className='w-80 border-l border-zinc-800 bg-zinc-900 h-[500px]'>
            <div>
              <button className='flex w-full items-center gap-3 bg-zinc-800 p-4'>
                <div className='flex w-10 h-10 rounded-full items-center justify-center bg-zinc-950 text-xs'>1</div>
                <div className='flex flex-col gap-1 text-left'>
                  <strong className='text-sm'>Conceitos iniciais</strong>
                  <span className='text-xs text-zinc-400'>12 aulas</span>
                </div>
                <ChevronDown className='w-5 h-5 ml-auto text-zinc-400' />
              </button>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}
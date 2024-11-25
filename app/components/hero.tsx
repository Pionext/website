export function Hero() {
  return (
    <section className="bg-[#0000FF] relative min-h-screen font-crimson">
      <div className="absolute inset-0 flex flex-col justify-center px-8">
        <div className="flex justify-center items-center">
          <img 
            src="/images/pionext_logotype.svg" 
            alt="Pionext" 
            className="w-[95%] max-w-[1400px]"
          />
        </div>
        
        <div className="absolute bottom-8 left-8">
          <p className="text-2xl text-white leading-normal max-w-2xl">
            A community-driven platform for proposing, funding, and developing projects using a credit-based system with AMMs.
          </p>
        </div>
      </div>
    </section>
  )
}


import PioneeringSvg from '@/public/images/hero/PIONEERING.svg'
import CommunityDrivenVenturesSvg from '@/public/images/hero/COMMUNITY-DRIVEN_VENTURES.svg'

export function Hero() {
  return (
    <section className="bg-white relative min-h-screen overflow-hidden">
      <div className="h-screen flex items-center">
        <div className="animate-scroll-left whitespace-nowrap">
          <div className="inline-flex items-center">
            {/* First set */}
            <div className="inline-flex items-center gap-2 mr-8">
              <PioneeringSvg className="h-[15vh] w-auto" />
              
              <div className="h-[15vh] aspect-square rounded-xl overflow-hidden">
                <img 
                  src="/images/hero/phone.png" 
                  alt="Phone"
                  className="h-full w-full object-cover"
                />
              </div>

            <div className="h-[15vh] aspect-square bg-[#E2FF81] rounded-xl flex flex-col justify-center p-4">
              <div className="text-black text-[1.5vh]">Current price</div>
              <div className="text-black text-[3vh] font-medium">$ 23.4</div>
            </div>

              <CommunityDrivenVenturesSvg className="h-[15vh] w-auto" />
            </div>

            {/* Duplicate set for infinite scroll */}
            <div className="inline-flex items-center gap-2">
              <PioneeringSvg className="h-[15vh] w-auto" />
              
              <div className="h-[15vh] aspect-square rounded-xl overflow-hidden">
                <img 
                  src="/images/hero/phone.png" 
                  alt="Phone"
                  className="h-full w-full object-cover"
                />
              </div>

            <div className="h-[15vh] aspect-square bg-[#E2FF81] rounded-xl flex flex-col justify-center p-4">
              <div className="text-black text-[1.5vh]">Current price</div>
              <div className="text-black text-[3vh] font-medium">$ 23.4</div>
            </div>

              <CommunityDrivenVenturesSvg className="h-[15vh] w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


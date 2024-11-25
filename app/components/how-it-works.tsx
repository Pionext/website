export function HowItWorks() {
  const steps = [
    {
      number: "1.",
      title: "Create App Token",
      description: "Easily make your unique utility token for your project."
    },
    {
      number: "2.",
      title: "Initial Token Sale",
      description: "Fair launch with rising prices. Early supporters get better deals. Risk-free: Sell back anytime before funding goal is met."
    },
    {
      number: "3.",
      title: "Initial Token Sale",
      description: "When funded, tokens move to a decentralized exchange. Trading starts with our ready-made liquidity pool."
    }
  ]

  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 gap-x-24 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <div className="text-[#0000FF] text-[120px] font-sans font-black leading-none mb-8">
                {step.number}
              </div>
              <h3 className="text-[#0000FF] text-2xl font-crimson mb-4">
                {step.title}
              </h3>
              <p className="text-gray-900 text-xl leading-relaxed font-crimson">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


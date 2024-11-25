export function Features() {
  const features = [
    {
      title: "Ultra-Early Stage Funding",
      description: "Provide access to funding for projects at the idea stage, enabling innovators to turn concepts into reality."
    },
    {
      title: "Viability Assessment",
      description: "Leverage collective wisdom to evaluate early-stage ideas and prototypes, offering valuable feedback without the need for traditional VC pitching."
    },
    {
      title: "Built-In Community",
      description: "Foster a supportive ecosystem where funded projects instantly gain a community of backers, accelerating growth and adoption."
    }
  ]

  return (
    <section className="min-h-screen bg-white font-crimson flex items-center">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-[#0000FF] text-2xl mb-16"></h1>
        <h2 className="text-[#0000FF] text-5xl sm:text-7xl leading-tight mb-24 font-sans font-black">
          PIONEERING COMMUNITY-DRIVEN
          VENTURES
        </h2>
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index}>
              <h3 className="text-[#0000FF] text-2xl mb-4">{feature.title}</h3>
              <p className="text-gray-800 text-xl leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


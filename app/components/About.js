export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary">FlowToWork</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At <span className="font-semibold text-primary">FlowToWork</span>, we believe that businesses should focus on what they do best—while intelligent automation handles the rest.
              </p>

              <p>
                We specialize in creating cutting-edge automation workflows and deploying AI agents that streamline operations, reduce manual tasks, and unlock unprecedented efficiency gains.
              </p>

              <p>
                Our mission is to empower organizations of all sizes to leverage the latest AI technology, optimize their business processes, and achieve sustainable growth in an increasingly competitive landscape.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">10x</div>
                  <div className="text-gray-700 font-medium">Faster Workflows</div>
                </div>
                <div className="bg-gradient-to-br from-secondary/10 to-accent/20 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-700 font-medium">AI Automation</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl p-12 shadow-2xl">
              <div className="space-y-8">
                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Efficiency First</h3>
                    <p className="text-white/90">Optimize every aspect of your workflow</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">AI-Powered Agents</h3>
                    <p className="text-white/90">Deploy intelligent agents that learn and adapt</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Scalable Solutions</h3>
                    <p className="text-white/90">Grow your business without growing complexity</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-highlight/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}


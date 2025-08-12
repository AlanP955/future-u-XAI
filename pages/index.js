import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Head>
        <title>Biddeford Demo Apps</title>
        <meta name="description" content="Next.js demo project with Biddeford Energy Command and AI-Powered Marketing Assistant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Biddeford Demo Apps
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our Next.js demo applications featuring energy management and AI-powered marketing tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/pilot" className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              🏢 Biddeford Energy Command
            </h2>
            <p className="text-gray-600 mb-4">
              Real-time grid monitoring, weather data, and energy savings dashboard for Biddeford, ME
            </p>
            <span className="text-blue-500 font-medium">View Demo →</span>
          </Link>

          <Link href="/marketing" className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              🤖 AI Marketing Assistant
            </h2>
            <p className="text-gray-600 mb-4">
              Generate instant marketing copy, strategy, and target audience analysis with AI
            </p>
            <span className="text-green-500 font-medium">View Demo →</span>
          </Link>
        </div>
      </main>
    </div>
  )
}
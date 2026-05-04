import Navbar from "../Home/components/Navbar";
import Footer from "../Home/components/Footer";

export default function Developers() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Trusted crypto infrastructure to power your business
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Build solutions that scale with powerful APIs and SDKs from Coinbase.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Get started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact sales
              </button>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Trusted by the best</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-2xl font-bold">Uniswap</div>
              <div className="text-2xl font-bold">Anthropic</div>
              <div className="text-2xl font-bold">Shopify</div>
              <div className="text-2xl font-bold">Solana</div>
            </div>
          </div>
        </section>

        {/* Build Solutions Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Build solutions that scale
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Payments</h3>
                <p className="text-gray-600">Enable fast and global stablecoin payments with a single integration.</p>
              </div>
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Trading</h3>
                <p className="text-gray-600">Launch crypto trading and custody for your users.</p>
              </div>
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Wallets</h3>
                <p className="text-gray-600">Deploy customizable and scalable wallets for your business.</p>
              </div>
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Stablecoins</h3>
                <p className="text-gray-600">Access USDC and Coinbase Custom Stablecoins.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Coinbase Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Coinbase Developer Platform?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Simple</h3>
                <p className="text-gray-600">Start building with a single API key and your existing Coinbase accounts in minutes.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Product depth</h3>
                <p className="text-gray-600">Access to the deepest product suite: we offer everything you need, startup to enterprise.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <p className="text-gray-600">Utilize the same audited custody, compliance controls, and risk programs that power Coinbase.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Trusted</h3>
                <p className="text-gray-600">The safety and security of working with the most trusted name in crypto.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Case studies</h2>
            <p className="text-xl text-gray-600 mb-8">
              Learn how the biggest businesses across the globe are using CDP to create the future of payments, trading, banking, and onchain apps.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Learn more
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
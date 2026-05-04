import Navbar from "../Home/components/Navbar";
import Footer from "../Home/components/Footer";

export default function Institutions() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              The trusted bridge to crypto markets for institutions
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Institutions rely on Coinbase Institutional to understand, plan, and realize opportunities created by digital assets and web3.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Get started
            </button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600">$236B</div>
                <div className="text-gray-600">Quarterly Institutional Trading Volume</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">$300B</div>
                <div className="text-gray-600">Assets Under Custody</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">275+</div>
                <div className="text-gray-600">Assets for Trading</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">470+</div>
                <div className="text-gray-600">Assets for Custody</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              A comprehensive platform for every stage of the investment lifecycle
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Broad range of assets</h3>
                <p className="text-gray-600">275+ assets available for trading with 340+ different trading pairs.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Unmatched liquidity</h3>
                <p className="text-gray-600">Coinbase Exchange and Coinbase Prime offer access to deep and diverse liquidity.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Dedicated trading desk</h3>
                <p className="text-gray-600">Coinbase Execution Services offers execution consultancy and high-touch trading on an agency-only basis.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Powering the world's largest and most sophisticated institutions
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Investors turn to Coinbase for leading-edge solutions to capitalize on opportunities in the evolving digital asset landscape.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-2xl font-bold">BlackRock</div>
              <div className="text-2xl font-bold">a16z</div>
              <div className="text-2xl font-bold">Grayscale</div>
              <div className="text-2xl font-bold">WisdomTree</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
import Navbar from "../Home/components/Navbar";
import Footer from "../Home/components/Footer";

export default function Company() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About Coinbase</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Coinbase powers the cryptoeconomy. Customers around the world discover and begin their journeys with crypto through Coinbase.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600">$1.2T</div>
                <div className="text-gray-600">Annual Trading Volume*</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">$376B</div>
                <div className="text-gray-600">Assets on Platform*</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">100+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600">4,700+</div>
                <div className="text-gray-600">Employees</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">* As of 12/31/25</p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Commitment to Compliance</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              A strong compliance foundation is critical to Coinbase's mission of being the most trusted crypto platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Know-your-customer (KYC) verification</h3>
                <p className="text-gray-600">Ensuring secure and compliant user verification.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Compliance Requirements</h3>
                <p className="text-gray-600">Meeting regulatory standards for digital assets.</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Scaled Compliance Solutions</h3>
                <p className="text-gray-600">Advanced technology for compliance at scale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our executive team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Brian Armstrong</h3>
                <p className="text-gray-600">Co-Founder & Chief Executive Officer</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Emilie Choi</h3>
                <p className="text-gray-600">President & Chief Operating Officer</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Alesia Haas</h3>
                <p className="text-gray-600">Chief Financial Officer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Working at Coinbase</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our mission is to increase economic freedom in the world. Join us and make an impact at a global scale.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              View open positions
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { logoutUser } from "../../utils/api";

export const profileLoader = async () => {
  const apiBase = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
  const response = await fetch(`${apiBase}/api/auth/profile`, {
    credentials: "include",
  });

    // LOG: What did the server say?
  console.log(`[LOADER] Response Status: ${response.status}`);

  if (!response.ok) {
    console.warn("[LOADER] Auth failed, redirecting to /signin");

    throw redirect("/signin");
  }

  const result = await response.json();
  return result.data.user;
};

export default function Profile() {
  const user = useLoaderData();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/signin");
    } catch (error) {
      console.error(error);
      navigate("/signin");
    }
  };

  // Mock data for portfolio and activity
  const portfolio = {
    totalBalance: 12547.89,
    change24h: 2.34,
    holdings: [
      { symbol: "BTC", name: "Bitcoin", amount: 0.5, value: 25000, change: 1.2 },
      { symbol: "ETH", name: "Ethereum", amount: 5.0, value: 15000, change: -0.8 },
      { symbol: "ADA", name: "Cardano", amount: 10000, value: 7547.89, change: 5.6 },
    ]
  };

  const recentActivity = [
    { type: "Buy", asset: "BTC", amount: "0.1 BTC", value: "$5,000", date: "2024-01-15", status: "Completed" },
    { type: "Sell", asset: "ETH", amount: "2.0 ETH", value: "$6,000", date: "2024-01-14", status: "Completed" },
    { type: "Deposit", asset: "USD", amount: "$1,000", value: "$1,000", date: "2024-01-13", status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, {user.name}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Portfolio Overview */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Portfolio</h2>
                <div className="text-right">
                  <p className="text-2xl font-bold">${portfolio.totalBalance.toLocaleString()}</p>
                  <p className={`text-sm ${portfolio.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {portfolio.change24h >= 0 ? '+' : ''}{portfolio.change24h}% (24h)
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {portfolio.holdings.map((holding) => (
                  <div key={holding.symbol} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-blue-600">{holding.symbol}</span>
                      </div>
                      <div>
                        <p className="font-medium">{holding.name}</p>
                        <p className="text-sm text-gray-600">{holding.amount} {holding.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${holding.value.toLocaleString()}</p>
                      <p className={`text-sm ${holding.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {holding.change >= 0 ? '+' : ''}{holding.change}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'Buy' ? 'bg-green-100 text-green-600' :
                        activity.type === 'Sell' ? 'bg-red-100 text-red-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        <span className="text-xs font-semibold">
                          {activity.type === 'Buy' ? 'B' : activity.type === 'Sell' ? 'S' : 'D'}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{activity.type} {activity.asset}</p>
                        <p className="text-sm text-gray-600">{activity.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{activity.amount}</p>
                      <p className="text-sm text-gray-600">{activity.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
              <div className="grid gap-3">
                <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  Buy Crypto
                </button>
                <button className="w-full py-3 px-4 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors">
                  Sell Crypto
                </button>
                <button className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                  Deposit USD
                </button>
                <button className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                  Withdraw
                </button>
              </div>
            </div>

            {/* Account Details */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-6">Account Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wider">Name</p>
                  <p className="font-medium">{user.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wider">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wider">Account ID</p>
                  <p className="font-medium text-sm">{user.id}</p>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-6">Security</h2>
              <div className="space-y-3">
                <button className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-left">
                  Change Password
                </button>
                <button className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-left">
                  Two-Factor Auth
                </button>
                <button className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-left">
                  Security Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

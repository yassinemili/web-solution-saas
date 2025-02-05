export default function PricingCard() {
  const features = [
    "20,000+ PNG & SVG graphics",
    "Unlimited project support",
    "Advanced analytics and insights",
    "Priority customer support",
  ];

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-extrabold text-gray-800">
            Professional
          </h3>
          <p className="mt-2 text-gray-600 text-center">
            Ideal for individuals who need advanced features and tools for
            client work.
          </p>
        </div>

        {/* Price */}
        <div className="mt-6 flex justify-center items-baseline">
          <span className="text-4xl font-bold text-indigo-600">$25</span>
          <span className="ml-2 text-gray-500 text-lg">/Month</span>
        </div>

        {/* Call-to-Action */}
        <div className="mt-6">
          <a
            href="#"
            className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
          >
            Get Started Now
          </a>
        </div>

        {/* Features */}
        <div className="mt-8">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="ml-3 text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

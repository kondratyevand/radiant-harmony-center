
const Products = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* FOR HER Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-playfair font-semibold text-center text-[#FF69B4]">
              FOR HER
            </h2>
            <div className="bg-[#FFDEE2] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#FF69B4]">
                  Beauty & Wellness
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FF69B4] rounded-full mr-2"></span>
                    Anti-aging treatment
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FF69B4] rounded-full mr-2"></span>
                    Skin rejuvenation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FF69B4] rounded-full mr-2"></span>
                    Hair growth stimulation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#FF69B4] rounded-full mr-2"></span>
                    Hormonal balance support
                  </li>
                </ul>
                <button className="mt-6 w-full bg-[#FF69B4] text-white py-3 rounded-full hover:bg-[#FF1493] transition-colors duration-300">
                  Explore Products
                </button>
              </div>
            </div>
          </div>

          {/* FOR HIM Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-playfair font-semibold text-center text-[#0EA5E9]">
              FOR HIM
            </h2>
            <div className="bg-[#D3E4FD] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#0EA5E9]">
                  Performance & Recovery
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0EA5E9] rounded-full mr-2"></span>
                    Muscle recovery
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0EA5E9] rounded-full mr-2"></span>
                    Joint pain relief
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0EA5E9] rounded-full mr-2"></span>
                    Energy boost
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#0EA5E9] rounded-full mr-2"></span>
                    Athletic performance
                  </li>
                </ul>
                <button className="mt-6 w-full bg-[#0EA5E9] text-white py-3 rounded-full hover:bg-[#0284C7] transition-colors duration-300">
                  Explore Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

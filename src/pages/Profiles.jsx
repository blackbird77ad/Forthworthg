const Profiles = () => (
  <div className="min-h-screen bg-gray-50 px-6 py-20">
      <h1 className="text-4xl font-extrabold text-center mb-10">Font Style Preview – About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Font 1 */}
        <div className="bg-white p-6 rounded shadow text-blue-800 font-bold text-2xl tracking-wide">
          Inter Bold - Blue 800
        </div>

        {/* Font 2 */}
        <div className="bg-white p-6 rounded shadow text-gray-900 font-extrabold text-3xl uppercase">
          Montserrat ExtraBold - Gray 900
        </div>

        {/* Font 3 */}
        <div className="bg-white p-6 rounded shadow text-indigo-700 font-semibold text-2xl italic">
          Poppins SemiBold Italic - Indigo 700
        </div>

        {/* Font 4 */}
        <div className="bg-white p-6 rounded shadow text-emerald-800 font-black text-3xl">
          Lato Black - Emerald 800
        </div>

        {/* Font 5 */}
        <div className="bg-white p-6 rounded shadow text-red-700 font-bold text-2xl tracking-widest">
          Open Sans Bold - Red 700
        </div>

        {/* Font 6 */}
        <div className="bg-white p-6 rounded shadow text-slate-800 font-bold text-2xl">
          Roboto Bold - Slate 800
        </div>

        {/* Font 7 */}
        <div className="bg-white p-6 rounded shadow text-teal-700 font-extrabold text-2xl">
          Nunito ExtraBold - Teal 700
        </div>

        {/* Font 8 */}
        <div className="bg-white p-6 rounded shadow text-orange-700 font-bold text-2xl uppercase tracking-tight">
          Raleway Bold - Orange 700
        </div>

        {/* Font 9 */}
        <div className="bg-white p-6 rounded shadow text-zinc-900 font-semibold text-2xl">
          DM Sans SemiBold - Zinc 900
        </div>
      </div>
    </div>
);
export default Profiles;

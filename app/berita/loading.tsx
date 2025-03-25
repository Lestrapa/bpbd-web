export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12 animate-pulse">
      <div className="max-w-3xl mx-auto">
        <div className="h-6 w-2/3 bg-gray-300 rounded mb-4"></div>
        <div className="h-4 w-1/3 bg-gray-300 rounded mb-6"></div>
        <div className="h-64 w-full bg-gray-300 rounded-lg mb-6"></div>
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
          <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
        </div>
      </div>

      <section className="mt-12">
        <div className="h-6 w-2/3 bg-gray-300 rounded mb-4"></div>
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-48 w-full bg-gray-300"></div>
              <div className="p-4 space-y-2">
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

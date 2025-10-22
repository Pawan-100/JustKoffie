function LoadingSkeleton({ type = 'card' }) {
  if (type === 'card') {
    return (
      <div className="bg-coffee-50 rounded-lg overflow-hidden shadow-lg animate-pulse">
        <div className="w-full h-64 bg-gradient-to-r from-coffee-200 via-coffee-300 to-coffee-200" />
        <div className="p-6 space-y-4">
          <div className="h-6 bg-coffee-200 rounded w-3/4" />
          <div className="h-4 bg-coffee-200 rounded w-full" />
          <div className="h-10 bg-coffee-300 rounded w-full" />
        </div>
      </div>
    );
  }

  if (type === 'detail') {
    return (
      <div className="min-h-screen bg-coffee-50">
        <div className="bg-coffee-800 py-6 px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="h-6 w-32 bg-coffee-600 rounded" />
            <div className="h-6 w-24 bg-coffee-600 rounded" />
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-pulse">
            <div className="h-96 bg-gradient-to-r from-coffee-200 via-coffee-300 to-coffee-200" />
            <div className="p-12 space-y-8">
              <div className="space-y-4">
                <div className="h-8 bg-coffee-200 rounded w-1/3" />
                <div className="h-32 bg-coffee-100 rounded" />
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-coffee-200 rounded w-1/3" />
                <div className="h-24 bg-coffee-100 rounded" />
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-coffee-200 rounded w-1/3" />
                <div className="grid grid-cols-4 gap-4">
                  <div className="h-16 bg-coffee-200 rounded" />
                  <div className="h-16 bg-coffee-200 rounded" />
                  <div className="h-16 bg-coffee-200 rounded" />
                  <div className="h-16 bg-coffee-200 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default LoadingSkeleton;

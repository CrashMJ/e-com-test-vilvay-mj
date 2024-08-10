const ProductSkeleton = ()  =>{
    return (
      <div className="animate-pulse">
        <div className="px-4 lg:px-20 pt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-md shadow-sm">
              <div className="h-40 bg-gray-300 rounded-md"></div>
              <div className="mt-4 h-6 bg-gray-300 rounded-md"></div>
              <div className="mt-2 h-4 bg-gray-300 rounded-md"></div>
              <div className="mt-2 h-4 bg-gray-300 rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default ProductSkeleton;
  
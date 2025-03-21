const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
      <div className="relative w-16 h-16">
        {/* Outer ring with gradient */}
        <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin border-t-blue-500 border-r-blue-500 border-b-blue-500 border-l-transparent" />
        {/* Inner ring with gradient */}
        <div className="absolute inset-2 border-4 border-transparent rounded-full animate-spin-reverse border-t-blue-300 border-r-blue-300 border-b-blue-300 border-l-transparent" />
      </div>
      <p className="text-blue-500 font-medium">Loading...</p>
    </div>
  );
};

export default Loading;

export function TransactionTableSkleton() {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="w-20 h-6 bg-gray-300 rounded"></div>
        <div className="w-16 h-5 bg-gray-300 rounded"></div>
      </div>
      <div className="w-32 h-4 bg-gray-300 rounded mt-2"></div>
      <div className="w-24 h-4 bg-gray-300 rounded mt-2"></div>
      <div className="w-40 h-3 bg-gray-300 rounded mt-2"></div>
    </div>
  );
}


export default function ErrorScreen() {
  return (
    <div className="w-full flex h-[73vh] flex-col items-center justify-center py-12 px-5 bg-gray-100 dark:bg-gray-900 rounded-lg">
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-400 dark:text-gray-600 mb-2">😕</div>
        <p className="text-gray-700 text-2xl dark:text-gray-300  font-medium">
          No data found or something went wrong
        </p>
      </div>
    </div>
  );
}

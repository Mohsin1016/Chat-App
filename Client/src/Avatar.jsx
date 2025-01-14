export default function Avatar({ online,username ,userId }) {
  // Ensure userId is defined and has the expected format
  if (!userId || typeof userId !== 'string') {
    return null; // or render a placeholder/avatar indicating missing user
  }

  const colors = ['bg-[#FF00FF]', 'bg-[#808080]',
                  'bg-[#00FF00]', 'bg-[#00FFFF]',
                  'bg-blue-200', 'bg-yellow-200',
                  'bg-orange-200', 'bg-pink-200', 'bg-fuchsia-200', 'bg-rose-200'];
  const userIdBase10 = parseInt(userId.substring(10), 16);
  const colorIndex = userIdBase10 % colors.length;
  const color = colors[colorIndex];
  return (
    <div className={"w-8 h-8 relative rounded-full flex items-center " + color}>
      <div className="text-center w-full opacity-70">{username ? username[0] : '?'}</div>
      {online && (
        <div className="absolute w-3 h-3 bg-green-400 bottom-0 right-0 rounded-full border border-white"></div>
      )}
      {!online && (
        <div className="absolute w-3 h-3 bg-gray-400 bottom-0 right-0 rounded-full border border-white"></div>
      )}
    </div>
  );
}

import { useHolidayStatus } from '@/hooks/useHolidayStatus';

export const HolidayStatusWidget = () => {
  const { isHoliday, status, holidayName, isLoading, error } = useHolidayStatus();

  if (isLoading) {
    return (
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-military-900/95 border-b border-military-700/50 backdrop-blur-sm"
        aria-label="Daily store status"
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center gap-2 text-sm text-military-300">
            <div className="w-2 h-2 rounded-full bg-military-500 animate-pulse" />
            <span>Loading store status...</span>
          </div>
        </div>
      </header>
    );
  }

  const statusText = error 
    ? error
    : isHoliday 
      ? `Closed${holidayName ? ` (${holidayName})` : ' (public holiday)'}`
      : 'Open';

  const dotColor = error 
    ? 'bg-military-500' 
    : status === 'open' 
      ? 'bg-green-500' 
      : 'bg-red-500';

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-military-900/95 border-b border-military-700/50 backdrop-blur-sm"
        aria-label="Daily store status"
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center gap-2 text-sm text-military-100">
            <div className={`w-2 h-2 rounded-full ${dotColor}`} />
            <span className="font-medium">Stores today:</span>
            <span className={status === 'open' ? 'text-green-400' : 'text-red-400'}>
              {statusText}
            </span>
          </div>
        </div>
      </header>
      {/* Spacer to push content below the fixed header */}
      <div className="h-10" />
    </>
  );
};
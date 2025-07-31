import { useState, useEffect } from 'react';

interface Holiday {
  date: string;
  localName: string;
  name: string;
}

interface HolidayStatus {
  isHoliday: boolean;
  status: 'open' | 'closed';
  holidayName?: string;
  isLoading: boolean;
  error?: string;
}

interface CachedHolidayData {
  holidays: Holiday[];
  timestamp: number;
  year: number;
}

export const useHolidayStatus = (): HolidayStatus => {
  const [status, setStatus] = useState<HolidayStatus>({
    isHoliday: false,
    status: 'open',
    isLoading: true,
  });

  const getCurrentYear = () => new Date().getFullYear();
  
  const getTodayInSlovakia = () => {
    // Get today's date in Slovakia timezone (Europe/Bratislava)
    const now = new Date();
    const slovakiaDate = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Bratislava"}));
    return slovakiaDate.toISOString().split('T')[0]; // YYYY-MM-DD format
  };

  const loadCachedHolidays = (): Holiday[] | null => {
    try {
      const cached = localStorage.getItem('slovak-holidays');
      if (!cached) return null;

      const data: CachedHolidayData = JSON.parse(cached);
      const currentYear = getCurrentYear();
      const isExpired = Date.now() - data.timestamp > 24 * 60 * 60 * 1000; // 24 hours
      const isWrongYear = data.year !== currentYear;

      if (isExpired || isWrongYear) {
        localStorage.removeItem('slovak-holidays');
        return null;
      }

      return data.holidays;
    } catch {
      return null;
    }
  };

  const cacheHolidays = (holidays: Holiday[]) => {
    const data: CachedHolidayData = {
      holidays,
      timestamp: Date.now(),
      year: getCurrentYear(),
    };
    localStorage.setItem('slovak-holidays', JSON.stringify(data));
  };

  const fetchHolidays = async (): Promise<Holiday[]> => {
    const currentYear = getCurrentYear();
    const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${currentYear}/SK`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch holidays');
    }
    
    const holidays: Holiday[] = await response.json();
    cacheHolidays(holidays);
    return holidays;
  };

  const checkHolidayStatus = (holidays: Holiday[]): HolidayStatus => {
    const today = getTodayInSlovakia();
    const todayHoliday = holidays.find(holiday => holiday.date === today);

    if (todayHoliday) {
      return {
        isHoliday: true,
        status: 'closed',
        holidayName: todayHoliday.localName,
        isLoading: false,
      };
    }

    return {
      isHoliday: false,
      status: 'open',
      isLoading: false,
    };
  };

  useEffect(() => {
    const loadHolidayStatus = async () => {
      try {
        // Try to load from cache first
        let holidays = loadCachedHolidays();
        
        if (!holidays) {
          // Fetch fresh data if no valid cache
          holidays = await fetchHolidays();
        }

        const holidayStatus = checkHolidayStatus(holidays);
        setStatus(holidayStatus);
      } catch (error) {
        // Try to use cached data even if expired, as fallback
        const cachedHolidays = loadCachedHolidays();
        if (cachedHolidays) {
          const holidayStatus = checkHolidayStatus(cachedHolidays);
          setStatus(holidayStatus);
        } else {
          setStatus({
            isHoliday: false,
            status: 'open',
            isLoading: false,
            error: 'Status unavailable',
          });
        }
      }
    };

    loadHolidayStatus();
  }, []);

  return status;
};
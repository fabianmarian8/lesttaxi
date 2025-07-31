import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';

interface ExchangeRate {
  rate: number;
  timestamp: number;
}

const ExchangeRateWidget: React.FC = () => {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const CACHE_KEY = 'usd_eur_rate';
  const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

  const fetchExchangeRate = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
      
      if (data.rates && data.rates.EUR) {
        const rate = data.rates.EUR;
        const timestamp = Date.now();
        
        // Cache the data
        localStorage.setItem(CACHE_KEY, JSON.stringify({ rate, timestamp }));
        
        setExchangeRate(rate);
        setLastUpdated(new Date());
      }
    } catch (error) {
      console.error('Failed to fetch exchange rate:', error);
      // Try to use cached data
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { rate } = JSON.parse(cached);
        setExchangeRate(rate);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loadCachedRate = () => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { rate, timestamp }: ExchangeRate = JSON.parse(cached);
      const isExpired = Date.now() - timestamp > CACHE_DURATION;
      
      if (!isExpired) {
        setExchangeRate(rate);
        setLastUpdated(new Date(timestamp));
        setIsLoading(false);
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    // Try to load cached data first
    const hasCachedData = loadCachedRate();
    
    if (!hasCachedData) {
      fetchExchangeRate();
    }

    // Set up interval for updates
    const interval = setInterval(fetchExchangeRate, CACHE_DURATION);
    
    return () => clearInterval(interval);
  }, []);

  if (isLoading && !exchangeRate) {
    return (
      <div className="glass-effect rounded-lg px-3 py-2 flex items-center space-x-2 border border-primary/20">
        <DollarSign className="w-4 h-4 text-primary animate-pulse" />
        <span className="text-sm font-medium text-foreground/80">Loading...</span>
      </div>
    );
  }

  return (
    <div 
      className="glass-effect rounded-lg px-3 py-2 flex items-center space-x-2 border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer group"
      title={`Last updated: ${lastUpdated?.toLocaleTimeString() || 'Unknown'}`}
    >
      <DollarSign className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
      <div className="flex items-center space-x-1">
        <span className="text-sm font-medium text-foreground">USD→EUR:</span>
        <span className="text-sm font-bold text-primary group-hover:text-accent transition-colors">
          {exchangeRate ? exchangeRate.toFixed(4) : 'N/A'}
        </span>
        {isLoading && <TrendingUp className="w-3 h-3 text-accent animate-pulse" />}
      </div>
    </div>
  );
};

export default ExchangeRateWidget;
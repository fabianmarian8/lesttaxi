import { useLocation } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
}

export const useBreadcrumb = (): BreadcrumbItem[] => {
  const location = useLocation();
  const pathname = location.pathname;

  // Mapping of routes to breadcrumb structures
  const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
    '/': [
      { label: 'Home', isCurrentPage: true }
    ],
    '/airport-transfer': [
      { label: 'Home', href: '/' },
      { label: 'Airport Transfers', isCurrentPage: true }
    ],
    '/taxi-vienna-airport': [
      { label: 'Home', href: '/' },
      { label: 'Airport Transfers', href: '/airport-transfer' },
      { label: 'Vienna Airport', isCurrentPage: true }
    ],
    '/taxi-budapest-airport': [
      { label: 'Home', href: '/' },
      { label: 'Airport Transfers', href: '/airport-transfer' },
      { label: 'Budapest Airport', isCurrentPage: true }
    ],
    '/airport-military': [
      { label: 'Home', href: '/' },
      { label: 'Airport Transfers', href: '/airport-transfer' },
      { label: 'Military Airport', isCurrentPage: true }
    ],
    '/taxi-bratislava': [
      { label: 'Home', href: '/' },
      { label: 'City Transport' },
      { label: 'Bratislava', isCurrentPage: true }
    ],
    '/taxi-stare-mesto': [
      { label: 'Home', href: '/' },
      { label: 'City Transport' },
      { label: 'Staré Mesto', isCurrentPage: true }
    ],
    '/banska-bystrica-military-taxi': [
      { label: 'Home', href: '/' },
      { label: 'City Transport' },
      { label: 'Banská Bystrica', isCurrentPage: true }
    ],
    '/budapest-military-transport': [
      { label: 'Home', href: '/' },
      { label: 'City Transport' },
      { label: 'Budapest', isCurrentPage: true }
    ],
    '/base-taxi': [
      { label: 'Home', href: '/' },
      { label: 'Military Services' },
      { label: 'Base Taxi', isCurrentPage: true }
    ],
    '/military-base-pickup': [
      { label: 'Home', href: '/' },
      { label: 'Military Services' },
      { label: 'Base Pickup', isCurrentPage: true }
    ],
    '/military-accommodation-transport': [
      { label: 'Home', href: '/' },
      { label: 'Military Services' },
      { label: 'Accommodation', isCurrentPage: true }
    ],
    '/military-shopping': [
      { label: 'Home', href: '/' },
      { label: 'Military Services' },
      { label: 'Shopping', isCurrentPage: true }
    ],
    '/kfc-delivery': [
      { label: 'Home', href: '/' },
      { label: 'Food Delivery' },
      { label: 'KFC', isCurrentPage: true }
    ],
    '/mcdonalds-delivery': [
      { label: 'Home', href: '/' },
      { label: 'Food Delivery' },
      { label: 'McDonalds', isCurrentPage: true }
    ],
    '/fleet': [
      { label: 'Home', href: '/' },
      { label: 'Information' },
      { label: 'Fleet', isCurrentPage: true }
    ],
    '/price-list': [
      { label: 'Home', href: '/' },
      { label: 'Information' },
      { label: 'Price List', isCurrentPage: true }
    ],
    '/faq': [
      { label: 'Home', href: '/' },
      { label: 'Information' },
      { label: 'FAQ', isCurrentPage: true }
    ],
    '/help': [
      { label: 'Home', href: '/' },
      { label: 'Support' },
      { label: 'Help', isCurrentPage: true }
    ],
    '/feedback': [
      { label: 'Home', href: '/' },
      { label: 'Support' },
      { label: 'Feedback', isCurrentPage: true }
    ],
    '/artemis': [
      { label: 'Home', href: '/' },
      { label: 'Special Services' },
      { label: 'Artemis', isCurrentPage: true }
    ]
  };

  return breadcrumbMap[pathname] || [
    { label: 'Home', href: '/' },
    { label: 'Page', isCurrentPage: true }
  ];
};
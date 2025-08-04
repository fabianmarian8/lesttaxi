import { Link } from 'react-router-dom';
import { useBreadcrumb, BreadcrumbItem } from '@/hooks/useBreadcrumb';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem as BreadcrumbUIItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbNavigationProps {
  className?: string;
}

export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ className }) => {
  const breadcrumbs = useBreadcrumb();

  // Don't show breadcrumbs on homepage
  if (breadcrumbs.length <= 1) {
    return null;
  }

  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && { "item": `${window.location.origin}${item.href}` })
    }))
  };

  return (
    <>
      {/* JSON-LD structured data for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Breadcrumb navigation */}
      <div className={`bg-muted/30 border-b ${className || ''}`}>
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((item: BreadcrumbItem, index: number) => (
                <div key={index} className="flex items-center">
                  {index > 0 && <BreadcrumbSeparator />}
                  <BreadcrumbUIItem>
                    {item.isCurrentPage ? (
                      <BreadcrumbPage className="text-foreground font-medium">
                        {item.label}
                      </BreadcrumbPage>
                    ) : item.href ? (
                      <BreadcrumbLink asChild>
                        <Link 
                          to={item.href} 
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.label}
                        </Link>
                      </BreadcrumbLink>
                    ) : (
                      <span className="text-muted-foreground">
                        {item.label}
                      </span>
                    )}
                  </BreadcrumbUIItem>
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </>
  );
};
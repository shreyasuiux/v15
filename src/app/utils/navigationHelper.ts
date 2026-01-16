/**
 * NAVIGATION HELPER UTILITY
 * PURPOSE: Centralized navigation system using React Router
 * ENSURES: Proper URL-based navigation for production deployment
 */

// Store React Router's navigate function
let navigateFunction: ((path: string) => void) | null = null;

/**
 * Initialize navigation with React Router's navigate function
 * MUST be called once during app initialization
 */
export function initializeNavigation(navigate: (path: string) => void): void {
  navigateFunction = navigate;
}

/**
 * Service titles mapping (for consistency)
 */
export const SERVICE_TITLES = {
  CLOUD_PRACTICE: 'Cloud Practice',
  DIGITAL_ENGINEERING: 'Digital & Product Engineering',
  BIG_DATA: 'Big Data',
  APP_MODERNIZATION: 'App Modernization',
  SECURITY: 'Security',
  DATABASE_MANAGEMENT: 'Database Management',
  ERP_TESTING: 'ERP & Testing',
} as const;

/**
 * Product titles mapping (for consistency)
 */
export const PRODUCT_TITLES = {
  AGENT_STUDIO: 'Agent Studio',
  ATLAS_API_MANAGER: 'Atlas API Manager',
  OTTOHM_VIDEO: 'Ottohm Video',
  ITSM_TICKETING: 'ITSM Ticketing',
  AI_OPS: 'AI Ops Platform',
  SMART_CONTRACTS: 'Smart Contracts',
} as const;

/**
 * AI Solution titles mapping
 */
export const AI_TITLES = {
  BFSI_AGENTS: 'BFSI Agents',
  BRAND_MANAGEMENT: 'Brand Management Agents',
} as const;

/**
 * Who We Are items mapping
 */
export const WHO_WE_ARE_ITEMS = {
  OUR_TEAM: 'Our Team',
  ABOUT_US: 'About Us',
  PARTNERS: 'Partners',
  CAREERS: 'Careers',
  NEWS: 'News & Updates',
} as const;

/**
 * Route mappings - converts titles to URL paths
 */
const SERVICE_ROUTES: Record<string, string> = {
  'Cloud Practice': '/services/cloud-practice',
  'Digital & Product Engineering': '/services/digital-engineering',
  'Big Data': '/services/big-data',
  'App Modernization': '/services/app-modernization',
  'Security': '/services/security',
  'Database Management': '/services/database-management',
  'ERP & Testing': '/services/erp-testing',
};

const PRODUCT_ROUTES: Record<string, string> = {
  'Agent Studio': '/products/agent-studio',
  'Atlas API Manager': '/products/atlas-api-manager',
  'Ottohm Video': '/products/ottohm-video',
  'ITSM Ticketing': '/products/itsm-ticketing',
  'AI Ops Platform': '/products/ai-ops',
  'Smart Contracts': '/products/smart-contracts',
};

const AI_ROUTES: Record<string, string> = {
  'BFSI Agents': '/ai/bfsi-agents',
  'Brand Management Agents': '/ai/brand-management',
};

const WHO_WE_ARE_ROUTES: Record<string, string> = {
  'Our Team': '/who-we-are/our-team',
  'About Us': '/who-we-are/about-us',
  'Partners': '/who-we-are/partners',
  'Careers': '/who-we-are/careers',
  'News & Updates': '/who-we-are/news-updates',
};

/**
 * Navigate to a URL path
 * This function can be called from anywhere in the app
 */
export function navigateTo(path: string): void {
  if (typeof window !== 'undefined') {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    // Use React Router navigation if available
    if (navigateFunction) {
      navigateFunction(path);
    } else {
      console.warn('Navigation function not initialized. Falling back to window.location');
      window.location.href = path;
    }
  }
}

/**
 * Navigate to service page
 */
export function navigateToService(serviceTitle: string): void {
  const route = SERVICE_ROUTES[serviceTitle];
  if (route) {
    navigateTo(route);
  } else {
    console.warn(`Unknown service: ${serviceTitle}`);
  }
}

/**
 * Navigate to product page
 */
export function navigateToProduct(productTitle: string): void {
  const route = PRODUCT_ROUTES[productTitle];
  if (route) {
    navigateTo(route);
  } else {
    console.warn(`Unknown product: ${productTitle}`);
  }
}

/**
 * Navigate to AI page
 */
export function navigateToAI(aiTitle?: string): void {
  if (aiTitle) {
    const route = AI_ROUTES[aiTitle];
    if (route) {
      navigateTo(route);
    } else {
      console.warn(`Unknown AI solution: ${aiTitle}`);
    }
  } else {
    navigateTo('/ai');
  }
}

/**
 * Navigate to Who We Are section
 */
export function navigateToWhoWeAre(item: string): void {
  const route = WHO_WE_ARE_ROUTES[item];
  if (route) {
    navigateTo(route);
  } else {
    console.warn(`Unknown Who We Are item: ${item}`);
  }
}

/**
 * Navigate to home page
 */
export function navigateToHome(): void {
  navigateTo('/');
}

/**
 * Navigate to case studies
 */
export function navigateToCaseStudies(): void {
  navigateTo('/case-studies');
}

/**
 * Get URL for a service (for Link components)
 */
export function getServiceUrl(serviceTitle: string): string {
  return SERVICE_ROUTES[serviceTitle] || '/';
}

/**
 * Get URL for a product (for Link components)
 */
export function getProductUrl(productTitle: string): string {
  return PRODUCT_ROUTES[productTitle] || '/';
}

/**
 * Get URL for an AI solution (for Link components)
 */
export function getAIUrl(aiTitle: string): string {
  return AI_ROUTES[aiTitle] || '/ai';
}

/**
 * Get URL for a Who We Are item (for Link components)
 */
export function getWhoWeAreUrl(item: string): string {
  return WHO_WE_ARE_ROUTES[item] || '/';
}
export interface ApiKey {
  id: string;
  name: string;
  clientId: string;
  keyPrefix: string;
  keySecret: string;
  createdAt: string;
  lastUsed?: string;
}


export interface NavItem {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: {
    name: string;
    path: string;
    pro?: boolean;
    new?: boolean;
    badge?: string;
  }[];
  pro?: boolean;
};



export interface SMSPlan {
  id: string;
  name: string;
  credits: number;
  price: number;
  discount?: number;
  popular?: boolean;
}

export interface Transaction {
  id: string;
  date: string;
  plan: string;
  credits: number;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  paymentMethod: string;
}
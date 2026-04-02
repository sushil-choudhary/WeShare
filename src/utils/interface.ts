export interface ExpenseGroupCardProps {
  title: string;
  members: number;
  balance: number;
  avatars: string[];
  onPress?: () => void;
}
export interface Transaction {
  id: number;
  name: string;
  time: string;
  amount: number;
  icon: any; // require or URL
}
export type ExpenseCategory = 'food' | 'travel' | 'hotel' | 'shopping' | 'other';

export interface Member {
  id: string;
  name: string;
  avatar: string;
}

export interface ExpenseItem {
  id: string;
  title: string;
  amount: number;
  paidBy: string;
  date: string;
  category: ExpenseCategory;
}

export interface SettlementItemType {
  id: string;
  from: string;
  to: string;
  amount: number;
}

export interface ContributionItemType {
  id: string;
  name: string;
  avatar: string;
  paid: number;
  share: number;
  balance: number;
}

export interface GroupSummary {
  totalExpense: number;
  yourPaid: number;
  yourShare: number;
  netBalance: number;
}

export interface GroupDetailsData {
  id: string;
  title: string;
  members: Member[];
  summary: GroupSummary;
  expenses: ExpenseItem[];
  settlements: SettlementItemType[];
  contributions: ContributionItemType[];
}

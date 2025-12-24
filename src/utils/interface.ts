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
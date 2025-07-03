import {
  LayoutGrid,
  MessageCircle,
  LockKeyhole,
  Mail,
  CreditCard,
  User,
  KeyRound,
  PieChart,
  Users,
  Hash,
} from "lucide-react";
import { JSX } from "react";

export const iconMap: Record<string, JSX.Element> = {
  GridIcon: <LayoutGrid size={18} />,
  MessageCircle: <MessageCircle size={18} />,
  LockKeyhole: <LockKeyhole size={18} />,
  MailIcon: <Mail size={18} />,
  CreditCard: <CreditCard size={18} />,
  User: <User size={18} />,
  KeyRound: <KeyRound size={18} />,
  PieChart: <PieChart size={18} />,
  Users: <Users size={18} />,
  Hash: <Hash size={18} />,
};

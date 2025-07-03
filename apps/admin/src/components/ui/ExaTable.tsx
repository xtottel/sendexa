import React, { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
  className?: string;
}

interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

interface TableBodyProps {
  children: ReactNode;
  className?: string;
}

interface TableRowProps {
  children: ReactNode;
  className?: string;
}

interface TableCellProps {
  children: ReactNode;
  isHeader?: boolean;
  className?: string;
  colSpan?: number;
}

const Table: React.FC<TableProps> = ({ children, className }) => {
  return (
    <table
      className={`min-w-full divide-y divide-gray-200 dark:divide-gray-700 ${className}`}
    >
      {children}
    </table>
  );
};

const TableHeader: React.FC<TableHeaderProps> = ({ children, className }) => {
  return (
    <thead className={`bg-gray-50 dark:bg-gray-800/50 ${className}`}>
      {children}
    </thead>
  );
};

const TableBody: React.FC<TableBodyProps> = ({ children, className }) => {
  return (
    <tbody
      className={`divide-y divide-gray-200 dark:divide-gray-700 ${className}`}
    >
      {children}
    </tbody>
  );
};

const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
  return (
    <tr className={`hover:bg-gray-50 dark:hover:bg-gray-800/50 ${className}`}>
      {children}
    </tr>
  );
};

const TableCell: React.FC<TableCellProps> = ({
  children,
  isHeader = false,
  className = "",
  colSpan,
}) => {
  const CellTag = isHeader ? "th" : "td";
  const baseStyles = "px-4 py-3 text-sm align-middle";
  const headerStyles = "font-medium text-gray-900 dark:text-white";
  const cellStyles = "text-gray-700 dark:text-gray-300";

  return (
    <CellTag
      colSpan={colSpan}
      className={`
        ${baseStyles}
        ${isHeader ? headerStyles : cellStyles}
        ${className}
      `}
    >
      {children}
    </CellTag>
  );
};

export { Table, TableHeader, TableBody, TableRow, TableCell };

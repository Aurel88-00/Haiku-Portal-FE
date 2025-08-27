export type TCard<T extends React.ElementType = 'div'> = {
  type?: T;
  children?: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;
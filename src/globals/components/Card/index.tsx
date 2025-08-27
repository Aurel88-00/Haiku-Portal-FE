import { TCard } from "@/lib/types/Card.type";

export const Card = <T extends React.ElementType = "div">({
  type,
  children,
  className,
  ...rest
}: TCard<T>) => {
  const CardContainer = type || "div";

  return (
    <CardContainer
      className={`${className} p-6 bg-gradient-to-br from-card via-card to-secondary/20 shadow-[var(--shadow-paper)] border-border/50 hover:shadow-[var(--shadow-soft)] transition-[var(--transition-zen)] hover:scale-[1.02]`}
      {...rest}
    >
      {children}
    </CardContainer>
  );
};

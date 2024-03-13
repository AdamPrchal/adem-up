import clsx from "clsx";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};
export const SectionHeading = ({
  children,
  className,
}: SectionHeadingProps) => {
  return (
    <h2 className={clsx("text-4xl font-bold mb-4 text-white", className)}>
      {children}
    </h2>
  );
};

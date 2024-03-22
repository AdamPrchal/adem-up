import clsx from "clsx";

type SectionDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};
export const SectionDescription = ({
  className,
  children,
}: SectionDescriptionProps) => {
  return (
    <p className={clsx("max-w-[65ch] mb-8 text-white", className)}>
      {children}
    </p>
  );
};

import clsx from "clsx";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};
export const SectionContainer = ({
  children,
  className,
}: SectionContainerProps) => {
  return (
    <section
      className={clsx("py-16 px-8 flex flex-col items-center", className)}
    >
      {children}
    </section>
  );
};

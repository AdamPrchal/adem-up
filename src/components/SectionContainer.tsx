import clsx from "clsx";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};
export const SectionContainer = ({
  id,
  children,
  className,
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={clsx("py-16 px-8 flex flex-col items-center", className)}
    >
      {children}
    </section>
  );
};

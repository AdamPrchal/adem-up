type SectionDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};
export const SectionDescription = ({ children }: SectionDescriptionProps) => {
  return <p className="max-w-[65ch] mb-8 text-white">{children}</p>;
};

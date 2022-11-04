import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  className?: string;
  dark?: boolean;
}>;

function Section({ children, id, className, dark }: SectionProps): JSX.Element {
  return (
    <section className={`py-10 md:py-16 ${className} ${dark && 'bg-gray-100'}`} id={id}>
      {children}
    </section>
  )
}

export default Section;

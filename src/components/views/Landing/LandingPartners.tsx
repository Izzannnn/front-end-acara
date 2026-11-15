import { cn } from "@/utils/cn";

import { PARTNERS } from "./Landing.constants";
import { Sparkle } from "./LandingUI";

const PartnerGroup = (props: { hidden?: boolean }) => {
  const { hidden } = props;

  return (
    <div
      aria-hidden={hidden ? "true" : undefined}
      className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
    >
      {PARTNERS.map((partner) => (
        <span
          key={partner.name}
          className={cn(
            "flex items-center gap-2 whitespace-nowrap text-lg text-ink/45 transition-colors duration-300 hover:text-ink sm:text-xl",
            partner.className,
          )}
        >
          {partner.name === "TGIF" && (
            <Sparkle className="h-3.5 w-3.5 text-brand" />
          )}
          {partner.name}
        </span>
      ))}
    </div>
  );
};

const LandingPartners = () => {
  return (
    <section
      aria-label="Penyelenggara event di TixLy"
      className="border-y border-[#EDE2D5] bg-[#FFF6EC]"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:flex-row sm:items-center sm:gap-8 sm:px-8 lg:px-10">
        <p className="flex shrink-0 items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8B7D70] sm:text-[10px]">
          <span aria-hidden="true" className="h-px w-6 bg-[#CBB9A6]" />
          Diselenggarakan oleh
        </p>

        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            <PartnerGroup />
            <PartnerGroup hidden />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPartners;

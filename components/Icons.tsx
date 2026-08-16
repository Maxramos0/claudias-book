import type { IconName } from "@/data/recipes";

const PATHS: Record<IconName, React.ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.4V12l3 1.8" />
    </>
  ),
  oven: (
    <>
      <rect x="3.6" y="3.8" width="16.8" height="16.4" rx="2.4" />
      <path d="M3.6 9.2h16.8M7 6.5h.01M10.2 6.5h.01" />
      <path d="M8 13.2h8" />
    </>
  ),
  plate: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <circle cx="12" cy="12" r="4.4" />
    </>
  ),
  pan: (
    <>
      <path d="M3.4 11.4h11.2a1 1 0 0 1 1 1v1.4a5.6 5.6 0 0 1-5.6 5.6H8a5.6 5.6 0 0 1-5.6-5.6v-1.4a1 1 0 0 1 1-1Z" />
      <path d="M15.6 13.2h3.2a1.8 1.8 0 0 0 1.8-1.8V6.6" />
    </>
  ),
  snow: (
    <>
      <path d="M12 3.4v17.2M4.6 7.7l14.8 8.6M19.4 7.7 4.6 16.3" />
      <path d="M12 6.6 9.8 4.8M12 6.6l2.2-1.8M12 17.4l-2.2 1.8M12 17.4l2.2 1.8" />
    </>
  ),
};

export function Icon({ name, size = 15 }: { name: IconName; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

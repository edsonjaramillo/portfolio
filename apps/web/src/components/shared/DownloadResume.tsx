import { buttonVariants } from 'ui/src/Button';

export default function DownloadResume() {
  const btnVariant = buttonVariants({ variant: 'primary', size: 'medium' });
  return (
    <a className={btnVariant} href="/resume.pdf" download>
      <span className="sr-only">Download Resume</span>
      <DownloadIcon />
      <span aria-hidden="true">Resume</span>
    </a>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-4 w-4">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}

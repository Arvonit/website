interface Props {
  color: string;
}

export default function ExternalLink() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-sky-600 dark:stroke-sky-400 fill-none size-5 rounded-lg stroke-2"
      viewBox="0 0 26 26"
      // stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
      <path d="M11 13l9 -9" />
      <path d="M15 4h5v5" />
    </svg>
  );
}

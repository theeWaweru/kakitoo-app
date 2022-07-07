import Link from "next/link";

const Bolt = () => {
  return (
    <div>
      <Link href="/">
        <a>
          <div className="kakitoo-bolt w-embed">
            <svg
              width={205}
              height={249}
              viewBox="0 0 205 249"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M68.8315 148.219H1.73334L29.4126 100.348L28.5469 99.8479L29.4126 100.348L86.8556 1H189.789L132.854 98.3717L131.974 99.8765H133.717H202.305L33.299 245.353L75.5732 149.623L76.1932 148.219H74.6584H68.8315Z"
                fill="black"
                fillOpacity="0.01"
                stroke="#F7931E"
                strokeWidth="2"
              />
            </svg>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Bolt;

/**
 * Inline SVG placeholders for "다정한 서재의 편지" — swap for real photos once available
 * (see README.md). Keeps the warm cream / navy / orange palette from ideas.md.
 */

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="열린 책 모양의 시니어 영어 방문학습 로고">
      <rect width="48" height="48" rx="12" fill="#172b43" />
      <path d="M24 10 L10 36 L16.5 36 L24 22 L31.5 36 L38 36 Z" fill="#fcf8ef" />
      <rect x="18" y="28" width="12" height="4" rx="2" fill="#e16f3d" />
    </svg>
  );
}

export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 400" className={className} role="img" aria-label="집 거실 탁자에서 선생님과 학습자가 마주 앉아 학습지를 펼쳐 놓은 모습 일러스트">
      <rect width="480" height="400" fill="#eaf0e7" />
      <rect x="0" y="300" width="480" height="100" fill="#dfe8dc" />
      <rect x="60" y="150" width="360" height="150" rx="14" fill="#fcf8ef" stroke="#d9cdb8" strokeWidth="2" />
      <rect x="150" y="180" width="180" height="90" rx="8" fill="#fffdf8" stroke="#e5ddd0" strokeWidth="2" />
      <rect x="164" y="196" width="120" height="8" rx="4" fill="#d8cfbd" />
      <rect x="164" y="214" width="152" height="24" rx="6" fill="#eaf0e7" />
      <text x="172" y="230" fontFamily="Georgia, serif" fontSize="13" fontStyle="italic" fill="#172b43">I eat an apple.</text>
      <rect x="164" y="246" width="90" height="8" rx="4" fill="#e5ded0" />
      <circle cx="300" cy="222" r="8" fill="#e16f3d" />
      <circle cx="150" cy="90" r="34" fill="#172b43" />
      <path d="M104 190 q46 -60 92 0 z" fill="#172b43" />
      <circle cx="330" cy="96" r="30" fill="#e16f3d" opacity="0.85" />
      <path d="M288 190 q42 -56 84 0 z" fill="#e16f3d" opacity="0.85" />
      <rect x="120" y="330" width="240" height="10" rx="5" fill="#c9d4c5" />
    </svg>
  );
}

export function WorksheetIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 240" className={className} role="img" aria-label="방문 학습지로 문장을 만드는 모습 일러스트">
      <rect width="400" height="240" fill="#eef2ea" />
      <rect x="118" y="24" width="164" height="196" rx="10" fill="#fffdf8" stroke="#dcd3c2" strokeWidth="2" />
      <rect x="140" y="50" width="120" height="10" rx="5" fill="#d8cfbd" />
      <rect x="140" y="72" width="90" height="10" rx="5" fill="#e5ded0" />
      <rect x="140" y="102" width="120" height="30" rx="8" fill="#eaf0e7" />
      <text x="150" y="122" fontFamily="Georgia, serif" fontSize="14" fontStyle="italic" fill="#172b43">I eat an apple.</text>
      <rect x="140" y="146" width="120" height="10" rx="5" fill="#e5ded0" />
      <rect x="140" y="166" width="70" height="10" rx="5" fill="#e5ded0" />
      <rect x="140" y="186" width="95" height="10" rx="5" fill="#e5ded0" />
      <circle cx="248" cy="111" r="9" fill="#e16f3d" />
      <path d="M244 111l3 3 6-7" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="translate(72,150) rotate(-18)">
        <rect width="14" height="90" rx="6" fill="#e16f3d" />
        <polygon points="0,90 14,90 7,108" fill="#a34a25" />
      </g>
    </svg>
  );
}

export function WordCardsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 240" className={className} role="img" aria-label="영어단어카드로 반복 학습하는 모습 일러스트">
      <rect width="400" height="240" fill="#f4ede1" />
      <g transform="translate(140,150) rotate(-10)">
        <rect x="0" y="0" width="120" height="76" rx="12" fill="#fff" stroke="#e5ddd0" strokeWidth="2" />
        <text x="60" y="34" fontFamily="Georgia, serif" fontSize="20" fontWeight="700" fill="#172b43" textAnchor="middle">apple</text>
        <text x="60" y="58" fontFamily="Noto Sans KR, Arial" fontSize="13" fill="#66757d" textAnchor="middle">사과</text>
      </g>
      <g transform="translate(215,120) rotate(6)">
        <rect x="0" y="0" width="120" height="76" rx="12" fill="#fff" stroke="#e5ddd0" strokeWidth="2" />
        <text x="60" y="34" fontFamily="Georgia, serif" fontSize="20" fontWeight="700" fill="#172b43" textAnchor="middle">eat</text>
        <text x="60" y="58" fontFamily="Noto Sans KR, Arial" fontSize="13" fill="#66757d" textAnchor="middle">먹다</text>
      </g>
      <g transform="translate(160,50) rotate(-4)">
        <rect x="0" y="0" width="128" height="40" rx="20" fill="#172b43" />
        <text x="64" y="26" fontFamily="Georgia, serif" fontSize="16" fontWeight="700" fill="#fff" textAnchor="middle">I eat an apple.</text>
      </g>
    </svg>
  );
}

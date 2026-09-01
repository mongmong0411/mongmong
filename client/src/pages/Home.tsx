/**
 * 다정한 서재의 편지: 따뜻한 종이 질감, 편집물 같은 비대칭 흐름, 큰 글자와 명확한 상담 동선을 사용하는 시니어 영어 소개 페이지입니다.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  CircleAlert,
  Clock3,
  FileText,
  Home as HomeIcon,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HeroIllustration,
  LogoMark,
  WordCardsIllustration,
  WorksheetIllustration,
} from "@/components/BrandArt";

const faqItems = [
  ["나이가 많아도 영어를 새로 배울 수 있나요?", "네, 나이 제한 없이 시작하실 수 있습니다. 개인의 학습 속도에 맞춰 진도를 조절합니다."],
  ["영어 단어를 쉽게 외우는 방법도 알려주시나요?", "단어카드로 반복해서 단어를 익히고, 학습지로 그 단어를 실제 문장으로 만들어보는 방식으로 진행합니다."],
  ["학습지로 배우나요, 선생님과 직접 만나서 수업하나요?", "선생님이 직접 자택으로 방문해 학습지와 단어카드를 활용한 대면 방식으로 진행합니다."],
  ["나이 들어서 영어 공부를 하면 두뇌 건강에도 도움이 될까요?", "새로운 언어를 배우는 활동이 두뇌 자극에 도움이 된다는 일반적인 인식은 있습니다. 다만 특정 질환의 예방이나 치료 효과를 보장하는 것은 아니며, 건강 관련 궁금증은 전문가와 상담하시길 권해드립니다."],
  ["영어를 한 번도 배워본 적 없는 왕초보인데 괜찮을까요?", "네, 알파벳과 기초 발음(파닉스)부터 시작하는 맞춤 커리큘럼으로 진행되며, 학습자의 속도에 맞춰 진도를 조절합니다."],
  ["예전에 혼자 공부하다 포기했는데, 다시 시작해도 될까요?", "네, 혼자 학습할 때 어려웠던 꾸준함의 문제를 정기적인 방문 학습으로 함께 보완해 드립니다."],
  ["저희 동네(지역)에서도 방문 수업이 가능한가요?", "방문 가능 지역은 상담을 통해 확인해 드립니다. 전화 또는 방문 상담으로 문의해 주세요."],
  ["일상 대화에서 바로 쓸 수 있는 생활영어를 배울 수 있나요?", "네, 일상 상황에서 실제로 쓸 수 있는 문장을 만들어보는 방식으로 학습지를 구성합니다."],
  ["복습할 수 있는 문제집이나 교재도 제공되나요?", "방문 학습지와 단어카드가 복습 교재 역할을 겸합니다. 세부 구성은 상담 시 안내해 드립니다."],
  ["한 달 수강료(학습지 비용)는 얼마인가요?", "정확한 비용은 상담을 통해 안내해 드립니다."],
];

function scrollToConsultation() {
  document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [method, setMethod] = useState<"phone" | "visit">("phone");

  const chooseConsultation = (nextMethod: "phone" | "visit") => {
    setMethod(nextMethod);
    scrollToConsultation();
  };

  const showSetupNotice = () => {
    toast("상담 연락처가 등록되면 이 선택에 맞춰 바로 연결됩니다.", {
      description: "현재는 홈페이지 시안의 상담 흐름을 확인하실 수 있습니다.",
    });
  };

  return (
    <div className="site-shell min-h-screen">
      <header className="sticky top-0 z-50 border-b border-[#e7dfd0]/90 bg-[#fcf8ef]/92 backdrop-blur-xl">
        <div className="site-width flex h-[76px] items-center justify-between gap-5">
          <a href="#top" aria-label="시니어 영어 방문학습 첫 화면" className="group flex items-center gap-3">
            <LogoMark className="size-12 transition-transform duration-200 group-hover:-rotate-3" />
            <span className="relative font-serif text-[16px] font-semibold leading-[1.22] tracking-[-0.07em] text-[#172b43] sm:text-[18px]">시니어 영어<br />방문학습<span className="absolute bottom-[-5px] left-0 h-[2px] w-8 rotate-[-1deg] bg-[#e16f3d]" /></span>
          </a>

          <nav aria-label="주요 메뉴" className="hidden items-center gap-6 text-sm font-bold text-[#536070] lg:flex">
            <a href="#about" className="transition-colors hover:text-[#e16f3d]">브랜드 소개</a>
            <a href="#program" className="transition-colors hover:text-[#e16f3d]">학습 방식</a>
            <a href="#guide" className="transition-colors hover:text-[#e16f3d]">이용 안내</a>
            <a href="#faq" className="transition-colors hover:text-[#e16f3d]">자주 묻는 질문</a>
          </nav>

          <button onClick={() => chooseConsultation("phone")} className="hidden items-center gap-2 rounded-full bg-[#172b43] px-5 py-3 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#27435d] active:scale-[0.97] sm:flex">
            <Phone className="size-4" /> 상담 신청
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="메뉴 열기" className="grid size-11 place-items-center rounded-full border border-[#ded4c3] text-[#172b43] lg:hidden">
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#e7dfd0] bg-[#fcf8ef] px-4 py-4 lg:hidden">
            <nav className="site-width flex flex-col text-base font-bold text-[#35485d]" aria-label="모바일 메뉴">
              {[['브랜드 소개', '#about'], ['학습 방식', '#program'], ['이용 안내', '#guide'], ['자주 묻는 질문', '#faq']].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-[#e7dfd0] py-3.5 hover:text-[#e16f3d]">{label}</a>
              ))}
              <button onClick={() => { setMenuOpen(false); chooseConsultation("phone"); }} className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#172b43] px-5 py-3.5 text-sm font-bold text-white">
                <Phone className="size-4" /> 상담 신청
              </button>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative border-b border-[#e7dfd0] bg-[#fcf8ef] pb-14 pt-10 sm:pb-18 sm:pt-16 lg:pb-20 lg:pt-18">
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[28%] bg-[#eaf0e7] dot-grid opacity-70 lg:block" />
          <div className="site-width relative grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12">
            <div className="max-w-[620px] py-2 lg:py-10">
              <div className="enter-rise section-tab mb-7"><span>01</span><span>LEARN AT HOME</span></div>
              <h1 className="enter-rise-delay serif-title text-[clamp(2.6rem,5.4vw,5rem)] font-semibold leading-[1.27] text-[#172b43]">
                단어에서 문장으로,<br />
                <span className="orange-underline">시니어 맞춤</span><br />
                방문 영어 학습
              </h1>
              <p className="enter-rise-delay-2 mt-7 max-w-[560px] text-[1.05rem] leading-8 text-[#516073] sm:text-[1.15rem]">
                이동 없이 집에서 받는 나만의 맞춤 영어 수업. 단어 암기를 넘어 문장을 만드는 힘을 함께 길러갑니다.
              </p>
              <div className="enter-rise-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => chooseConsultation("phone")} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#e16f3d] px-7 text-base font-extrabold text-white shadow-[0_8px_0_#be542d] transition duration-200 hover:-translate-y-0.5 hover:bg-[#cb5f31] active:translate-y-1 active:scale-[0.98] active:shadow-none">
                  <Phone className="size-5" /> 전화 상담 신청 <ArrowRight className="size-4" />
                </button>
                <button onClick={() => chooseConsultation("visit")} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#cfc3af] bg-white/65 px-7 text-base font-extrabold text-[#172b43] transition duration-200 hover:-translate-y-0.5 hover:border-[#172b43] hover:bg-white active:scale-[0.98]">
                  <HomeIcon className="size-5" /> 방문 상담 신청
                </button>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#ded5c7] pt-5 text-sm font-bold text-[#566477]">
                <span className="inline-flex items-center gap-2"><Check className="size-4 text-[#e16f3d]" /> 1:1 맞춤 방문 수업</span>
                <span className="inline-flex items-center gap-2"><Check className="size-4 text-[#e16f3d]" /> 개인 속도에 맞춘 진행</span>
              </div>
            </div>

            <div className="enter-rise-delay relative min-h-[400px] sm:min-h-[500px]">
              <div className="absolute inset-y-2 left-4 right-0 rotate-[1.4deg] rounded-[2.4rem] border border-[#d9cdb8] bg-white/60" />
              <figure className="paper-shadow absolute inset-0 overflow-hidden rounded-[2.2rem] border-[10px] border-white bg-[#e7dfd0]">
                <HeroIllustration className="size-full object-cover" />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#172b43]/80 via-[#172b43]/20 to-transparent px-6 pb-5 pt-14 text-sm font-bold text-white">오늘 배운 단어를, 오늘의 문장으로.</figcaption>
              </figure>
              <div className="paper-shadow absolute -bottom-5 -left-3 max-w-48 -rotate-6 rounded-lg border border-[#dbd1c0] bg-[#fffdf8] px-4 py-4 sm:left-[-1.3rem] sm:px-5">
                <p className="font-serif text-xl italic text-[#e16f3d]">new word</p>
                <div className="mt-1 flex items-center gap-2 text-sm font-bold text-[#172b43]"><span className="h-px w-6 bg-[#172b43]" /> one sentence</div>
              </div>
              <div className="absolute -right-2 top-8 rotate-3 rounded-xl border border-[#b8cbb8] bg-[#eaf0e7] px-4 py-3 text-xs font-extrabold tracking-[.1em] text-[#365b40] shadow-sm sm:-right-5">AT YOUR HOME</div>
            </div>
          </div>
        </section>

        <section id="about" className="section-space bg-white">
          <div className="site-width grid gap-12 lg:grid-cols-[0.66fr_1.34fr] lg:gap-20">
            <aside className="lg:pt-3"><div className="section-tab"><span>02</span><span>WHY US</span></div></aside>
            <div>
              <h2 className="serif-title max-w-3xl text-[clamp(2rem,3.8vw,3.35rem)] font-semibold leading-[1.4] text-[#172b43]">왜 시니어 영어<br /><span className="orange-underline">방문학습</span>인가요?</h2>
              <div className="mt-9 grid gap-8 border-t border-[#ded5c7] pt-8 md:grid-cols-2">
                <p className="text-[1.05rem] leading-8 text-[#526174]">단어와 문법은 열심히 외우지만 정작 문장을 만들지 못하는 현실, 배우고 싶은 의지는 넘치지만 이동이 불편해 학원 방문 자체가 부담스러운 액티브 시니어. 이 두 가지 고민에서 시작되었습니다.</p>
                <div className="rounded-2xl bg-[#f5f0e5] p-6">
                  <p className="kicker">TEACHER&apos;S NOTE</p>
                  <p className="mt-3 font-serif text-[1.14rem] font-semibold leading-8 text-[#172b43]">“오랫동안 영어 교육 현장에서 만난 배움의 의지를, 집에서도 이어갈 수 있도록 돕고 싶었습니다.”</p>
                </div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[['20+', '년 이상 영어 교육 현장'], ['10', '년간 유치원부터 고등학교 수업'], ['1:1', '학습자 속도에 맞춘 방문 수업']].map(([number, label]) => (
                  <div key={label} className="border-l-2 border-[#e16f3d] px-4 py-1">
                    <strong className="font-serif text-3xl text-[#172b43]">{number}</strong>
                    <p className="mt-1 text-sm font-bold leading-6 text-[#667080]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="program" className="section-space relative bg-[#eaf0e7]">
          <div className="site-width">
            <div className="grid gap-8 border-b border-[#c9d4c5] pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div><div className="section-tab"><span>03</span><span>OUR METHOD</span></div></div>
              <div><h2 className="serif-title text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-[1.42] text-[#172b43]">맞춤 방문 학습지와<br /><span className="orange-underline">영어단어카드</span></h2><p className="mt-5 max-w-2xl text-[1.05rem] leading-8 text-[#526174]">정해진 시간에 선생님이 집으로 방문해, 그날 배운 단어를 학습지 안에서 직접 문장으로 만들어보고 단어카드로 새로 익힌 단어를 반복해서 다집니다.</p></div>
            </div>
            <div className="mt-10 grid gap-7 lg:grid-cols-[1.08fr_.92fr]">
              <article className="group relative overflow-hidden rounded-[1.75rem] bg-[#172b43] p-3 text-white shadow-[0_20px_40px_rgba(23,43,67,.14)]">
                <div className="relative h-[360px] overflow-hidden rounded-[1.15rem] sm:h-[420px]"><WorksheetIllustration className="size-full object-cover transition duration-500 group-hover:scale-[1.025]" /><div className="absolute inset-0 bg-gradient-to-t from-[#172b43]/75 via-transparent to-transparent" /></div>
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-4"><div><span className="text-xs font-extrabold tracking-[.15em] text-[#f0b89d]">01. WORKSHEET</span><h3 className="mt-2 font-serif text-2xl font-semibold">배운 단어를<br />내 문장으로 써봅니다</h3></div><FileText className="mb-1 size-8 text-[#f6d1bc]" /></div>
              </article>
              <article className="group relative overflow-hidden rounded-[1.75rem] bg-white p-3 shadow-[0_20px_40px_rgba(23,43,67,.1)]">
                <div className="relative h-[360px] overflow-hidden rounded-[1.15rem] sm:h-[420px]"><WordCardsIllustration className="size-full object-cover transition duration-500 group-hover:scale-[1.025]" /></div>
                <div className="px-4 pb-5 pt-5"><span className="text-xs font-extrabold tracking-[.15em] text-[#c85a2e]">02. WORD CARDS</span><h3 className="mt-2 font-serif text-2xl font-semibold leading-9 text-[#172b43]">반복할수록<br />친숙해지는 단어</h3><p className="mt-2 text-sm leading-6 text-[#657284]">새로 익힌 단어를 카드로 다시 만나며, 기억을 천천히 단단하게 만듭니다.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-space bg-[#fcf8ef]">
          <div className="site-width grid gap-12 lg:grid-cols-[.66fr_1.34fr] lg:gap-20">
            <aside><div className="section-tab"><span>04</span><span>WHO IT&apos;S FOR</span></div><h2 className="serif-title mt-6 text-[clamp(2rem,3.5vw,3.1rem)] font-semibold leading-[1.4] text-[#172b43]">이런 분께<br />추천합니다</h2></aside>
            <div className="grid gap-4 sm:grid-cols-2">
              {['학원까지 이동이 부담스러운 액티브 시니어', '영어를 처음 시작하거나, 다시 시작하고 싶은 분', '단어는 알지만 문장으로 표현하는 게 어려운 분', '정기적인 방문으로 꾸준한 학습 습관을 만들고 싶은 분'].map((item, i) => <div key={item} className={`paper-shadow relative flex min-h-44 flex-col justify-between overflow-hidden border border-[#e7dfd0] bg-[#fffef9] p-6 ${i % 2 ? 'sm:translate-y-5' : ''}`}><span className="absolute right-5 top-0 border-x border-b border-[#e2d6c5] bg-[#f6f0e5] px-3 py-1 text-[10px] font-extrabold tracking-[.14em] text-[#846f5f]">FOR YOU</span><span className="font-serif text-2xl text-[#e16f3d]">0{i + 1}</span><div><div className="mb-3 h-px w-full bg-[#eadfce]" /><p className="text-[1.02rem] font-bold leading-7 text-[#25384d]">{item}</p></div></div>)}
            </div>
          </div>
          <div className="site-width mt-10 rounded-[1.5rem] border border-[#ebc7b7] bg-[#fff5ed] p-6 sm:p-8">
            <div className="flex gap-4"><CircleAlert className="mt-1 size-6 shrink-0 text-[#d06031]" /><div><p className="font-serif text-xl font-semibold text-[#172b43]">이런 경우는 별도 안내가 필요합니다</p><p className="mt-2 text-sm leading-7 text-[#667080]">온라인(비대면) 화상 수업만 원하시는 경우, 원어민 강사 수업을 원하시는 경우, 여러 명이 함께하는 그룹 스터디를 원하시는 경우에는 현재 확인된 서비스 범위와 달라 별도 안내가 필요합니다. 방문 가능 여부는 지역에 따라 상담 시 달라질 수 있습니다.</p></div></div>
          </div>
        </section>

        <section className="section-space bg-[#172b43] text-[#fffdf8]">
          <div className="site-width grid gap-12 lg:grid-cols-[.66fr_1.34fr] lg:gap-20">
            <aside><div className="section-tab border-[#f09b78] text-[#f4c5ae]"><span>05</span><span>WHY NOW</span></div><h2 className="serif-title mt-6 text-[clamp(2rem,3.5vw,3.1rem)] font-semibold leading-[1.4]">데이터로 보는<br />시니어 영어 학습</h2></aside>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-white/15 bg-white/[.06] p-7 backdrop-blur-sm"><p className="font-serif text-6xl font-semibold text-[#f2a17e]">56.6<span className="text-3xl">%</span></p><p className="mt-4 text-[1.05rem] font-bold leading-7">65세 이상 고령자가 외출 시 불편을 경험한다고 답했습니다.</p><p className="mt-5 text-sm leading-6 text-[#c9d6df]">학습 의지는 있어도, 이동 자체가 학습 시작의 장벽이 될 수 있습니다.</p><a href="https://repository.kihasa.re.kr/handle/201002/46064" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-[#f2b89d] underline underline-offset-4">한국보건사회연구원 「2023년도 노인실태조사」 <ChevronRight className="size-3" /></a></article>
              <article className="rounded-2xl border border-white/15 bg-white/[.06] p-7 backdrop-blur-sm"><p className="font-serif text-6xl font-semibold text-[#f2a17e]">33.7<span className="text-3xl">%</span></p><p className="mt-4 text-[1.05rem] font-bold leading-7">성인 평생학습 참여율로 집계되었습니다.</p><p className="mt-5 text-sm leading-6 text-[#c9d6df]">배움을 일상 가까이에서 이어갈 수 있도록, 집으로 찾아가는 수업을 준비했습니다.</p><a href="https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=4503" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-[#f2b89d] underline underline-offset-4">교육부·한국교육개발원 「2025년 평생학습개인실태조사」 <ChevronRight className="size-3" /></a></article>
              <p className="md:col-span-2 text-xs leading-6 text-[#b4c4ce]">통계 수치는 기획안에 제시된 조사 결과를 반영했습니다. 2023년 노인실태조사는 보건복지부·한국보건사회연구원이 발간한 3년 주기 법정조사이며, 평생학습 참여율은 만 25–79세 대상 통계입니다.</p>
            </div>
          </div>
        </section>

        <section id="guide" className="section-space bg-white">
          <div className="site-width">
            <div className="flex flex-col gap-5 border-b border-[#ded5c7] pb-8 sm:flex-row sm:items-end sm:justify-between"><div><div className="section-tab"><span>06</span><span>HOW IT WORKS</span></div><h2 className="serif-title mt-5 text-[clamp(2rem,3.5vw,3.15rem)] font-semibold leading-[1.4] text-[#172b43]">시작은 천천히,<br />함께 이어갑니다</h2></div><p className="max-w-md text-[1rem] leading-7 text-[#617083]">복잡한 절차 대신, 나에게 맞는 학습의 첫 문을 여는 세 단계입니다.</p></div>
            <div className="paper-shadow mt-8 grid overflow-hidden border border-[#e3d9cb] bg-[#fffef9] md:grid-cols-3">
              {[
                [Phone, '01', '상담 신청', '전화 또는 방문 상담 중 편한 방법을 선택해 주세요.'],
                [MessageCircle, '02', '무료 상담', '목표와 현재 수준을 파악한 후, 맞춤 커리큘럼을 제안합니다.'],
                [CalendarDays, '03', '방문 학습 시작', '맞춤 학습지와 단어카드로 정기 방문 수업을 시작합니다.'],
              ].map(([Icon, num, title, copy], i) => { const StepIcon = Icon as typeof Phone; return <article key={title as string} className="relative min-h-72 border-b border-[#ded5c7] p-7 md:border-b-0 md:p-9 md:[&:not(:last-child)]:border-r"><span className="inline-flex border-l-2 border-[#e16f3d] pl-2 text-[10px] font-extrabold tracking-[.16em] text-[#806b58]">STEP {num as string}</span><div className="mt-7 flex items-center justify-between"><div className="grid size-12 place-items-center rounded-full border border-[#b7cdb9] bg-[#edf3ea] text-[#28533c]"><StepIcon className="size-5" /></div><span className="font-serif text-4xl text-[#eadfce]">{num as string}</span></div><div className="mt-7 border-t border-[#e3d9cb] pt-5"><h3 className="font-serif text-2xl font-semibold text-[#172b43]">{title as string}</h3><p className="mt-2 leading-7 text-[#617083]">{copy as string}</p></div>{i < 2 && <ArrowDownRight className="absolute -right-3 top-1/2 z-10 hidden size-6 -translate-y-1/2 rounded-full bg-[#e16f3d] p-1 text-white md:block" />}</article>; })}
            </div>
          </div>
        </section>

        <section id="faq" className="section-space bg-[#f2ede2]">
          <div className="site-width grid gap-10 lg:grid-cols-[.62fr_1.38fr] lg:gap-20">
            <aside><div className="section-tab"><span>07</span><span>FAQ</span></div><h2 className="serif-title mt-6 text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.42] text-[#172b43]">자주 묻는<br />질문입니다</h2><p className="mt-5 text-[1rem] leading-7 text-[#627083]">시작 전 궁금한 내용을 모았습니다. 더 자세한 내용은 상담에서 편하게 물어보세요.</p></aside>
            <Accordion type="single" collapsible className="border-t border-[#bfb3a0]">
              {faqItems.map(([question, answer], i) => <AccordionItem value={`faq-${i}`} key={question} className="border-[#d8cfbf]"><AccordionTrigger className="py-6 text-left text-[1.02rem] font-bold leading-7 text-[#1d3349] hover:no-underline sm:text-[1.08rem]"><span className="flex gap-3"><span className="font-serif text-[#e16f3d]">Q.</span>{question}</span></AccordionTrigger><AccordionContent className="max-w-3xl pb-6 pl-7 text-[1rem] leading-7 text-[#607083]">{answer}</AccordionContent></AccordionItem>)}
            </Accordion>
          </div>
        </section>

        <section id="consultation" className="relative overflow-hidden bg-[#f2ede2] py-12 sm:py-16">
          <div className="site-width relative overflow-hidden bg-[#172b43] px-6 py-12 text-white shadow-[0_24px_55px_rgba(23,43,67,.2)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute -right-28 -top-36 size-[440px] rounded-full border-[52px] border-[#eaf0e7]/10" />
            <div className="pointer-events-none absolute bottom-0 left-[43%] h-24 w-64 -rotate-6 bg-[#e16f3d]/15" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_.75fr]">
              <div><div className="inline-flex items-center gap-2 border-b border-[#f2b697] pb-2 text-xs font-extrabold tracking-[.14em] text-[#f2c3a8]"><BookOpen className="size-4" /> LET&apos;S MAKE A SENTENCE</div><h2 className="serif-title mt-7 text-[clamp(2.25rem,4vw,3.6rem)] font-semibold leading-[1.38]">지금, 영어의 다음 문장을<br />시작해보세요.</h2><p className="mt-5 max-w-xl text-[1.04rem] leading-8 text-[#d6e0e4]">전화 상담과 방문 상담 모두 가능합니다. 나에게 맞는 시작을 함께 찾아보세요.</p><p className="mt-8 border-l-2 border-[#e16f3d] pl-4 text-sm font-bold leading-7 text-[#f0c5b0]">우리 동네 방문 가능 여부부터<br className="sm:hidden" /> 편하게 물어보세요.</p></div>
              <div className="paper-shadow relative border border-[#e5d9c9] bg-[#fffdf8] p-5 text-[#172b43] sm:p-7"><span className="absolute right-6 top-0 border-x border-b border-[#e6d9c7] bg-[#f6f0e5] px-3 py-1 text-[10px] font-extrabold tracking-[.14em] text-[#806b58]">REPLY CARD</span><p className="kicker">CONSULTATION</p><p className="mt-2 font-serif text-xl font-semibold">어떤 상담을 원하시나요?</p><div className="mt-5 grid gap-3"><button onClick={() => setMethod("phone")} className={`flex items-center justify-between border p-4 text-left transition ${method === "phone" ? "border-[#e16f3d] bg-[#fff1e9]" : "border-[#e4dbce] bg-white hover:border-[#d9a48d]"}`}><span className="flex items-center gap-3 font-bold"><Phone className="size-5 text-[#e16f3d]" /> 전화 상담</span>{method === "phone" && <Check className="size-5 text-[#e16f3d]" />}</button><button onClick={() => setMethod("visit")} className={`flex items-center justify-between border p-4 text-left transition ${method === "visit" ? "border-[#e16f3d] bg-[#fff1e9]" : "border-[#e4dbce] bg-white hover:border-[#d9a48d]"}`}><span className="flex items-center gap-3 font-bold"><HomeIcon className="size-5 text-[#e16f3d]" /> 방문 상담</span>{method === "visit" && <Check className="size-5 text-[#e16f3d]" />}</button></div><button onClick={showSetupNotice} className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#e16f3d] px-5 py-4 text-sm font-extrabold text-white transition hover:bg-[#cb5f31] active:scale-[.98]">{method === "phone" ? <Phone className="size-4" /> : <HomeIcon className="size-4" />}{method === "phone" ? "전화 상담으로 신청하기" : "방문 상담으로 신청하기"}</button><p className="mt-4 flex gap-2 text-xs leading-5 text-[#6a7786]"><Clock3 className="mt-0.5 size-3.5 shrink-0" /> 실제 상담 연결을 위해 대표 전화번호 또는 접수 채널을 등록해 주세요.</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#102238] py-8 text-[#d7e1e5]"><div className="site-width flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div className="flex items-center gap-3"><LogoMark className="size-12" /><div><p className="relative inline-block font-serif text-lg font-semibold leading-none tracking-[-.06em] text-white">시니어 영어 방문학습<span className="absolute -bottom-2 left-0 h-[2px] w-8 bg-[#e16f3d]" /></p><p className="mt-3 text-xs text-[#aebec8]">단어에서 문장으로, 집에서 시작하는 영어</p></div></div><p className="text-xs text-[#9aadb9]">© {new Date().getFullYear()} 시니어 영어 방문학습. All rights reserved.</p></div></footer>

      <button onClick={() => chooseConsultation("phone")} aria-label="전화 상담 신청 영역으로 이동" className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#172b43] px-5 py-3 text-sm font-extrabold text-white shadow-[0_10px_22px_rgba(23,43,67,.28)] transition hover:-translate-y-0.5 active:scale-[.97] sm:hidden"><Phone className="size-4" /> 상담 신청</button>
    </div>
  );
}

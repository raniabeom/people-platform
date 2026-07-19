(() => {
    const STORAGE_KEY = "xineon-lang";
    const DEFAULT_LANG = "en";
    const SUPPORTED = ["en", "ko"];

    const messages = {
        en: {
            "nav.home": "Home",
            "nav.product": "Product",
            "nav.hris": "HRIS",
            "nav.ats": "ATS",
            "nav.performance": "Performance Management",
            "nav.pricing": "Pricing",
            "nav.philosophy": "Philosophy",
            "nav.about": "About",
            "nav.contact": "Contact",
            "nav.bookDemo": "Book Demo",

            "footer.label": "Contact",
            "footer.cta": "Ready to bring clarity to your organization?",
            "footer.rights": "All rights reserved.",
            "footer.privacy": "Privacy",
            "footer.terms": "Terms",
            "footer.company": "Xineon · Seoul, Republic of Korea",

            "lang.aria": "Language",
            "lang.en": "EN",
            "lang.ko": "KO",

            "home.meta":
                "Xineon builds modern enterprise software for organizations that value clarity over complexity—grounded in understanding before assumptions.",
            "home.title": "Xineon",
            "home.hero.title": "Built on understanding, <br>not assumptions.",
            "home.hero.subtitle":
                "Modern software for organizations <br>that value clarity over complexity.",
            "home.hero.ctaPrimary": "Book a Demo",
            "home.hero.ctaSecondary": "Our Philosophy",
            "home.about.title": "About Xineon",
            "home.about.p1":
                "Inspired by the Greek concept of Noesis, Xineon represents a commitment to understanding before building.",
            "home.about.p2":
                "We believe great software begins with deep understanding—not assumptions.",
            "home.about.p3":
                "Through thoughtful engineering, we transform complexity into clarity and create software that helps people and organizations work better.",
            "home.philosophy.title": "Our Philosophy",
            "home.philosophy.explore.title": "Explore",
            "home.philosophy.explore.body": "We begin by exploring the real problem.",
            "home.philosophy.understand.title": "Understand",
            "home.philosophy.understand.body":
                "We seek deep understanding before designing solutions.",
            "home.philosophy.build.title": "Build",
            "home.philosophy.build.body": "We build software that creates lasting value.",

            "about.meta":
                "Xineon is an enterprise software company for organizations that think clearly—grounded in the Greek concept of Noesis and a commitment to understanding before building.",
            "about.title": "About Xineon",
            "about.hero.title": "For organizations that think clearly.",
            "about.hero.subtitle":
                "Xineon is an enterprise software company focused on turning complexity into clarity—one thoughtful system at a time.",
            "about.name.title": "Our Name",
            "about.name.alt": "Xineon — white letterforms with a soft blue glow",
            "about.name.p1":
                "Inspired by the Greek concept of Noesis—the act of pure intellectual understanding—Xineon represents a commitment to understanding before building.",
            "about.name.p2":
                "The name reflects what we believe software should be grounded in: not assumptions about how work should happen, but a genuine grasp of how it actually does.",
            "about.logo.title": "Our Logo",
            "about.logo.altColor": "Xineon lockup in full color",
            "about.logo.altBlack": "Xineon lockup in black",
            "about.logo.p1":
                "Our mark is a window with a single blue cursor—software as a clear frame for work, and understanding as the point of focus. The lockup pairs that mark with the Xineon wordmark and our line: built on understanding, not assumptions.",
            "about.believe.title": "What We Believe",
            "about.believe.p1":
                "We believe great software begins with deep understanding—not assumptions. Too many tools are built around generic workflows and sold as one-size-fits-all solutions. We take a different path.",
            "about.believe.p2":
                "Clarity is not a nice-to-have. It is the foundation of software that people trust, adopt, and rely on every day. When systems are clear, teams move faster, make better decisions, and spend less time fighting their tools.",
            "about.build.title": "What We Build",
            "about.build.p1":
                'We build modern enterprise software for organizations that value clarity over complexity. Our first product, <a class="text-link" href="hris.html">Xineon HRIS</a>, brings employee records, time, structure, and operations into a single system for growing teams.',
            "about.build.p2":
                "Every product we ship follows the same standard: thoughtful engineering, clean interfaces, and a focus on how people actually work—not how a vendor thinks they should.",
            "about.work.title": "How We Work",
            "about.work.p1":
                "Through thoughtful engineering, we transform complexity into clarity and create software that helps people and organizations work better.",
            "about.work.p2":
                'We work closely with the teams who use our products—listening, iterating, and improving based on real feedback. Our process is described in detail on our <a class="text-link" href="philosophy.html">Philosophy</a> page: explore, understand, then build.',

            "philosophy.meta":
                "Xineon explores real problems, seeks deep understanding, and builds software that creates lasting value—grounded in clarity over assumptions.",
            "philosophy.title": "Our Philosophy — Xineon",
            "philosophy.hero.title": "Understanding before building.",
            "philosophy.hero.subtitle":
                "Our work follows a simple sequence: explore the real problem, understand it deeply, then build with intention.",
            "philosophy.section.title": "Our Philosophy",
            "philosophy.explore.title": "Explore",
            "philosophy.explore.lead": "We begin by exploring the real problem.",
            "philosophy.explore.p1":
                "Before proposing solutions, we listen—to the people who use the systems, the teams who maintain them, and the constraints that shape daily work. We map how things actually flow, not how a diagram says they should.",
            "philosophy.explore.p2":
                "Exploration means asking better questions, surfacing friction that has become invisible, and resisting the urge to jump to features. The goal is a clear picture of what is broken, what works, and what matters most.",
            "philosophy.understand.title": "Understand",
            "philosophy.understand.lead":
                "We seek deep understanding before designing solutions.",
            "philosophy.understand.p1":
                "Understanding is more than gathering requirements. It means separating assumptions from facts, tracing cause and effect, and finding the structure beneath surface complexity.",
            "philosophy.understand.p2":
                "Inspired by the Greek concept of Noesis—pure intellectual understanding—we treat clarity as a deliverable. When the problem is truly understood, the right solution often becomes obvious.",
            "philosophy.build.title": "Build",
            "philosophy.build.lead": "We build software that creates lasting value.",
            "philosophy.build.p1":
                "We ship incrementally, validate early, and refine based on real use—not slide decks. Every decision balances immediate needs with long-term maintainability.",
            "philosophy.build.p2":
                "The result is software that organizations can grow with: clear interfaces, thoughtful engineering, and systems that earn trust over time rather than demanding constant workarounds.",

            "contact.meta":
                "Get in touch with Xineon. Reach out to book a demo or start a conversation about bringing clarity to your organization.",
            "contact.title": "Contact — Xineon",
            "contact.hero.title": "Let's start with a conversation.",
            "contact.hero.subtitle":
                "Whether you're exploring Xineon HRIS or thinking about a broader partnership, we'd like to hear from you.",
            "contact.touch.title": "Get in Touch",
            "contact.touch.p1":
                "Ready to bring clarity to your organization? Send us a note and we'll get back to you within two business days.",
            "contact.demo.title": "Book a Demo",
            "contact.demo.p1":
                "Interested in seeing Xineon HRIS in action? Tell us about your team and what you're looking to solve—we'll set up a walkthrough tailored to your needs.",
            "contact.demo.p2":
                'Email us at <a class="text-link" href="mailto:hello@xineon.io">hello@xineon.io</a> with the subject line "Demo Request" and a brief description of your organization.',

            "pricing.meta":
                "Xineon pricing — plans for teams that want clarity without complexity. Details coming soon.",
            "pricing.title": "Pricing — Xineon",
            "pricing.hero.title": "Simple pricing, when it's ready.",
            "pricing.hero.subtitle":
                "We're still finalizing plans. In the meantime, tell us about your team and we'll share what fits.",
            "pricing.soon.title": "Coming Soon",
            "pricing.soon.p1":
                "Pricing details for Xineon products aren't published yet. If you're evaluating HRIS or planning ahead, we're happy to talk through options.",
            "pricing.soon.p2":
                'Reach us at <a class="text-link" href="mailto:hello@xineon.io">hello@xineon.io</a> or <a class="text-link" href="contact.html">Book a Demo</a>.',

            "hris.meta":
                "Xineon HRIS brings employee records, time, structure, and operations into a single, clear system for growing teams.",
            "hris.title": "Xineon HRIS",
            "hris.hero.title": "One system for how people actually work.",
            "hris.overview.title": "Overview",
            "hris.overview.p1":
                "Most HR systems ask you to adapt to their structure. Xineon HRIS starts with how your organization already works — then brings it together in one place.",
            "hris.mockup.alt":
                "Xineon HRIS directory — employee list with filters, status, and org navigation",
            "hris.features.title": "Core Features",
            "hris.features.people.title": "People & Structure",
            "hris.features.people.body":
                "Employee records and org charts, kept in sync as your company grows.",
            "hris.features.time.title": "Time & Pay",
            "hris.features.time.body":
                "Attendance, leave, and payroll basics — tracked accurately, without spreadsheets.",
            "hris.features.ops.title": "Operations",
            "hris.features.ops.body":
                "General affairs requests and certificate issuance, handled in one workflow.",
            "hris.features.growth.title": "Growth",
            "hris.features.growth.body":
                "Training history logged and available whenever it's needed.",
            "hris.who.title": "Who it's for",
            "hris.who.p1":
                "Built for teams under 50, and growing small or mid-sized companies where HR processes are still taking shape. If your organization already runs on complex, established systems, Xineon HRIS may not be the right fit — yet.",

            "ats.meta":
                "Xineon ATS — applicant tracking built with the same clarity-first approach as the rest of the Xineon platform. Coming soon.",
            "ats.title": "Xineon ATS",
            "ats.hero.title": "Hiring, without the noise.",
            "ats.hero.subtitle":
                "Xineon ATS is in development—applicant tracking that stays clear from first application to offer.",
            "ats.soon.title": "Coming Soon",
            "ats.soon.p1":
                'We\'re building ATS with the same standard as <a class="text-link" href="hris.html">Xineon HRIS</a>: understand how recruiting actually works, then design the system around it.',
            "ats.soon.p2":
                'Want early access or a conversation about hiring workflows? Reach us at <a class="text-link" href="mailto:hello@xineon.io">hello@xineon.io</a>.',

            "perf.meta":
                "Xineon Performance Management — goals, feedback, and reviews designed for clarity. Coming soon.",
            "perf.title": "Xineon Performance Management",
            "perf.hero.title": "Performance that stays clear.",
            "perf.hero.subtitle":
                "Xineon Performance Management is in development—goals, feedback, and reviews without the ritual theater.",
            "perf.soon.title": "Coming Soon",
            "perf.soon.p1":
                'We\'re designing performance tools that start from how teams actually set direction and grow—not from generic review templates. It will sit alongside <a class="text-link" href="hris.html">Xineon HRIS</a>.',
            "perf.soon.p2":
                'Interested in early conversations? Email <a class="text-link" href="mailto:hello@xineon.io">hello@xineon.io</a>.',

            "privacy.title": "Privacy Policy — Xineon",
            "terms.title": "Terms of Service — Xineon",
        },
        ko: {
            "nav.home": "홈",
            "nav.product": "제품",
            "nav.hris": "HRIS",
            "nav.ats": "ATS",
            "nav.performance": "성과 관리",
            "nav.pricing": "가격",
            "nav.philosophy": "철학",
            "nav.about": "소개",
            "nav.contact": "문의",
            "nav.bookDemo": "데모 문의",

            "footer.label": "문의",
            "footer.cta": "조직에 명확함을 더할 준비가 되셨나요?",
            "footer.rights": "모든 권리 보유.",
            "footer.privacy": "개인정보처리방침",
            "footer.terms": "이용약관",
            "footer.company": "Xineon · 대한민국 서울",

            "lang.aria": "언어",
            "lang.en": "EN",
            "lang.ko": "KO",

            "home.meta":
                "Xineon은 복잡함보다 명확함을 중시하는 조직을 위한 모던 엔터프라이즈 소프트웨어를 만듭니다—가정하기 전에 이해하는 것에서 출발합니다.",
            "home.title": "Xineon",
            "home.hero.title": "가정을 앞세우지 않고, <br>이해에서 출발합니다.",
            "home.hero.subtitle":
                "복잡함보다 명확함을 중시하는 <br>조직을 위한 모던 소프트웨어.",
            "home.hero.ctaPrimary": "데모 문의",
            "home.hero.ctaSecondary": "우리의 철학",
            "home.about.title": "Xineon 소개",
            "home.about.p1":
                "그리스 철학의 Noesis(이해·인식) 개념에서 영감을 받은 Xineon은, 만들기 전에 이해하는 것을 약속합니다.",
            "home.about.p2":
                "우리는 훌륭한 소프트웨어가 가정이 아닌 깊은 이해에서 시작한다고 믿습니다.",
            "home.about.p3":
                "신중한 엔지니어링을 통해 복잡함을 명확함으로 바꾸고, 사람과 조직이 더 잘 일할 수 있도록 돕는 소프트웨어를 만듭니다.",
            "home.philosophy.title": "우리의 철학",
            "home.philosophy.explore.title": "발견",
            "home.philosophy.explore.body": "우리는 진짜 문제를 발견하는 것에서 시작합니다.",
            "home.philosophy.understand.title": "이해",
            "home.philosophy.understand.body":
                "솔루션을 설계하기 전에 깊은 이해를 추구합니다.",
            "home.philosophy.build.title": "구축",
            "home.philosophy.build.body": "오래 남는 가치를 만드는 소프트웨어를 구축합니다.",

            "about.meta":
                "Xineon은 명확하게 생각하는 조직을 위한 엔터프라이즈 소프트웨어 회사입니다—그리스 철학의 Noesis 개념과, 만들기 전에 이해하는 약속에 뿌리를 둡니다.",
            "about.title": "Xineon 소개",
            "about.hero.title": "명확함을 중시하는 조직을 위해.",
            "about.hero.subtitle":
                "Xineon은 복잡함을 명확함으로 바꾸는 데 집중하는 엔터프라이즈 소프트웨어 회사입니다—신중하게 설계된 시스템으로, 하나씩.",
            "about.name.title": "이름",
            "about.name.alt": "Xineon — 부드러운 블루 글로우가 있는 화이트 레터폼",
            "about.name.p1":
                "그리스 철학의 Noesis(이해·인식)—순수한 지적 이해의 행위—에서 영감을 받은 Xineon은, 만들기 전에 이해하는 것을 약속합니다.",
            "about.name.p2":
                "이 이름은 소프트웨어가 바탕해야 할 것이 무엇인지 담습니다. 일이 ‘어떻게 되어야 한다’는 가정이 아니라, 실제로 어떻게 돌아가는지에 대한 진짜 이해입니다.",
            "about.logo.title": "로고",
            "about.logo.altColor": "풀컬러 Xineon 로고 조합",
            "about.logo.altBlack": "블랙 Xineon 로고 조합",
            "about.logo.p1":
                "우리의 마크는 창과 하나의 파란 커서입니다—소프트웨어는 일을 담는 맑은 프레임이고, 이해는 그 초점입니다. 로고 조합은 그 마크와 Xineon 워드마크, 그리고 우리의 문장—가정을 앞세우지 않고, 이해에서 출발합니다—을 함께 둡니다.",
            "about.believe.title": "우리가 믿는 것",
            "about.believe.p1":
                "우리는 훌륭한 소프트웨어가 가정이 아닌 깊은 이해에서 시작한다고 믿습니다. 너무 많은 도구가 일반적인 워크플로를 중심으로 만들어지고, 만능 솔루션처럼 팔립니다. 우리는 다른 길을 갑니다.",
            "about.believe.p2":
                "명확함은 있으면 좋은 것이 아닙니다. 사람들이 신뢰하고, 받아들이며, 매일 의지하는 소프트웨어의 기초입니다. 시스템이 명확하면 팀은 더 빠르게 움직이고, 더 나은 결정을 내리며, 도구와 씨름하는 시간을 줄입니다.",
            "about.build.title": "우리가 만드는 것",
            "about.build.p1":
                '우리는 복잡함보다 명확함을 중시하는 조직을 위한 모던 엔터프라이즈 소프트웨어를 만듭니다. 첫 제품인 <a class="text-link" href="hris.html">Xineon HRIS</a>는 인사 기록, 근태, 조직 구조, 운영을 성장하는 팀을 위한 하나의 시스템으로 모읍니다.',
            "about.build.p2":
                "우리가 출시하는 모든 제품은 같은 기준을 따릅니다. 신중한 엔지니어링, 깔끔한 인터페이스, 그리고 벤더가 생각하는 방식이 아니라 사람들이 실제로 일하는 방식에 대한 집중.",
            "about.work.title": "일하는 방식",
            "about.work.p1":
                "신중한 엔지니어링을 통해 복잡함을 명확함으로 바꾸고, 사람과 조직이 더 잘 일할 수 있도록 돕는 소프트웨어를 만듭니다.",
            "about.work.p2":
                '우리는 제품을 쓰는 팀과 가까이 일합니다—듣고, 반복하고, 실제 피드백으로 개선합니다. 프로세스는 <a class="text-link" href="philosophy.html">철학</a> 페이지에 자세히 담겨 있습니다. 발견하고, 이해하고, 구축합니다.',

            "philosophy.meta":
                "Xineon은 진짜 문제를 발견하고, 깊은 이해를 추구하며, 오래 남는 가치를 만드는 소프트웨어를 구축합니다—가정보다 명확함에 뿌리를 둡니다.",
            "philosophy.title": "우리의 철학 — Xineon",
            "philosophy.hero.title": "이해에서 출발하고, 그다음 구축합니다.",
            "philosophy.hero.subtitle":
                "우리의 일은 단순한 순서를 따릅니다. 진짜 문제를 발견하고, 깊이 이해한 뒤, 의도를 가지고 구축합니다.",
            "philosophy.section.title": "우리의 철학",
            "philosophy.explore.title": "발견",
            "philosophy.explore.lead": "우리는 진짜 문제를 발견하는 것에서 시작합니다.",
            "philosophy.explore.p1":
                "솔루션을 제안하기 전에, 우리는 듣습니다—시스템을 쓰는 사람, 유지하는 팀, 그리고 매일의 일을 규정하는 제약까지. 다이어그램이 말하는 흐름이 아니라, 실제로 흘러가는 방식을 그립니다.",
            "philosophy.explore.p2":
                "발견이란 더 나은 질문을 던지고, 보이지 않게 된 마찰을 드러내며, 기능으로 바로 뛰어들고 싶은 충동을 참는 일입니다. 목표는 무엇이 깨져 있고, 무엇이 작동하며, 무엇이 가장 중요한지에 대한 선명한 그림입니다.",
            "philosophy.understand.title": "이해",
            "philosophy.understand.lead":
                "솔루션을 설계하기 전에 깊은 이해를 추구합니다.",
            "philosophy.understand.p1":
                "이해는 요구사항을 모으는 것 이상입니다. 가정과 사실을 가르고, 원인과 결과를 추적하며, 표면의 복잡함 아래 있는 구조를 찾는 일입니다.",
            "philosophy.understand.p2":
                "그리스 철학의 Noesis(이해·인식)—순수한 지적 이해—에서 영감을 받아, 우리는 명확함을 하나의 결과물로 다룹니다. 문제를 진정으로 이해하면, 올바른 솔루션은 종종 분명해집니다.",
            "philosophy.build.title": "구축",
            "philosophy.build.lead": "오래 남는 가치를 만드는 소프트웨어를 구축합니다.",
            "philosophy.build.p1":
                "우리는 점진적으로 출시하고, 일찍 검증하며, 슬라이드가 아니라 실제 사용을 기준으로 다듬습니다. 모든 결정은 당장의 필요와 장기적인 유지보수성 사이에서 균형을 잡습니다.",
            "philosophy.build.p2":
                "결과는 조직과 함께 성장할 수 있는 소프트웨어입니다. 명확한 인터페이스, 신중한 엔지니어링, 그리고 끊임없는 우회를 요구하기보다 시간이 지날수록 신뢰를 쌓는 시스템.",

            "contact.meta":
                "Xineon에 문의하세요. 데모를 요청하거나, 조직에 명확함을 더하는 대화를 시작할 수 있습니다.",
            "contact.title": "문의 — Xineon",
            "contact.hero.title": "대화를 시작하세요.",
            "contact.hero.subtitle":
                "Xineon HRIS를 살펴보고 계시든, 더 넓은 협력을 고민 중이시든, 이야기를 듣고 싶습니다.",
            "contact.touch.title": "연락하기",
            "contact.touch.p1":
                "조직에 명확함을 더할 준비가 되셨나요? 메시지를 보내 주시면 영업일 기준 이틀 안에 답변드립니다.",
            "contact.demo.title": "데모 문의",
            "contact.demo.p1":
                "Xineon HRIS를 직접 보고 싶으신가요? 팀과 해결하고 싶은 과제를 알려 주세요—필요에 맞춘 데모를 준비하겠습니다.",
            "contact.demo.p2":
                '<a class="text-link" href="mailto:hello@xineon.io">hello@xineon.io</a>로 메일 제목 “데모 문의”와 함께 조직에 대한 간단한 설명을 보내 주세요.',

            "pricing.meta":
                "Xineon 가격 — 복잡함 없이 명확함을 원하는 팀을 위한 플랜. 자세한 내용은 준비 중입니다.",
            "pricing.title": "가격 — Xineon",
            "pricing.hero.title": "단순하고 명확한 가격.",
            "pricing.hero.subtitle":
                "아직 플랜을 정리하는 중입니다. 그동안 팀에 대해 알려 주시면, 맞는 방향을 함께 살펴보겠습니다.",
            "pricing.soon.title": "준비 중",
            "pricing.soon.p1":
                "Xineon 제품의 가격 정보는 아직 공개되지 않았습니다. HRIS를 검토 중이시거나 미리 계획을 세우고 계시다면, 옵션을 함께 이야기할 수 있습니다.",
            "pricing.soon.p2":
                '<a class="text-link" href="mailto:hello@xineon.io">hello@xineon.io</a>로 연락하시거나 <a class="text-link" href="contact.html">데모 문의</a>를 남겨 주세요.',

            "hris.meta":
                "Xineon HRIS는 인사 기록, 근태, 조직 구조, 운영을 성장하는 팀을 위한 하나의 명확한 시스템으로 모읍니다.",
            "hris.title": "Xineon HRIS",
            "hris.hero.title": "사람들이 실제로 일하는 방식을 위한 하나의 시스템.",
            "hris.overview.title": "개요",
            "hris.overview.p1":
                "대부분의 HR 시스템은 그들의 구조에 맞추라고 합니다. Xineon HRIS는 조직이 이미 일하는 방식에서 시작해 — 그것을 한곳에 모읍니다.",
            "hris.mockup.alt":
                "Xineon HRIS 디렉터리 — 필터, 상태, 조직 탐색이 있는 임직원 목록",
            "hris.features.title": "핵심 기능",
            "hris.features.people.title": "사람 & 조직",
            "hris.features.people.body":
                "임직원 기록과 조직도가 회사가 성장해도 함께 맞춰집니다.",
            "hris.features.time.title": "근태 & 급여",
            "hris.features.time.body":
                "출퇴근, 휴가, 급여의 기초 — 스프레드시트 없이 정확하게 추적합니다.",
            "hris.features.ops.title": "운영",
            "hris.features.ops.body":
                "총무 업무 요청과 증명서 발급을 하나의 워크플로에서 처리합니다.",
            "hris.features.growth.title": "성장",
            "hris.features.growth.body":
                "교육 이력을 기록해 두고, 필요할 때 바로 확인할 수 있습니다.",
            "hris.who.title": "이런 팀에 맞습니다",
            "hris.who.p1":
                "50명 미만의 팀, 그리고 HR 프로세스가 아직 자리 잡아 가는 성장 중인 중소 규모 조직을 위해 만들었습니다. 이미 복잡하고 정착된 시스템으로 운영 중이라면, Xineon HRIS는 — 아직은 — 맞지 않을 수 있습니다.",

            "ats.meta":
                "Xineon ATS — Xineon 플랫폼과 같은 명확함 우선 접근으로 만드는 채용 관리. 준비 중입니다.",
            "ats.title": "Xineon ATS",
            "ats.hero.title": "복잡함 없는 채용.",
            "ats.hero.subtitle":
                "Xineon ATS는 개발 중입니다—지원부터 오퍼까지 명확함이 유지되는 채용 관리.",
            "ats.soon.title": "준비 중",
            "ats.soon.p1":
                'ATS도 <a class="text-link" href="hris.html">Xineon HRIS</a>와 같은 기준으로 만듭니다. 채용이 실제로 어떻게 돌아가는지 이해하고, 그 위에 시스템을 설계합니다.',
            "ats.soon.p2":
                '얼리 액세스나 채용 워크플로에 대한 대화가 필요하시면 <a class="text-link" href="mailto:hello@xineon.io">hello@xineon.io</a>로 연락해 주세요.',

            "perf.meta":
                "Xineon 성과 관리 — 명확함을 위한 목표, 피드백, 리뷰. 준비 중입니다.",
            "perf.title": "Xineon 성과 관리",
            "perf.hero.title": "명확함이 유지되는 성과 관리.",
            "perf.hero.subtitle":
                "Xineon 성과 관리는 개발 중입니다—형식만 남은 평가는 빼고, 목표·피드백·리뷰에 집중합니다.",
            "perf.soon.title": "준비 중",
            "perf.soon.p1":
                '우리는 일반적인 리뷰 템플릿이 아니라, 팀이 실제로 방향을 잡고 성장하는 방식에서 출발하는 성과 도구를 설계하고 있습니다. <a class="text-link" href="hris.html">Xineon HRIS</a>와 함께 동작합니다.',
            "perf.soon.p2":
                '미리 이야기하고 싶으시면 <a class="text-link" href="mailto:hello@xineon.io">hello@xineon.io</a>로 메일을 보내 주세요.',

            "privacy.title": "개인정보처리방침 — Xineon",
            "terms.title": "이용약관 — Xineon",
        },
    };

    function normalizeLang(value) {
        if (!value) return DEFAULT_LANG;
        const short = String(value).toLowerCase().slice(0, 2);
        return SUPPORTED.includes(short) ? short : DEFAULT_LANG;
    }

    function getStoredLang() {
        try {
            return normalizeLang(localStorage.getItem(STORAGE_KEY));
        } catch {
            return DEFAULT_LANG;
        }
    }

    function storeLang(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch {
            /* ignore quota / private mode */
        }
    }

    function t(lang, key) {
        return messages[lang]?.[key] ?? messages[DEFAULT_LANG]?.[key] ?? key;
    }

    function applyTranslations(lang) {
        document.documentElement.lang = lang;

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (!key) return;

            const value = t(lang, key);
            if (el.tagName === "TITLE") {
                document.title = value;
                return;
            }

            if (el.hasAttribute("data-i18n-html")) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });

        document.querySelectorAll("[data-i18n-content]").forEach((el) => {
            const key = el.getAttribute("data-i18n-content");
            if (!key) return;
            el.setAttribute("content", t(lang, key));
        });

        document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
            const key = el.getAttribute("data-i18n-alt");
            if (!key) return;
            el.setAttribute("alt", t(lang, key));
        });

        document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
            const key = el.getAttribute("data-i18n-aria");
            if (!key) return;
            el.setAttribute("aria-label", t(lang, key));
        });

        document.querySelectorAll("[data-lang-option]").forEach((btn) => {
            const option = btn.getAttribute("data-lang-option");
            const active = option === lang;
            btn.classList.toggle("is-active", active);
            btn.setAttribute("aria-pressed", active ? "true" : "false");
        });
    }

    function setLanguage(lang) {
        const next = normalizeLang(lang);
        storeLang(next);
        applyTranslations(next);
        return next;
    }

    function initLanguageToggle() {
        const root = document.querySelector("[data-lang-toggle]");
        if (!root) return;

        root.querySelectorAll("[data-lang-option]").forEach((btn) => {
            btn.addEventListener("click", () => {
                const next = btn.getAttribute("data-lang-option");
                if (next) setLanguage(next);
            });
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        const lang = getStoredLang();
        applyTranslations(lang);
        initLanguageToggle();
    });
})();

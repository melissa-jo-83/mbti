"use strict";

const questions = [
  ["냉장고", "🧊", "주인이 친구들을 데려왔어. 다들 간식을 찾으러 내 앞에 모였네.", [
    ["E", "오, 드디어 북적북적하다! 내 안에 뭐 있는지 같이 뒤져 보자."],
    ["I", "간식은 오른쪽 칸이야. 꺼내 가고 나한테 혼자 식힐 시간 좀 줘."]
  ]],
  ["스탠드", "💡", "불을 켜 보니 책상 위에 처음 보는 작은 상자가 있어.", [
    ["S", "테이프랑 주소부터 보자. 어디서 온 상자인지는 알 수 있겠네."],
    ["N", "이거 혹시 미래의 내가 보낸 물건 아냐? 안에 뭐가 들었을지 상상된다."]
  ]],
  ["머그컵", "☕", "손잡이가 금 간 단짝 컵이 주인이 자길 버릴까 봐 걱정해.", [
    ["F", "갑자기 금 가서 속상했겠다. 오늘은 내가 옆에 붙어 있을게."],
    ["T", "일단 뜨거운 건 담지 말자. 연필꽂이로 쓰면 멀쩡히 버틸걸?"]
  ]],
  ["이불", "🛏️", "친구가 오늘 집에서 자고 간다는 소식을 들었어.", [
    ["J", "베개는 두 개, 여분 이불은 장롱 위. 자리부터 세팅해 두자."],
    ["P", "오면 어디 눕고 싶은지 물어보지 뭐. 소파도 꽤 포근하거든."]
  ]],
  ["멀티탭", "🔌", "하루 종일 일을 끝냈고, 옆방 물건들이 잡담에 끼라고 불러.", [
    ["I", "오늘은 빈 콘센트랑 둘이 조용히 있을래. 그게 내 충전 시간이야."],
    ["E", "좋아, 꽂힌 애들 다 불러! 수다 좀 떨면 나도 다시 충전될 듯."]
  ]],
  ["거울", "🪞", "주인이 내 앞에서 한참 서성이다가 평소랑 다른 옷을 골랐어.", [
    ["N", "새로운 캐릭터로 변신 중인가? 오늘 무슨 이야기가 펼쳐질까."],
    ["S", "어제랑 색 조합이 다르네. 소매도 한 번 접었고."]
  ]],
  ["탁상시계", "⏰", "두 물건이 선반의 햇볕 드는 자리를 두고 티격태격해.", [
    ["T", "딱 30분씩 번갈아 쓰면 되잖아. 시간은 내가 재 줄게."],
    ["F", "둘 다 거기 앉고 싶은 이유부터 들어 보자. 서로 서운한 게 있어 보여."]
  ]],
  ["빨래바구니", "🧺", "빨래를 돌리려는데 친구한테 지금 놀러 오라는 연락이 왔어.", [
    ["P", "오, 갑자기 재밌어졌네. 빨래는 돌아와서 돌려도 되잖아?"],
    ["J", "빨래부터 끝내고 갈 시간을 알려 주자. 그래야 가서도 마음이 편해."]
  ]],
  ["스피커", "🔊", "거실에 새 무드등이 들어왔어. 너랑은 처음 보는 사이야.", [
    ["E", "내가 먼저 인사해야지. 좋아하는 노래가 뭔지부터 물어봐야겠다."],
    ["I", "일단 내 자리에서 분위기를 볼래. 나중에 둘만 있을 때 말 걸어야지."]
  ]],
  ["쿠션", "🛋️", "주인이 소파 주변을 새로 꾸미겠대. 너한테도 아이디어를 물어봐.", [
    ["S", "앉는 자리랑 등받이부터 재 보자. 나는 허리에 잘 받쳐지는 자리가 좋아."],
    ["N", "이 구석을 우주선 조종석으로 만들면 어때? 나는 선장석 담당할게."]
  ]],
  ["충전기", "🔋", "친구가 콘센트를 잘못 꽂아서 발표 직전인데 배터리가 비었대.", [
    ["F", "아이고, 심장 내려앉았겠다. 나 여기 있으니까 같이 숨 한 번 쉬자."],
    ["T", "내 선부터 연결해. 켜지는 동안 발표 파일을 다른 기기에도 보내 두자."]
  ]],
  ["리모컨", "📺", "아무 일정도 없는 토요일 저녁이야. 오늘은 뭘 할까?", [
    ["J", "영화 하나 정하고 간식도 챙기자. 여덟 시에 딱 시작하는 거야."],
    ["P", "일단 아무거나 틀어 봐. 재밌는 거 나오면 거기 눌러앉는 거지."]
  ]],
  ["소파", "🛋️", "손님들이 막 돌아갔어. 옆방 의자가 오늘 어땠냐고 물어봐.", [
    ["I", "재밌었지. 잠깐 조용히 앉아 있다가 천천히 얘기할래."],
    ["E", "아까 그 얘기 들었어? 다 같이 떠들고 나니 기운이 난다니까."]
  ]],
  ["책갈피", "🔖", "책을 펼쳤더니 낯선 사람이 끼워 둔 기차표 한 장이 나왔어.", [
    ["N", "이 사람이 떠난 곳엔 무슨 일이 있었을까? 소설 첫 장면 같다."],
    ["S", "날짜랑 출발역부터 볼래. 어느 날 어디서 탄 표인지 궁금해."]
  ]],
  ["우산", "☂️", "친구가 우산 챙기는 걸 깜빡해서 비를 맞았대. 네 옆에 와서 한숨을 쉬어.", [
    ["T", "다음엔 현관 손잡이에 걸어 두자. 나갈 때 바로 보이게."],
    ["F", "비 맞아서 놀랐겠다. 일단 내 아래로 들어와."]
  ]],
  ["연필꽂이", "✏️", "오늘 안에 책상 위 물건을 옮겨야 하는데 주인이 새 수납함도 가져왔어.", [
    ["P", "일단 꽂아 보자. 이리저리 옮겨 보면 편한 자리가 나올 거야."],
    ["J", "무엇을 어디에 둘지 정하고 시작하자. 그래야 한 번에 끝나."]
  ]]
];

// 네 글자 유형은 유지하고, 비슷한 유형 네 쌍에는 같은 물건 캐릭터를 보여준다.
const profiles = [
  [["ISTJ"], "한 치 오차 없는 탁상시계", "⏰", "내가 7시라고 했으면 7시야.", "작은 약속도 챙겨요. 익숙한 순서로 하나씩 끝낼 때 마음이 편해요."],
  [["ISFJ"], "빈자리를 채워 주는 이불", "🛏️", "추우면 슬쩍 내 쪽으로 와.", "곁에 있는 사람에게 뭐가 필요한지 살펴보고 조용히 챙겨요."],
  [["INFJ", "INFP"], "새벽 생각을 비추는 스탠드", "💡", "다들 잘 때 생각이 제일 잘 켜져.", "혼자 생각을 정리하면서 사람과 상황에 담긴 의미를 곱씹어요."],
  [["INTJ"], "동선을 설계하는 로봇청소기", "🤖", "내가 벽에 부딪힌 건 지도 업데이트 중이야.", "목표부터 세우고 거기까지 가는 길을 머릿속으로 그려요."],
  [["ISTP", "INTP"], "일단 열어 보는 공구함", "🧰", "고장 났다고? 잠깐, 뚜껑 좀 열어 봐.", "궁금한 게 생기면 혼자 들여다보며 작동 원리를 알아내는 게 즐거워요."],
  [["ISFP"], "분위기를 타는 무드등", "🏮", "오늘은 이 색이 내 기분이야.", "그날의 기분과 공간의 분위기를 살피며 나만의 취향을 표현해요."],
  [["ESTP"], "막히면 바로 뛰어드는 선풍기", "🌀", "말 길어지기 전에 일단 돌려 보자.", "눈앞의 상황을 빠르게 읽고, 바로 해보면서 해결책을 찾아요."],
  [["ESFP"], "흥이 오르는 블루투스 스피커", "🔊", "볼륨 두 칸만 올려도 모임 분위기 달라진다?", "주변의 반응을 보며 즉석에서 분위기를 살리는 걸 좋아해요."],
  [["ENFP"], "아이디어가 넘치는 멀티탭", "🔌", "콘센트 네 칸인데 하고 싶은 건 여덟 개야.", "사람들과 얘기하다 보면 새로운 아이디어가 줄줄이 떠올라요."],
  [["ENTP"], "채널을 넘나드는 리모컨", "📺", "딱 한 채널만 더. 이번엔 진짜 재밌을걸?", "여러 가능성을 빠르게 살피고 익숙한 방식도 새롭게 바꿔 봐요."],
  [["ESTJ", "ENTJ"], "집 안을 지휘하는 냉장고", "🧊", "반찬은 둘째 칸. 다 먹었으면 나한테 보고해.", "해야 할 일을 파악하고 역할을 나누며 계획을 실행에 옮겨요."],
  [["ESFJ", "ENFJ"], "모두를 불러 모으는 머그컵", "☕", "잠깐 앉아. 너 얘기부터 듣자.", "사람들을 자연스럽게 모으고 다들 편하게 이야기할 수 있도록 살펴요."]
];

const axes = ["EI", "SN", "TF", "JP"];

function scoreAnswers(answers) {
  const totals = Object.fromEntries([...axes.join("")].map(letter => [letter, 0]));
  const letters = answers.map((choice, index) => questions[index][3][choice][0]);
  letters.forEach(letter => {
    totals[letter] += 1;
  });

  // 데모에서 동점인 지표는 해당 지표의 마지막 응답으로 정한다.
  const type = axes.map(axis => {
    const [left, right] = axis;
    if (totals[left] === totals[right]) return letters.findLast(letter => axis.includes(letter));
    return totals[left] > totals[right] ? left : right;
  }).join("");
  const [, title, emoji, quote, description] = profiles.find(([types]) => types.includes(type));
  return { type, title, emoji, quote, description };
}

const get = id => document.getElementById(id);
const screens = ["intro", "quiz", "result"];
const publicPage = ["https:", "http:"].includes(location.protocol);
const shareOptions = get("share-options");
const shareStatus = get("share-status");
const copyFallback = get("copy-fallback");
let answers = [];
let currentIndex = 0;
let currentResult;

function showScreen(name, heading) {
  screens.forEach(screen => { get(screen).hidden = screen !== name; });
  window.scrollTo(0, 0);
  get(heading).focus({ preventScroll: true });
}

function renderQuestion() {
  const [object, emoji, situation, choices] = questions[currentIndex];
  get("progress").value = currentIndex + 1;
  get("progress-text").textContent = `${currentIndex + 1} / ${questions.length}`;
  get("question-emoji").textContent = emoji;
  get("question-object").textContent = `오늘은 내가 ${object}`;
  get("question-title").textContent = situation;
  get("back").hidden = currentIndex === 0;

  const buttons = choices.map(([, text], index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.setAttribute("aria-pressed", String(answers[currentIndex] === index));
    const label = document.createElement("span");
    label.className = "choice-label";
    label.setAttribute("aria-hidden", "true");
    label.textContent = index === 0 ? "A" : "B";
    button.append(label, text);
    button.addEventListener("click", () => {
      answers[currentIndex] = index;
      currentIndex += 1;
      if (currentIndex === questions.length) renderResult();
      else renderQuestion();
    });
    return button;
  });
  get("choices").replaceChildren(...buttons);
  showScreen("quiz", "question-title");
}

function renderResult() {
  currentResult = scoreAnswers(answers);
  const { type, title, emoji, quote, description } = currentResult;
  get("result-type").textContent = type;
  get("result-title").textContent = title;
  get("result-emoji").textContent = emoji;
  get("result-quote").textContent = `“${quote}”`;
  get("result-description").textContent = description;
  shareOptions.hidden = true;
  get("share").setAttribute("aria-expanded", "false");
  shareStatus.textContent = "";
  copyFallback.hidden = true;
  showScreen("result", "result-title");
}

function resultText() {
  const { type, title, emoji, quote, description } = currentResult;
  return ["물건들의 속마음 · 데모 결과", `${emoji} ${type} · ${title}`, `“${quote}”`, description].join("\n");
}

async function copyShareContent() {
  const value = publicPage ? `${resultText()}\n${location.href}` : resultText();
  try {
    await navigator.clipboard.writeText(value);
    copyFallback.hidden = true;
    shareStatus.textContent = "결과 텍스트를 복사했어요.";
  } catch {
    copyFallback.hidden = false;
    copyFallback.value = value;
    copyFallback.focus();
    copyFallback.select();
    shareStatus.textContent = "선택된 내용을 복사해 주세요.";
  }
}

function saveResultCard() {
  const { type, title, emoji, quote } = currentResult;
  const canvas = document.createElement("canvas");
  canvas.width = 900;
  canvas.height = 560;
  const context = canvas.getContext("2d");
  if (!context) {
    shareStatus.textContent = "이 브라우저에서는 카드 이미지를 만들 수 없어요.";
    return;
  }

  context.fillStyle = "#f0e4d4";
  context.fillRect(0, 0, 900, 560);
  context.fillStyle = "#fffcf7";
  context.fillRect(32, 32, 836, 496);
  context.textAlign = "center";
  context.fillStyle = "#6c5035";
  const textFont = getComputedStyle(get("result-title")).fontFamily;
  context.font = `bold 29px ${textFont}`;
  context.fillText("물건들의 속마음 · 데모 결과", 450, 105);
  context.font = '104px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';
  context.fillText(emoji, 450, 241);
  context.font = `bold 38px ${textFont}`;
  context.fillText(type, 450, 319);
  context.fillStyle = "#32291f";
  context.font = `bold 55px ${textFont}`;
  context.fillText(title, 450, 401, 740);
  context.font = `32px ${textFont}`;
  context.fillText(`“${quote}”`, 450, 466, 740);

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = `물건들의-속마음-${type}.png`;
  document.body.append(link);
  link.click();
  link.remove();
  shareStatus.textContent = "결과 카드 이미지 다운로드를 시작했어요.";
}

get("start").addEventListener("click", () => {
  answers = [];
  currentIndex = 0;
  renderQuestion();
});
get("back").addEventListener("click", () => {
  currentIndex -= 1;
  renderQuestion();
});
get("restart").addEventListener("click", () => showScreen("intro", "intro-title"));
get("share").addEventListener("click", () => {
  shareOptions.hidden = !shareOptions.hidden;
  get("share").setAttribute("aria-expanded", String(!shareOptions.hidden));
  if (shareOptions.hidden) {
    copyFallback.hidden = true;
    shareStatus.textContent = "";
  }
});
get("copy").addEventListener("click", copyShareContent);
get("save-card").addEventListener("click", saveResultCard);

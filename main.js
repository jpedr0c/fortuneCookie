const cookie = document.getElementById('cookieImg');
const btnRestart = document.getElementById('btnRestart');
const title = document.getElementById('title');
const paragraph = document.getElementById('actionMessage');
const messageCard = document.getElementById('messageCard');

const messages = [
  "Acredite em si mesmo e alcançará grandes conquistas.",
  "Seja gentil em todas as suas ações e colherá bondade em retorno.",
  "Grandes oportunidades surgirão para aqueles que estão dispostos a arriscar.",
  "A vida é um presente precioso. Aproveite cada momento.",
  "O sucesso virá para aqueles que perseverarem, mesmo diante dos desafios.",
  "Ame profundamente e você encontrará a verdadeira felicidade.",
  "Sua criatividade e imaginação são poderosas forças transformadoras.",
  "Encontre alegria nas pequenas coisas, pois são elas que tornam a vida especial.",
  "Seja corajoso e siga seus sonhos, não importa o quão ousados eles sejam.",
  "Acredite na magia da vida e ela se revelará a você.",
  "O caminho para o sucesso é pavimentado com trabalho árduo e determinação.",
  "Seja paciente. Grandes coisas levam tempo para se concretizarem.",
  "Confie no processo. Tudo acontece no momento certo.",
  "Aprenda com os erros do passado para construir um futuro melhor.",
  "Seja a mudança que você deseja ver no mundo.",
  "A gratidão transforma momentos comuns em momentos de felicidade.",
  "Acredite em si mesmo e os outros também acreditarão.",
  "Valorize as pequenas vitórias, elas são o que torna a jornada significativa.",
  "O amor é a chave para desbloquear a verdadeira felicidade na vida.",
  "A felicidade está nas coisas simples. Aprecie os momentos presentes.",
]

cookie.addEventListener('click', () => {
  btnRestart.classList.remove('hidden');
  messageCard.classList.remove('hidden');
  paragraph.classList.add('hidden');
  cookie.classList.remove('enableAnimation');
  cookie.src = "./assets/opened-cookie.svg";
  cookie.alt = "Imagem de um biscoito da sorte aberto";
  title.textContent = "Aqui está a sua sorte de hoje:";

  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];
  messageCard.textContent = randomMessage;
});

btnRestart.addEventListener('click', () => {
  btnRestart.classList.add('hidden');
  messageCard.classList.add('hidden');
  paragraph.classList.remove('hidden');
  cookie.classList.add('enableAnimation');
  cookie.src = "./assets/cookie.svg";
  cookie.alt = "Imagem de um biscoito da sorte";
  title.textContent = "Qual é a sua sorte de hoje?";
});
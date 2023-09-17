const INPUT_MASK = "input-mask";
const INPUT_SUBMIT = "input-submit";
const OPPONENT1 = "opponent1";
const OPPONENT2 = "opponent2";
const RADIO_OPPONENT1 = "won-opponent1";
const RADIO_OPPONENT2 = "won-opponent2";
const RADIO_DRAW = "won-draw";
const ELEMENT_ID = "bracketsViewerExample";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

function loadData(id) {
  const bracketsStore = JSON.parse(localStorage.getItem(BRACKETS));

  if (null === bracketsStore || !(id in bracketsStore)) {
    alert("Key is not found in data!");
    window.location.href = "/demo/with-ui.html";
    return;
  }

  return bracketsStore[id];
}

function renderBracket(data) {
  if (!document.getElementById(ELEMENT_ID)) return;
  document.getElementById(ELEMENT_ID).innerHTML = "";

  window.bracketsViewer.render(
    {
      stages: data.stage,
      matches: data.match,
      matchGames: data.match_game,
      participants: data.participant,
    },
    {
      selector: "#" + ELEMENT_ID,
      participantOriginPlacement: "before",
      separatedChildCountLabel: true,
      showSlotsOrigin: true,
      showLowerBracketSlotsOrigin: true,
      highlightParticipantOnHover: true,
    }
  );
}

const backLink = document.createElement("a");
backLink.className = "go_back";
backLink.href = "/demo/with-ui.html";
backLink.innerText = "Go back";
document.body.insertBefore(backLink, document.getElementById(ELEMENT_ID));

window.bracketsViewer.onMatchClicked = async (match) => {
  const inputMask = document.getElementById(INPUT_MASK);
  inputMask.style.display = "flex";

  const matchTitle = document.querySelector(
    `[data-match-id="${match.id}"] .opponents > span`
  ).textContent;
  inputMask.querySelector("h3").innerText = matchTitle;

  const inputButton = document.getElementById(INPUT_SUBMIT);
  inputButton.onclick = async () => {
    const opponent1 = parseInt(document.getElementById(OPPONENT1).value);
    const opponent2 = parseInt(document.getElementById(OPPONENT2).value);

    const payload1 = { score: opponent1 };
    const payload2 = { score: opponent2 };

    if (document.getElementById(RADIO_OPPONENT1).checked) {
      payload1["result"] = "win";
    }

    if (document.getElementById(RADIO_OPPONENT2).checked) {
      payload2["result"] = "win";
    }

    if (document.getElementById(RADIO_DRAW).checked) {
      payload1["result"] = "draw";
      payload2["result"] = "draw";
    }

    const data = loadData(id);
    await window.bracketsManager.import(data);

    await window.bracketsManager.update.match({
      id: match.id,
      opponent1: payload1,
      opponent2: payload2,
    });

    const newData = await window.bracketsManager.export();
    renderBracket(newData);

    const bracketsStore = JSON.parse(localStorage.getItem(BRACKETS));
    bracketsStore[id] = newData;
    localStorage.setItem(BRACKETS, JSON.stringify(bracketsStore));

    inputMask.style.display = "none";
  };
};

const data = loadData(id);
renderBracket(data);

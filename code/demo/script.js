const addActionButtons = (stage, id) => {
  const action_btns = document.createElement("div");
  action_btns.className = "action_btns";
  stage.appendChild(action_btns);

  // URL for bracket
  const url = document.createElement("a");
  // url.target = "_blank";
  url.href = `/demo/bracket.html?id=${id}`;
  url.textContent = "Go to Bracket";
  url.className = "btn";
  action_btns.appendChild(url);

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn";
  deleteBtn.textContent = "Delete Bracket";
  action_btns.appendChild(deleteBtn);

  deleteBtn.onclick = () => {
    const storedBrackets = localStorage.getItem(BRACKETS);
    try {
      const parsed = JSON.parse(storedBrackets);
      delete parsed[id];
      localStorage.setItem(BRACKETS, JSON.stringify(parsed));
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
};

const displayBracketButtons = (stage, bracketDivUnique) => {
  const toHideDivs = stage.querySelectorAll("div");
  for (let i = 2; i < toHideDivs.length; i++) {
    toHideDivs[i].remove();
  }
  addActionButtons(stage, bracketDivUnique);
};

const applyStageNameAndPlayers = (
  stage,
  stageName,
  playerNames,
  existingBracket,
  uniqueID
) => {
  const targetNode = stage;
  const config = { childList: true, subtree: true };
  let observer;

  const callback = () => {
    // Set Stage Name
    stage.querySelector(`input`).value = stageName;
    stage.querySelector(`input`).disabled = true;

    // Set Player Names
    const playerNamesInput = stage.querySelector(`textarea`);
    if (playerNamesInput.value) return;
    playerNames.forEach(({ firstname, lastname }) => {
      playerNamesInput.value += `${firstname} ${lastname},`;
    });
    playerNamesInput.value = playerNamesInput.value.substr(
      0,
      playerNamesInput.value.length - 1
    );
    playerNamesInput.disabled = true;
    playerNamesInput.style.display = "none";

    const p = document.createElement("p");
    p.textContent = playerNamesInput.value;
    playerNamesInput.parentElement.insertBefore(p, playerNamesInput);

    if (existingBracket) displayBracketButtons(stage, uniqueID);

    // end
    observer.disconnect();
  };

  observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
};

fetch("/db.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.competition);
    const bracketsDiv = document.getElementById("brackets");
    if (!bracketsDiv) return;

    data.competition.forEach(({ key, values }) => {
      const newCompetition = document.createElement("div");
      newCompetition.className = "single_competition";
      bracketsDiv.appendChild(newCompetition);

      // Competition heading
      const heading = document.createElement("h2");
      heading.className = "single_compeition_heading";
      heading.textContent = key;
      newCompetition.appendChild(heading);

      // Bracket divs
      values.forEach(({ key: stageName, values: playerNames, uniqueID }) => {
        const bracketDivUnique = uniqueID;
        const newStage = document.createElement("div");
        newStage.className = "stage";
        newStage.id = bracketDivUnique;
        newCompetition.appendChild(newStage);

        // Check for existing bracket
        let existingBracket = false;
        const existingBrackets = localStorage.getItem(BRACKETS);
        if (existingBrackets) {
          const parsed = JSON.parse(existingBrackets);
          if (parsed && parsed[bracketDivUnique]) {
            existingBracket = true;
          }
        }

        applyStageNameAndPlayers(
          newStage,
          stageName,
          playerNames,
          existingBracket,
          bracketDivUnique
        );

        // Build stage
        const config = {
          parent_id: bracketDivUnique,
          html_name_id: "name" + bracketDivUnique,
          html_stage_type_selector_id: "selector" + bracketDivUnique,
          html_team_input_id: "teams" + bracketDivUnique,
          html_group_id: "groups" + bracketDivUnique,
          html_seed_order_id: "seeds" + bracketDivUnique,
          html_round_robin_mode_id: "round-robin-mode" + bracketDivUnique,
          html_consolation_final_checkbox_id:
            "consolation_final" + bracketDivUnique,
          html_skip_first_round_checkbox_id: "skip_first" + bracketDivUnique,
          html_grand_final_type_id: "grand_final" + bracketDivUnique,
          html_double_elimination_seed_textarea_id:
            "double_elimination_seeds" + bracketDivUnique,
          group_default_size: 1,
        };

        window.stageFormCreator(config, function (config2) {
          (async function () {
            await window.bracketsManager.create(config2).then(() => {
              displayBracketButtons(newStage, bracketDivUnique);

              const rawStoredBrackets = localStorage.getItem(BRACKETS);
              if (null === rawStoredBrackets || "" === rawStoredBrackets) {
                const temp = {};
                temp[bracketDivUnique] = window.inMemoryDatabase.data;
                localStorage.setItem(BRACKETS, JSON.stringify(temp));
              } else {
                let storedBrackets = JSON.parse(rawStoredBrackets);
                storedBrackets[bracketDivUnique] = window.inMemoryDatabase.data;
                localStorage.setItem(BRACKETS, JSON.stringify(storedBrackets));
              }
            });
          })();
        });
      });
    });
  });

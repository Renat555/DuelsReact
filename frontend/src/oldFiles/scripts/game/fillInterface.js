import { dictionaryElements, dictionaryForms } from "./dictionaries";
import { showHints } from "./showHints";
import * as sounds from "./sounds";
import { createSpell } from "./createSpells";
import { trajectoryCalculationOrMuveUser } from "./muving/trajectoryCalculationOrMuveUser";
import { endMuve } from "./endMuve";
import { showEffects } from "./showEffects";
import { sendSpell } from "./activationSpell";

function chooseForm(event) {
  let target = event.target;
  if (!target.dataset.form) return;

  clearForms();

  target.dataset.status = "selected";
  target.classList.add("selected");

  let divSpell = document.querySelector(".userSpell");
  divSpell.dataset.spellform = target.dataset.form;

  createSpell();
}

function chooseElement(event) {
  let target = event.target;
  if (!target.dataset.element) return;

  clearElements();

  target.dataset.status = "selected";
  target.classList.add("selected");

  let divSpell = document.querySelector(".userSpell");
  divSpell.dataset.spellelement = target.dataset.element;

  createSpell();
}

function clearForms() {
  let divForms = document.querySelectorAll("[data-form]");

  for (let item of divForms) {
    item.dataset.status = "notSelected";
    item.classList.remove("selected");
  }
}

function clearElements() {
  let divElements = document.querySelectorAll("[data-element]");

  for (let item of divElements) {
    item.dataset.status = "notSelected";
    item.classList.remove("selected");
  }
}

function fillEnemyName(enemy) {
  let enemyName = document.getElementById("enemyName");
  enemyName.innerHTML = enemy["name"];
}

function fillForms(forms) {
  let divForms = document.querySelectorAll("[data-form]");

  for (let i = 0; i < 5; i++) {
    divForms[i].innerHTML = dictionaryForms[forms[i]];
    divForms[i].setAttribute("data-form", forms[i]);
  }
}

function fillElements(elements) {
  let divElements = document.querySelectorAll("[data-element]");

  for (let i = 0; i < 3; i++) {
    divElements[i].innerHTML = dictionaryElements[elements[i]];
    divElements[i].setAttribute("data-element", elements[i]);
  }
}

function fillHealth(users) {
  let healthEnemy = document.getElementById("healthEnemy");
  let percentHealthEnemy = Math.round(
    (users["enemy"]["health"] * 100) / users["enemy"]["maxHealth"]
  );
  healthEnemy.style.width = percentHealthEnemy + "%";
  healthEnemy.style.marginLeft = 100 - percentHealthEnemy + "%";
  healthEnemy.innerHTML = users["enemy"]["health"];

  let healthUser = document.getElementById("health");
  let percentHealth = Math.round(
    (users["user"]["health"] * 100) / users["user"]["maxHealth"]
  );
  healthUser.style.width = percentHealth + "%";
  healthUser.style.marginLeft = 100 - percentHealth + "%";
  healthUser.innerHTML = users["user"]["health"];
}

function firstFillPoints(users) {
  let divActionPoints = document.getElementById("actionPoints");
  let divEnergyPoints = document.getElementById("energyPoints");
  let divEnemyActionPoints = document.getElementById("enemyActionPoints");
  let divEnemyEnergyPoints = document.getElementById("enemyEnergyPoints");

  divEnemyActionPoints.innerHTML = users["enemy"]["actionPoints"];
  divEnemyEnergyPoints.innerHTML = users["enemy"]["energyPoints"];
  divActionPoints.innerHTML = users["user"]["actionPoints"];
  divEnergyPoints.innerHTML = users["user"]["energyPoints"];
}

function fillBattlfield(userMuve) {
  let divUser = document.createElement("div");
  divUser.classList.add("hero");
  divUser.dataset.hero = "user";

  let divEnemy = document.createElement("div");
  divEnemy.classList.add("hero");
  divEnemy.dataset.hero = "enemy";

  if (userMuve === 1) {
    divUser.classList.add("AHeroBack1");
    divUser.dataset.picture = "a";
    divEnemy.classList.add("CHeroFront1");
    divEnemy.dataset.picture = "c";
  } else {
    divUser.classList.add("CHeroBack1");
    divUser.dataset.picture = "c";
    divEnemy.classList.add("AHeroFront1");
    divEnemy.dataset.picture = "a";
  }

  let divSquareUser = document.querySelector(`[data-row="0"][data-col="3"]`);
  divSquareUser.dataset.player = "user";
  let coordSquareUser = divSquareUser.getBoundingClientRect();

  divUser.style.height =
    coordSquareUser.height - coordSquareUser.height / 10 + "px";
  divUser.style.width =
    coordSquareUser.width - coordSquareUser.width / 10 + "px";
  divUser.style.left = coordSquareUser.left + coordSquareUser.width / 20 + "px";
  divUser.style.top =
    window.pageYOffset +
    coordSquareUser.top +
    coordSquareUser.height / 20 +
    "px";

  let divSquareEnemy = document.querySelector(`[data-row="6"][data-col="3"]`);
  divSquareEnemy.dataset.player = "enemy";
  let coordSquareEnemy = divSquareEnemy.getBoundingClientRect();
  divEnemy.style.height =
    coordSquareEnemy.height - coordSquareEnemy.height / 10 + "px";
  divEnemy.style.width =
    coordSquareEnemy.width - coordSquareEnemy.width / 10 + "px";
  divEnemy.style.left =
    coordSquareEnemy.left + coordSquareEnemy.width / 20 + "px";
  divEnemy.style.top =
    window.pageYOffset +
    coordSquareEnemy.top +
    coordSquareEnemy.height / 20 +
    "px";

  document.body.append(divUser);
  document.body.append(divEnemy);
}

function hideMuveText(muveUser) {
  let divUserMuve = document.getElementById("userMuve");
  let divEnemyMuve = document.getElementById("enemyMuve");
  if (muveUser === 1) {
    divUserMuve.hidden = false;
    divEnemyMuve.hidden = true;
  } else {
    divUserMuve.hidden = true;
    divEnemyMuve.hidden = false;
  }
}

function hideEffects() {
  let divEffects = document.getElementsByClassName("effects")[0];
  divEffects.hidden = true;
  document.removeEventListener("click", hideEffects);
}

function addEvents() {
  document.addEventListener("click", chooseForm);
  document.addEventListener("click", chooseElement);

  let buttonMuve = document.getElementById("buttonMuve");
  buttonMuve.addEventListener("click", sounds.buttonClick);
  buttonMuve.addEventListener("click", endMuve);

  let buttonShowEffects = document.getElementsByName("buttonShowEffects")[0];
  buttonShowEffects.addEventListener("click", showEffects);
  buttonShowEffects.addEventListener("click", sounds.buttonClick);

  let divBattleField = document.getElementsByClassName("battlefield")[0];
  divBattleField.addEventListener("click", trajectoryCalculationOrMuveUser);

  let buttonActivationSpell = document.getElementsByName(
    "buttonActiveSpell"
  )[0];
  buttonActivationSpell.addEventListener("click", sendSpell);
}

function hideWaitingScreen() {
  let divWaitingScreen = document.getElementsByClassName("backdrop")[0];
  divWaitingScreen.hidden = true;
}

function fillInterface(users) {
  hideEffects();
  fillEnemyName(users["enemy"]);
  fillForms(users["user"]["forms"]);
  fillElements(users["user"]["elements"]);
  firstFillPoints(users);
  fillHealth(users);
  fillBattlfield(users["user"]["muve"]);
  hideMuveText(users["user"]["muve"], users["enemy"]["muve"]);
  showHints();
  addEvents();

  hideWaitingScreen();
}

export { clearForms, clearElements, hideEffects, fillInterface };

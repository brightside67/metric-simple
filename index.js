const anMetric = function(yandex) {
  this.Yandex = yandex;

  this._normalizeGoal = goalName => {
    return goalName.toString().toLowerCase();
  };

  this._findElements = () => {
    const listArray = document.querySelectorAll("[data-goal]");

    if (listArray.length) {
      [].slice.call(listArray).forEach(item => {
        item.addEventListener("click", e => {
          const goalName = e.target.dataset["goal"];
          this.goal(this.Yandex, this._normalizeGoal(goalName));
        });
      });
    }
  };
};

anMetric.prototype.goal = (yandex, goalName) => {
  if (typeof goalName !== "string" && goalName.length < 1) {
    return console.error("goalName must be a string");
  }
  if (typeof yandex !== "object") {
    console.error("Please, check the yandex object in constructor");
  }
  yandex.reachGoal(goalName);
  console.log("Metric goal: ", goalName);
};
//TO-DO
anMetric.prototype.delayedGoal = (goalName = "", time = 0) => {
  if (typeof goalName !== "string" && goalName.length < 1) {
    return console.error("goalName must be a string");
  }
  if (typeof time !== "number") {
    return console.error("Time must be a number");
  }
  setTimeout(() => {
    this.goal(this.Yandex, this._normalizeGoal(goalName));
    console.log("Delayed goal:", goalName);
  }, time);
};

const Metric = function(yandex) {
  const Metric = new anMetric(yandex);
  return Metric;
};

let myMetric;

document.addEventListener("yacounter50854765inited", () => {
  myMetric = new Metric(window.yaCounter50854765);
  myMetric._findElements();
});

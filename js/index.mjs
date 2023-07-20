import setup from "./colaGenerator.mjs";
import bindEvent from "./vendingMachineEvents.mjs";

(async () => {
  await setup();
  bindEvent();
})();

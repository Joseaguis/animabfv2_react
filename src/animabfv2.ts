import { MySystemActor } from "./actors/base";
import { MySystemActorSheet } from "./templates/actor-sheet";

export class MySystem {
  static init() {
    console.log("MySystem | Initializing My RPG System");

    // Register document classes
    CONFIG.Actor.documentClass = MySystemActor;

    // Register sheet classes
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("my-system", MySystemActorSheet, {
      makeDefault: true,
    });
  }

}

// Initialize when ready
Hooks.once("init", () => MySystem.init());

import { MySystemActor } from "./core/domain/actor/base";
import { MySystemActorSheet } from "./templates/actor-sheet";
//import { MySystemActorSheet } from "./templates/actor-sheet-pf2e";

export class MySystem {
  static init() {
    console.log("MySystem | Initializing My RPG System");

    // Register document classes
    CONFIG.Actor.documentClass = MySystemActor;
    //Actor.documentName = MySystemActor;

    // Register sheet classes
    //Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("my-system", MySystemActorSheet, {
      types: ["character", "npc", "vehicle"],
      makeDefault: true,
      label: "Texto"
    });
  }

}

// animabfActorSheet

// Initialize when ready
Hooks.once("init", () => MySystem.init());

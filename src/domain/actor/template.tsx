import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ActorSheetReact } from "./sheet";

export class ActorSheetAnimaBF extends ActorSheet {
  get template() {
    return "systems/animabfv2/templates/actor-sheet.html";
  }
  async getData() {
    const data = await super.getData();
    return {
      ...data,
    };
  }
  activateListeners(html: JQuery) {
    super.activateListeners(html);
    this.mount(html);
  }

  mount(html: JQuery) {
    const sheetElement = html.find("#react-root")[0];
    if (sheetElement) {
      const root = createRoot(sheetElement);
      root.render(
        <StrictMode>
          <ActorSheetReact actor={this.actor} options={this.options} />
        </StrictMode>
      );
    }
  }

}
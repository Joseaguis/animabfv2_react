import React from "react";
import { createRoot } from "react-dom/client";

interface ActorSheetProps {
  actor: Actor;
  options: any;
}

export class MySystemActorSheet extends ActorSheet {
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

    // Mount React component
    const sheetElement = html.find(".react-root")[0];
    if (sheetElement) {
      const root = createRoot(sheetElement);
      root.render(
        <React.StrictMode>
          <ActorSheetReact actor={this.actor} options={this.options} />
        </React.StrictMode>
      );
    }
  }
}

const ActorSheetReact: React.FC<ActorSheetProps> = ({ actor }) => {
  const [editing, setEditing] = React.useState(false);

  return (
    <div className="my-system-actor-sheet">
      <header className="sheet-header">
        <h1>{actor.name}</h1>
        <button onClick={() => setEditing(!editing)}>
          {editing ? "Save" : "Edit"}
        </button>
      </header>

      <section className="sheet-body">
        {editing ? <ActorEditor actor={actor} /> : <ActorView actor={actor} />}
      </section>
    </div>
  );
};

const ActorView: React.FC<{ actor: Actor }> = () => {
  return (
    <div>
      <h2>HolaMundo</h2>
    </div>
  );
};

const ActorEditor: React.FC<{ actor: Actor }> = ({ actor }) => {
  const [formData] = React.useState(actor.system);

  const handleSubmit = async () => {
    await actor.update({ system: formData });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h2>Edit Attributes</h2>
      <button type="submit">Save Changes</button>
    </form>
  );
};

import { FC, useState } from "react";
interface ActorSheetProps {
  actor: Actor;
  options: any;
}

const ActorSheetReact: FC<ActorSheetProps> = ({ actor }) => {
  const [editing, setEditing] = useState(false);
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

const ActorView: FC<{ actor: Actor }> = () => {
  return (
    <div>
      <h2>HolaMundo Patata</h2>
    </div>
  );
};

const ActorEditor: FC<{ actor: Actor }> = ({ actor }) => {
  const [formData] = useState(actor.system);
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

export { ActorSheetReact };
import { h } from "preact";
import { useState } from "preact/hooks";
import Block from "../components/Block";

import "./style";

export default function App() {
  const [blocksList, setBlocksList] = useState<
    { blockType: string; text: string }[]
  >([]);

  const [blockInfo, setBlockInfo] = useState<{
    blockType: string;
    text: string;
  }>({ blockType: "start", text: "" });

  function addNewBlock(e: Event) {
    e.preventDefault();
    setBlocksList([
      ...blocksList,
      { blockType: blockInfo.blockType, text: blockInfo.text },
    ]);
  }

  function changeBlockType(e: Event) {
    const target = e.target as HTMLSelectElement;
    setBlockInfo({ ...blockInfo, blockType: target.value });
  }

  function changeBlockText(e: Event) {
    const target = e.target as HTMLInputElement;
    setBlockInfo({ ...blockInfo, text: target.value });
  }

  return (
    <main>
      <form className="form" onSubmit={addNewBlock}>
        <select onChange={changeBlockType}>
          <option value="start">start</option>
          <option value="end">end</option>
          <option value="math">math</option>
          <option value="input">input output</option>
          <option value="if">if</option>
        </select>
        <input onChange={changeBlockText} type="text" />
        <button>Додати</button>

      </form>
      {blocksList.map(({ blockType, text }) => (
        <Block type={blockType} text={text} />
      ))}
    </main>
  );
}

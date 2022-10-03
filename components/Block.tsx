export interface BlockProps {
  //   type: "start" | "end" | "input" | "output" | "math" | "if";
  type: string;
  text: string;
}
export default function Block({ type, text }: BlockProps) {
  switch (type) {
    case "end":
    case "start":
      return (
        <div className="block_wrapper">
          <div className="block block--rounded">
            <span>{type === "start" ? "Початок" : "Кінець"}</span>
          </div>
          {type === "start" ? <div className="line"></div> : ""}
        </div>
      );
    case "input":
    case "output":
      return (
        <div className="block_wrapper">
          <span className="skew_text">{text}</span>
          <div className="block block--skew">
            <span className="text--hidden">{text}</span>
          </div>
          <div className="line"></div>
        </div>
      );
    case "math":
      return (
        <div className="block_wrapper">
          <div className="block">
            <span>{text}</span>
          </div>
          <div className="line"></div>
        </div>
      );
    case "if":
      return <div>hzhzh</div>;
    default:
      break;
  }
}

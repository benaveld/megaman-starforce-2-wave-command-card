import "./WaveCommand.css";

// const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const alphabet = "abcdefghijklmnopqrst".split("");

export type WaveCommandProps = {
  value: string;
} & JSX.IntrinsicElements["div"];

export function WaveCommand({
  value,
  className = "",
  ...other
}: WaveCommandProps) {
  const normalizedValue = value.toLowerCase();

  return (
    <div className={"wave-command " + className} {...other}>
      {alphabet.map((char, index) => (
        <span key={index}>
          {normalizedValue.indexOf(char) >= 0
            ? normalizedValue.indexOf(char) + 1
            : ""}
        </span>
      ))}
    </div>
  );
}

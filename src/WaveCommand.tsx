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
      {alphabet.map((char, index) => {
        const stepIndex = normalizedValue.indexOf(char);
        const isStep = stepIndex >= 0;

        return (
          <span
            key={`${index}-${stepIndex}`}
            className={isStep ? "active" : "inactive"}
          >
            {isStep ? stepIndex + 1 : char.toUpperCase()}
          </span>
        );
      })}
    </div>
  );
}

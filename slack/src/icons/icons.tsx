import { CSSProperties, FC } from "react";

interface IconsProps {
  style?: CSSProperties;
  fill?: string;
  stroke?: string;
}
const OfflineIcon: FC<IconsProps> = ({ style, stroke }) => {
  return (
    <svg
      focusable="false"
      viewBox="0 0 12 12"
      height="12"
      width="12"
      style={{
        background: "#3f0e40",
        borderRadius: 10,
        padding: 1,
        ...style,
      }}
    >
      <circle
        cx="6"
        cy="6"
        r="3"
        stroke={stroke || "#fff9"}
        fill="transparent"
        strokeWidth="3"
      />
    </svg>
  );
};

const OnlineIcon: FC<IconsProps> = ({ style }) => {
  return (
    <svg
      focusable="false"
      viewBox="0 0 12 12"
      height="12"
      width="12"
      style={{
        background: "#3f0e40",
        borderRadius: 10,
        padding: 1,
        ...style,
      }}
    >
      <circle cx="6" cy="6" r="3" stroke="green" fill="green" strokeWidth="3" />
    </svg>
  );
};
export const Icons = {
  Offline: OfflineIcon,
  Online: OnlineIcon,
};

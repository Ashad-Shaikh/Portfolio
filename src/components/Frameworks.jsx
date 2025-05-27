import { OrbitingCircles } from "./OrbitingCircles";

export default function Frameworks() {
  const skills = [
    "tailwindcss",
    "vitejs",
    "html5",
    "react",
    "javascript",
    "css3",
    "github",
    "threejs",
    "visualstudiocode",
    "gsap",
    "framer-motion",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={`inner-${index}`} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => {
  return (
    <img
      src={src}
      alt=""
      className="rounded-sm hover:scale-110 duration-200 w-10 h-10 object-contain"
    />
  );
};

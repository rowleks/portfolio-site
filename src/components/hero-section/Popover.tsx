import { useState } from "react";
import { Popover } from "react-tiny-popover";

const TechStack = () => {
  // Array of tech details with progress values and theme colors
  const techStack = [
    { name: "HTML", src: "/html.svg", alt: "html-icon", progress: 90, color: "#e34c26" },
    { name: "CSS", src: "/css-logo.svg", alt: "css-icon", progress: 85, color: "#663399" },
    { name: "JavaScript", src: "/javascript.svg", alt: "js-icon", progress: 80, color: "#f7df1e" },
    { name: "TypeScript", src: "/typescript.svg", alt: "ts-logo", progress: 75, color: "#3178c6" },
    { name: "Git/Github", src: "/git.svg", alt: "git-logo", progress: 75, color: "#f05032" },
    { name: "React", src: "/react.svg", alt: "react-logo", progress: 85, color: "#61dafb" },
    { name: "Node.js", src: "/node-js.svg", alt: "node-logo", progress: 65, color: "#339933" },
    { name: "Tailwind CSS", src: "/tailwind.svg", alt: "tw-logo", progress: 65, color: "#38bdf8" },
    { name: "Sass", src: "/sass.svg", alt: "sass-logo", progress: 80, color: "#cc6699" },
  ];

  const [isPopoverOpen, setIsPopoverOpen] = useState<number | null>(null);

  return (
    <>
      {techStack.map((tech, index) => (
        <Popover
          key={index}
          isOpen={isPopoverOpen === index}
          positions={'top'} // Preferred positions for the popover
          align="center"
          padding={15}
          content={
            <div
              style={{
                position: "relative",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
                minWidth: "150px"
              }}
            >
              {/* Arrow for tooltip */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "0",
                  height: "0",
                  borderStyle: "solid",
                  borderWidth: "10px 10px 0 10px",
                  borderColor: `${tech.color} transparent transparent transparent`,
                }}
              />
              <p style={{ margin: "0 0 8px", fontWeight: "bold", fontSize: "14px" }}>{tech.name}</p>
              <progress
                value={tech.progress}
                max="100"
                style={{
                  width: "100%",
                  height: "10px",
                  appearance: "none",
                  backgroundColor: "#e0e0e0",
                }}
              />
              <style>
                {`
                  progress::-webkit-progress-bar {
                    background-color: #e0e0e0;
                    border-radius: 5px;
                  }
                  progress::-webkit-progress-value {
                    background-color: ${tech.color};
                    border-radius: 5px;
                  }
                `}
              </style>
            </div>
          }
          onClickOutside={() => setIsPopoverOpen(null)}
        >
          <img
            src={tech.src}
            alt={tech.alt}
            style={{ width: "64px", height: "64px", cursor: "pointer" }}
            onClick={() => setIsPopoverOpen(isPopoverOpen === index ? null : index)}
          />
        </Popover>
      ))}
    </>
  );
};

export default TechStack;

// Components/BlurText.jsx
import { useRef, useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";

const BlurText = ({
    text = "WELCOME TO!\nWEBSITE\nORMAWA EKSEKUTIF PKU IPB!",
    delay = 200,
    className = "",
    animateBy = "words", // 'words' or 'letters'
    direction = "top", // 'top' or 'bottom'
    threshold = 0.1,
    rootMargin = "0px",
    animationFrom,
    animationTo,
    onAnimationComplete,
}) => {
    // Split text into lines first
    const lines = text.split("\n");

    // Process each line according to animateBy
    const processedLines = lines.map((line) => {
        if (animateBy === "words") {
            return line.split(" ");
        } else {
            return line.split("");
        }
    });

    const [inView, setInView] = useState(false);
    const ref = useRef();
    const animatedCount = useRef(0);
    const totalElements = processedLines.flat().length;

    // Default animations based on direction
    const defaultFrom =
        direction === "top"
            ? {
                  filter: "blur(10px)",
                  opacity: 0,
                  transform: "translate3d(0,-50px,0)",
              }
            : {
                  filter: "blur(10px)",
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
              };

    const defaultTo = [
        {
            filter: "blur(5px)",
            opacity: 0.5,
            transform:
                direction === "top"
                    ? "translate3d(0,5px,0)"
                    : "translate3d(0,-5px,0)",
        },
        { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    // Create springs for all elements across all lines
    const allElements = processedLines.flat();
    const springs = useSprings(
        allElements.length,
        allElements.map((_, i) => ({
            from: animationFrom || defaultFrom,
            to: inView
                ? async (next) => {
                      for (const step of animationTo || defaultTo) {
                          await next(step);
                      }
                      animatedCount.current += 1;
                      if (
                          animatedCount.current === totalElements &&
                          onAnimationComplete
                      ) {
                          onAnimationComplete();
                      }
                  }
                : animationFrom || defaultFrom,
            delay: i * delay,
            config: { tension: 280, friction: 60 },
        }))
    );

    return (
        <div
            className="mx-auto mt-8"
            data-aos="fade-up"
            data-aos-data-aos-duration="800"
        >
            <div
                ref={ref}
                className={`blur-text ${className} flex flex-col items-center gap-2`}
            >
                {processedLines.map((line, lineIndex) => (
                    <p
                        key={lineIndex}
                        className="font-montserrat flex flex-wrap font-bold"
                    >
                        {line.map((element, elementIndex) => {
                            // Calculate the overall index for this element across all lines
                            const overallIndex =
                                processedLines.slice(0, lineIndex).flat()
                                    .length + elementIndex;

                            return (
                                <animated.span
                                    key={`${lineIndex}-${elementIndex}`}
                                    style={springs[overallIndex]}
                                    className="bg-gradient-to-r from-primary7 to-primary5 bg-clip-text text-transparent inline-block transition-transform will-change-transform"
                                >
                                    {element === " " ? "\u00A0" : element}
                                    {animateBy === "words" &&
                                        elementIndex < line.length - 1 &&
                                        "\u00A0"}
                                </animated.span>
                            );
                        })}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default BlurText;

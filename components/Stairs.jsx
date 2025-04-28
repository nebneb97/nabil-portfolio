import { animate, motion } from "framer-motion";

//variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//calculate the reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/*render 6 motion divs, each representing a steop of the stairs.
    
    each div will have the same animation defined by stairssAnimation object
    The delay for each div is calculated dynamically based on it's reversed index.
    Creating a staggered effect with decreasing delay for each subsequent steps.
    */}
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1, // Staggered delay
            }}
            className="h-full w-full bg-white relative"
          />
        ))}
    </>
  );
};

export default Stairs;

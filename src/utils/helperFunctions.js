const formatInstructions = (steps) => {
  let instructions = "";
  steps.forEach((step) => {
    instructions += step.step;
  });
  instructions = instructions
    .replace(/(\s{2,})/g, " ")
    .replace(/\.\s+/g, ".")
    .split(".");

  instructions.pop();
  return instructions;
};

module.exports = { formatInstructions };

const inputText = document.querySelector("#text");
const btn = document.querySelector("#convert-btn");

const camelCase = document.getElementById("camel-case");
const pascalCase = document.getElementById("pascal-case");
const snakeCase = document.getElementById("snake-case");
const screamingSnakeCase = document.getElementById("screaming-snake-case");
const kebabCase = document.getElementById("kebab-case");
const screamingKebabCase = document.getElementById("screaming-kebab-case");

const convertCase = (text) => {
  camelCase.textContent = toCamelCase(text);
  pascalCase.textContent = toPascalCase(text);
  snakeCase.textContent = toSnakeCase(text);
  screamingSnakeCase.textContent = toScreamingSnakeCase(text);
  kebabCase.textContent = toKebabCase(text);
  screamingKebabCase.textContent = toScreamingKebabCase(text);
};

// camel case function

const toCamelCase = (text) => {
  const stringArray = text.split(" ");
  const modifiedArray = stringArray.map((item, index) => {
    if (index > 0) {
      return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
    } else {
      return item;
    }
  });

  const finalString = modifiedArray.join(" ");
  console.log(finalString);
  return finalString;
};

// pascal case function

const toPascalCase = (text) => {
  const stringArray = text.split(" ");
  const modifiedArray = stringArray.map((item) => {
    return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
  });

  const finalString = modifiedArray.join(" ");
  console.log(finalString);
  return finalString;
};

// snake case function

const toSnakeCase = (text) => {
  const stringArray = text.split(" ");
  const finalString = stringArray.join("_");
  console.log(finalString);
  return finalString;
};

// screaming snake case function

const toScreamingSnakeCase = (text) => {
  const stringArray = text.split(" ");
  const modifiedArray = stringArray.map((item) => {
    return item.toUpperCase();
  });

  const finalString = modifiedArray.join("_");
  console.log(finalString);
  return finalString;
};

// kebab case function

const toKebabCase = (text) => {
  const stringArray = text.split(" ");
  const finalString = stringArray.join("-");
  console.log(finalString);
  return finalString;
};

// screaming kebab case function

const toScreamingKebabCase = (text) => {
  const stringArray = text.split(" ");
  const modifiedArray = stringArray.map((item) => {
    return item.toUpperCase();
  });

  const finalString = modifiedArray.join("-");
  console.log(finalString);
  return finalString;
};

// 

btn.addEventListener("click", (e) => {
  const text = inputText.value.trim().toLowerCase();
  convertCase(text);
});
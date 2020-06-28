function addProperty(property, value) {
  return value ? `${property}: ${value};` : null;
}

export default addProperty;

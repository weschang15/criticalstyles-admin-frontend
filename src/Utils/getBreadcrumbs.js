function getBreadcrumbs(path = "") {
  const parts = path.split("/").filter(el => Boolean(el));
  return parts.map((part, index) => {
    const to = "/" + parts.slice(0, index + 1).join("/");
    const page = part.includes("-")
      ? part
      : part.charAt(0).toUpperCase() + part.slice(1);

    return { to, page };
  });
}

export default getBreadcrumbs;

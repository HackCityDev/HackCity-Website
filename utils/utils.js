export const slugLink = (str) => {
  str = str.toLowerCase().trim();
  str = str.replace(/[^\w\s-]/g, "");
  str = str.replace(/[\s_-]+/g, "-");
  return str;
};
export const slugWord = (slug) => {
  const words = slug.replace(/-/g, " ").split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
};

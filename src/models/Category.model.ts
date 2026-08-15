export const Category = {
  Typing: "typing",
  ABC: "abc",
  Collections: "collections",
  CollectionsABC: "collections_abc",
  Pydantic: "pydantic",
  StandardLibrary: "standard_library",
  ThirdParty: "third_party",
} as const;

export type Category = (typeof Category)[keyof typeof Category];

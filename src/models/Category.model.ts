export const Category = {
  ABC: "abc",
  Collections: "collections",
  CollectionsABC: "collections_abc",
  Pydantic: "pydantic",
  StandardLibrary: "standard_library",
  ThirdParty: "third_party",
  Typing: "typing",
} as const;

export type Category = (typeof Category)[keyof typeof Category];

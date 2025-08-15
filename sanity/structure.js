import { defineType, defineField } from "sanity";

export const structure = (S) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems())

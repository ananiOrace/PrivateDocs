// Création du parser pour l'index de page
const createPageParser = () => {
  return {
    parse: (value: string | null): number => {
      if (!value) return 0;
      const parsed = parseInt(value, 10);
      return isNaN(parsed) || parsed < 0 ? 0 : parsed;
    },
    serialize: (value: number): string => {
      return value.toString();
    },
  };
};

// Création du parser pour la taille de page
const createPageSizeParser = () => {
  return {
    parse: (value: string | null): number => {
      if (!value) return 2;
      const parsed = parseInt(value, 2);
      return isNaN(parsed) || parsed < 1 ? 2 : parsed;
    },
    serialize: (value: number): string => {
      return value.toString();
    },
  };
};

// Configuration des parsers
export const paginationParsers = {
  pageIndex: {
    parseQueryParam: (value: string | null) => createPageParser().parse(value),
    serialize: (value: number) => createPageParser().serialize(value),
    withDefault: (defaultValue: number) => ({
      parseQueryParam: (value: string | null) => {
        const parsed = createPageParser().parse(value);
        return parsed === null ? defaultValue : parsed;
      },
      serialize: createPageParser().serialize,
    }),
  },
  pageSize: {
    parseQueryParam: (value: string | null) =>
      createPageSizeParser().parse(value),
    serialize: (value: number) => createPageSizeParser().serialize(value),
    withDefault: (defaultValue: number) => ({
      parseQueryParam: (value: string | null) => {
        const parsed = createPageSizeParser().parse(value);
        return parsed === null ? defaultValue : parsed;
      },
      serialize: createPageSizeParser().serialize,
    }),
  },
};

// Configuration des clés URL
export const paginationUrlKeys = {
  pageIndex: "page",
  pageSize: "perPage",
};

// Types pour la pagination
export interface PaginationState {
  pageIndex: number;
  pageSize: number;
}

// Fonctions utilitaires pour la pagination
export const calculatePagination = (
  totalItems: number,
  pageIndex: number,
  pageSize: number
) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = pageIndex * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);

  return {
    totalPages,
    startIndex,
    endIndex,
  };
};

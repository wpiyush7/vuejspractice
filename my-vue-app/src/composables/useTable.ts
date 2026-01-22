import { ref, computed, watch } from 'vue';

type SortDirection = 'asc' | 'desc';

export function useTable<T extends Record<string, any>>(
  items: () => T[],
  options?: {
    searchableFields?: (keyof T)[];
    itemsPerPage?: number;
  }
) {
  const searchQuery = ref('');
  const currentPage = ref(1);
  const itemsPerPage = ref(options?.itemsPerPage ?? 10);

  const sortColumn = ref<keyof T | null>(null);
  const sortDirection = ref<SortDirection>('asc');

  // 🔍 Filtering
  const filteredItems = computed(() => {
    if (!searchQuery.value || !options?.searchableFields?.length) {
      return items();
    }

    const query = searchQuery.value.toLowerCase();

    return items().filter((item) =>
      options.searchableFields!.some((field) =>
        String(item[field]).toLowerCase().includes(query)
      )
    );
  });

  // 🔃 Sorting
  const sortedItems = computed(() => {
    if (!sortColumn.value) return filteredItems.value;

    return [...filteredItems.value].sort((a, b) => {
      const aVal = a[sortColumn.value!];
      const bVal = b[sortColumn.value!];

      if (aVal < bVal) return sortDirection.value === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDirection.value === 'asc' ? 1 : -1;
      return 0;
    });
  });

  // 📄 Pagination
  const totalPages = computed(() =>
    Math.ceil(sortedItems.value.length / itemsPerPage.value)
  );

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return sortedItems.value.slice(start, start + itemsPerPage.value);
  });

  // ⚙️ Actions
  const handleSort = (column: keyof T) => {
    if (sortColumn.value === column) {
      sortDirection.value =
        sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.value = column;
      sortDirection.value = 'asc';
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };

  // Reset page when search or page size changes
  watch([searchQuery, itemsPerPage], () => {
    currentPage.value = 1;
  });

  return {
    // state
    searchQuery,
    currentPage,
    itemsPerPage,
    sortColumn,
    sortDirection,

    // computed
    totalPages,
    paginatedItems,

    // actions
    handleSort,
    goToPage,
  };
}

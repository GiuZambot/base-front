let searchTimer: NodeJS.Timeout | undefined;

export const handleSearch = ({
  event,
  setSearch,
  setPagination,
  setRefreshTable,
}: HandleSearch) => {
  const searchStr = event.currentTarget.value;
  clearInterval(searchTimer);
  searchTimer = setTimeout(() => {
    setSearch(searchStr);
    setPagination((prev: Pagination) => ({ ...prev, page: 1 }));
    setRefreshTable && setRefreshTable(true);
  }, 500);
};

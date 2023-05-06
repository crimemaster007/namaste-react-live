export function filterData(searchInput, restaurants) {

    const filteredData = restaurants.filter((restaraunt) => {
        return restaraunt?.data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
    });

    return filteredData;
}
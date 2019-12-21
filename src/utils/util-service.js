export const getYearsDifference = (pastDate) => {
    var diff = (new Date(pastDate).getTime() - new Date().getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff / 365.25));
}

export const sortByAscending = (list) => {
    const sortBy = "id";
    return list.sort(function (a, b) { return a[sortBy] - b[sortBy] });
}

export const sortByDescending = (list) => {
    const sortBy = "id";
    return list.sort(function (a, b) { return b[sortBy] - a[sortBy] });
}
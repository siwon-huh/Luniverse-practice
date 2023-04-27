export const getYYYYMMDD = (time: Date) => {
    const year = time.getUTCFullYear();
    const month = String(time.getUTCMonth() + 1).padStart(2, "0");
    const day = String(time.getUTCDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

export const getYYYYMMDDHH = (time: Date) => {
    const year = time.getUTCFullYear();
    const month = String(time.getUTCMonth() + 1).padStart(2, "0");
    const day = String(time.getUTCDate()).padStart(2, "0");
    const hour = String(time.getUTCHours()).padStart(2, "0");

    return `${year}-${month}-${day}-${hour}`;
};

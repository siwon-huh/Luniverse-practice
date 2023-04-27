export function isAddress(value: string | undefined) {
    let addrResult = value;

    if (!value) return false;
    if (typeof value !== "string") false;
    if (value.length !== 42) return false;
    if (value.match(/^(0x)?[0-9a-fA-F]{40}/)) {
        if (value.startsWith("0x")) {
            addrResult = "0x" + addrResult;
        }
    }

    if (typeof value !== "string" || !value.match(/^0x[0-9A-Fa-f]*$/)) {
        return false;
    }
    if (length && value.length !== 2 + 2 * length) {
        return false;
    }
    return true;
}

export function shortenAddress(address: string | undefined): string {
    if (!address) return "Invalid Address";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

import axios from "axios";

const rpcEndpoint = "https://ethereum-mainnet.luniverse.io/1679119769184786806";

// 1. get block number
axios
    .request({
        url: rpcEndpoint,
        method: "post",
        data: {
            jsonRPC: "2.0",
            method: "eth_blockNumber",
            params: [],
            id: 1,
        },
    })
    .then((res) => parseInt(res.data.result, 16))
    .then(console.log);

// 2. get balance by account address
axios
    .request({
        url: rpcEndpoint,
        method: "post",
        data: {
            jsonRPC: "2.0",
            method: "eth_getBalance", // TODO
            params: ["0x19af2991ed3382e2d17190871012657104ba0a7f", "latest"], // TODO
            id: 1,
        },
    })
    .then((res) => parseInt(res.data.result, 16))
    .then(console.log);

// 3. ERC20 token balance
const rpcEndpoint2 =
    "https://ethereum-mainnet.luniverse.io/1679119769184786806";
const address2 = "0x19af2991ed3382e2d17190871012657104ba0a7f";
const functionSignature = "0x7..."; // 4 bytes - balanceOf(address)
const calldata = functionSignature + address2.slice(2).padStart(64);
const contractAddress2 = "0x0";

axios
    .request({
        url: rpcEndpoint2,
        method: "post",
        data: {
            jsonRPC: "2.0",
            method: "eth_call",
            params: [{ to: contractAddress2, data: calldata }, "latest"],
            id: 1,
        },
    })
    .then((res) => res.data)
    .then((data) => parseInt(data.result))
    .then(console.log);

// 4. Multichain API
// 1) account balance
/* Initialization */
const protocol = "ethereum"; // e.g., luniverse, ethereum
const network = "mainnet"; // e.g., mainnet, goerli
const address = "0x19af2991ed3382e2d17190871012657104ba0a7f"; // e.g., 0xabc...
const url = `https://web3.luniverse.io/v1/${protocol}/${network}/accounts/${address}/balance`;
const authToken =
    "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJoYkg5RmlFMkZfcEFSY2RWeWxGaHNtVVY1blZfOEVGYXN4VlVyajVtRU9JIn0.eyJleHAiOjE2Nzk3MjYwNDgsImlhdCI6MTY3OTEyMTI0OCwianRpIjoiYzFkMWVkNDktNmI4My00NzM1LWFlNGItMzQyZWJmNzIxNTVjIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmx1bml2ZXJzZS5jb206MzEwMC9yZWFsbXMvbm92YSIsInN1YiI6IjlhMjIwZTU5LTU1OGEtNDA2ZC04ZDgwLWMzODM0YTU4MWRmNSIsInR5cCI6IkJlYXJlciIsImF6cCI6IjE2NzkxMTk3NjkxODQ3ODY4MDYiLCJzZXNzaW9uX3N0YXRlIjoiN2I0OTRhYTgtOGU2OS00ZTI0LWFlNGEtYmI5MzdhYjdiOTQ0IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLW5vdmEiXX0sInNjb3BlIjoicHJvZmlsZSIsInNpZCI6IjdiNDk0YWE4LThlNjktNGUyNC1hZTRhLWJiOTM3YWI3Yjk0NCIsInByZWZlcnJlZF91c2VybmFtZSI6IjE2NzkxMTk3NjkxODQ3ODY4MDY6dzdxYnRmdndrYmR4dWRsYXo1c2J1Y2dla2dkcnJ4a2J6ZHJ0ZXljM2JhaXN3cnl5NmUyZndxdmhyYjRtY3ZmayIsImdyYW50Ijp7InByb3RvY29scyI6IjIiLCJhY2NvdW50cyI6IjIiLCJibG9ja3MiOiIyIiwidHJhbnNhY3Rpb25zIjoiMiIsImFzc2V0cyI6IjIiLCJldmVudHMiOiIyIiwic3RhdHMiOiIyIiwid2ViaG9va3MiOiIyIn19.lnNOq4zjMo_8hGzl9X6rqUpJAQQ_dVKdou65pOQ4SEIRFH2KsPl-a1bWLbit1JWuYOVzOpe6gPrjqnSfWra4ZfeNN4dl0o3ru-DklppA8144WswP688k-MB4pxTERFhkCsR41krMaREehPxQqSYd_eFkIAho7BNRcJ9h9j5Yd_AaTyBcMgjurXvRFljO0YRJv3uuhfs9r4pxn8hhd9IyZiLTpuXckEYvnTKHNWkaQLiZegLdiT9CAIxZmVr6ZIcGghTHURAnlQNaivm3L49idLHcMIGSekuRPJK8wHBFLDhLadeZXOQU-Vfr2xyB2Ew54YLamdrBOUkwyS79W7XF4Q";
const assetType = "ft";
const contractAddress = "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0";

/* Implementation */
const config = {
    url,
    headers: {
        Authorization: `Bearer ${authToken}`,
    },
    method: "get",
    params: {
        type: assetType,
        contract: contractAddress,
    },
};

axios(config)
    .then((res) => res.data)
    .then(console.log);

// 5. statistics
/* Initialization */
// const protocol = "<-- protocol name -->"; // e.g., luniverse, ethereum
// const network = "<-- network name -->"; // e.g., mainnet, goerli
// const contractAddress = "<-- contract address -->"; // e.g., 0xabc...
// const url = `https://web3.luniverse.io/v1/${protocol}/${network}/stats/daily/contract/${contractAddress}/accounts`;
// const authToken = "<-- authentication token -->";
const startDate = "<-- yyyy-mm-dd (UTC) -->";
const endDate = "<-- yyyy-mm-dd (UTC) -->";

/* Implementation */
const config2 = {
    url,
    headers: {
        Authorization: `Bearer ${authToken}`,
    },
    method: "get",
    params: {
        startDate,
        endDate,
    },
};

// axios(config2)
//     .then((res) => res.data.data)
//     .then(console.log);

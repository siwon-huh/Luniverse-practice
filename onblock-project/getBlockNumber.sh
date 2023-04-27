curl -L 'https://ethereum-mainnet.luniverse.io/1679119769184786806' \
-X POST \
-H 'Content-Type: application/json' \
-d '{
       "jsonrpc":"2.0",
       "method":"eth_blockNumber",
       "params":[],
       "id":0
}'
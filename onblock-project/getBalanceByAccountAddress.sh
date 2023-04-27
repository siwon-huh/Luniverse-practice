curl -L 'https://ethereum-mainnet.luniverse.io/1679119769184786806' \
-X POST \
-H 'Content-Type: application/json' \
-d '{
       "jsonrpc":"2.0",
       "method":"eth_getBalance",
       "params":["0x19af2991ed3382e2d17190871012657104ba0a7f", "latest"],
       "id":1
}'
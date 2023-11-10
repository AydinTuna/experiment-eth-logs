import "dotenv/config";
import { ethers, hashMessage } from "ethers";

const url = `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;
const provider = new ethers.JsonRpcProvider(url);

// getBlockNumber
const getCurrentBlockNumber = async () => {
  const currentBlockNumber = await provider.getBlockNumber();
  return currentBlockNumber;
};

// getLogs
const getLogs = async () => {
  console.log(`Getting the Smart Contract events...`);

  const rawLogs = await provider.getLogs({
    address: "0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907",
    topics: [
      "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      "0x00000000000000000000000000b46c2526e227482e2ebb8f4c69e4674d262e75",
      "0x00000000000000000000000054a2d42a40f51259dedd1978f6c118a0f0eff078",
    ], // [Keccak256(Transfer(address,address,uint256)), fromAddr]
    fromBlock: "0x429d3b",
    toBlock: "0x429d3b",
  });

  console.log(rawLogs);
};

getLogs();

// CURL Req
// curl https://mainnet.infura.io/v3/99223c94a395420aa5e9d78899057b7c \
//   -X POST \
//   -H "Content-Type: application/json" \
//   -d '{"jsonrpc":"2.0","method":"eth_getLogs","params":[{"address": "0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907","fromBlock": "0x429d3b", "toBlock": "0x429d3b" , "topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", "0x00000000000000000000000000b46c2526e227482e2ebb8f4c69e4674d262e75", "0x00000000000000000000000054a2d42a40f51259dedd1978f6c118a0f0eff078"]}],"id":1}'

const curlRes = {
  jsonrpc: "2.0",
  id: 1,
  result: [
    {
      address: "0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907",
      blockHash:
        "0x8243343df08b9751f5ca0c5f8c9c0460d8a9b6351066fae0acbd4d3e776de8bb",
      blockNumber: "0x429d3b",
      data: "0x000000000000000000000000000000000000000000000000000000012a05f200",
      logIndex: "0x56",
      removed: false,
      topics: [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x00000000000000000000000000b46c2526e227482e2ebb8f4c69e4674d262e75",
        "0x00000000000000000000000054a2d42a40f51259dedd1978f6c118a0f0eff078",
      ],
      transactionHash:
        "0xab059a62e22e230fe0f56d8555340a29b2e9532360368f810595453f6fdd213b",
      transactionIndex: "0xac",
    },
  ],
};

import 'dotenv/config'
import { ethers } from "ethers";

console.log(process.env.INFURA_API_KEY);

const url = `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;
const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
customHttpProvider.getBlockNumber().then((result) => {
  console.log("Current block number: " + result);
});
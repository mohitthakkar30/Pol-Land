import { createClient } from "wagmi";
import { getDefaultClient } from "connectkit";


const mumbai = {
  id: 80001,
  name: "Mumbai",
  network: "mumbai",
  nativeCurrency: {
    decimals: 18,
    name: "Mumbai",
    symbol: "MATIC",
  },
  rpcUrls: {
    default: { http: ["https://rpc-mumbai.maticvigil.com/"] },
  },
  testnet: true,
};

export const client = createClient(
  getDefaultClient({
    autoConnect: true,
    appName: "Pol-Land",
    chains: [mumbai],
  })
);

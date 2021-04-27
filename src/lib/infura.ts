import { ethers } from 'ethers';
import { DEFAULT_NETWORK_ID } from 'src/constants/defaults';

export const provider = new ethers.providers.InfuraProvider(
	DEFAULT_NETWORK_ID,
	process.env.NEXT_PUBLIC_INFURA_PROJECT_ID
);

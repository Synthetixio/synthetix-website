export type StakedSNXResponse = {
	systemStakingPercent: number;
	timestamp: number;
	stakedSnx: {
		ethereum: number;
		optimism: number;
	};
};

export type VolumeData = {
	cumulative_fees: number;
	cumulative_volume: number;
	days30_fee: number;
	days30_total_fee: number;
	days30_vol: number;
	days7_fee: number;
	days7_total_fee: number;
	days7_vol: number;
	time: string;
	total_fees: number;
	total_volume: number;
};

export type VolumeResponse = {
	result: {
		rows: VolumeData[];
	};
};

export type ActiveStakersData = {
	All_stakers: number;
	L1_stakers: number;
	L2_stakers: number;
	time: string;
};

export type ActiveStakerResponse = {
	result: {
		rows: ActiveStakersData[];
	};
};

export type IntegratorsVolumeData = {
	daily_fee: number;
	day: string;
	integrator_cum_fee: number;
	tracking_code: string;
};

export type IntegratorsVolumeResponse = {
	result: {
		rows: IntegratorsVolumeData[];
	};
};

export type OpenInterestData = {
	_col2: string;
	day: string;
	size: number;
	size_usd: number;
};

export type OpenInterestResponse = {
	result: {
		rows: OpenInterestData[];
	};
};

export type TradingFeesData = {
	_30_day_L1: number;
	_30_day_L2: number;
	_30_day_combined: number;
	_30_day_cumulative: number;
	_7_day_L1: number;
	_7_day_L2: number;
	_7_day_combined: number;
	_7_day_cumulative: number;
	combined: number;
	day: string;
	l1fee: number;
	l2fee: number;
};

export type TradingFeesResponse = {
	result: {
		rows: TradingFeesData[];
	};
};

export type SwapsData = {
	dest: string;
	dest_amount: number;
	dest_avg: number;
	median_dest: number;
	median_source: number;
	ninenine_dest: number;
	ninenine_source: number;
	one_percentile_dest: number;
	one_percentile_source: number;
	source: string;
	source_amount: number;
	source_avg: number;
	swaps: number;
};

export type SwapsResponse = {
	result: {
		rows: SwapsData[];
	};
};

export type GraphqlResponse = {
	data: {
		futuresMarkets: {
			id: string;
			isActive: boolean;
			marketKey: string;
		}[];
		dailyStats: {
			cumulativeTraders: number;
		}[];
	};
};

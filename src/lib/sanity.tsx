import { createClient, createPreviewSubscriptionHook } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

const config: any = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	useCdn: process.env.NODE_ENV === 'production',
	apiVersion: '2021-08-31',
};

export const imageBuilder = (source: any) => createImageUrlBuilder(config).image(source);
export const usePreviewSubscription: any = createPreviewSubscriptionHook(config);
export const client = createClient(config);
export const previewClient = createClient({
	...config,
	useCdn: false,
});

export const getClient = (usePreview: any) => (usePreview ? previewClient : client);
export default client;

import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { MarketingContent } from '../backend';

export function useMarketingContent() {
    const { actor, isFetching } = useActor();

    return useQuery<MarketingContent>({
        queryKey: ['marketingContent'],
        queryFn: async () => {
            if (!actor) {
                return {
                    appName: 'Param Shopping',
                    tagline: 'Your ultimate shopping destination',
                    features: [],
                    ctaText: 'Get Started',
                };
            }
            return actor.getMarketingContent();
        },
        enabled: !!actor && !isFetching,
        staleTime: 1000 * 60 * 5,
    });
}

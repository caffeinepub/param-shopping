import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MarketingContent {
    features: Array<string>;
    tagline: string;
    appName: string;
    ctaText: string;
}
export interface backendInterface {
    getMarketingContent(): Promise<MarketingContent>;
}

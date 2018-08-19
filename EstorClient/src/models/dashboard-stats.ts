import { IconDefinition } from "@commontimeltd/infinity-framework";

export interface DashboardStats {

    icon: IconDefinition;
    title: string;
    stats: SimpleStats[];
}

export interface SimpleStats {

    alert?: boolean;
    label: string;
    timeframe?: string;
    value: string | ValueWithHighlight;
}

export interface ValueWithHighlight {

    text: string;
    highlight: string;
}

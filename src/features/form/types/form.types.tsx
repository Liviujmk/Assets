
interface Form {
    id: number;
    version: number;
    entityType: string;
    operatorIDs: number[];
    startTime: string | any;
    endTime: string | any;
    count: number;
    enabled: boolean;
    type: string;
    total: Total;
    distance: Distance;
}

interface Total {
    value: number;
    unit: string;
}

interface Distance {
    value: number;
    unit: string;
}


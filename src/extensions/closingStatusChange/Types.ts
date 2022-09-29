export interface IListItem {
    Id: number;
    Name: string;
    LinkToItem: string;
    PeriodId: number;
    PeriodText: string;
    DocStatusId: number;
    DocStatusText: string;
    Comment: string;
    PermissionSetInProgress: number;
}

export interface IDocStatus {
    Id: number;
    Title: string;
    FollowingStatusesId: number[];
}

export  interface IUpdateListFields {
    Comment1: string;
    DocStatusId: number;
    DocStatusText: string;
    PermissionSetInProgress: number;
}

export interface IUpdateTecnicalFields {
    Title: string;
    FileName: string;
    LinkToItem: string;
    ItemID: number;
    DocumentStatusID: number;
    PeriodID: number;
}
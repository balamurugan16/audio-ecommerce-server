
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class SearchHistoryCreateInput {
    searchTerm: string;
    userId: number;
}

export class UserCreateInput {
    email: string;
    name: string;
}

export class User {
    id: number;
    email: string;
    name: string;
    searchHistory: SearchHistory[];
}

export class SearchHistory {
    id: number;
    searchTerm: string;
    createdAt: string;
    user: User;
}

export abstract class IQuery {
    getUsers?: Nullable<User[]>;
    getUser?: Nullable<User>;
    getSearchHistory?: SearchHistory[];
}

export abstract class IMutation {
    createUser?: User;
    logSearchHistory?: SearchHistory;
}

type Nullable<T> = T | null;

export enum CreditStatus {
    IN_REVIEW = 'IN_REVIEW',
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED'
}

export enum PropertyType {
    APARTMENT = 'APARTMENT',
    HOUSE = 'HOUSE',
    COMMERCIAL = 'COMMERCIAL'
}

export enum RepaymentType {
    MONTHLY = 'MONTHLY',
    EARLY = 'EARLY'
}

export interface Credit {
    id: string;
    requestDate: Date;
    status: CreditStatus;
    acceptanceDate?: Date;
    amount: number;
    duration: number;
    interestRate: number;
    customerId: number;
}

export interface PersonalCredit extends Credit {
    purpose: string;
}

export interface MortgageCredit extends Credit {
    propertyType: PropertyType;
}

export interface BusinessCredit extends Credit {
    purpose: string;
    companyName: string;
}

export interface Repayment {
    id: number;
    date: Date;
    amount: number;
    type: RepaymentType;
    creditId: string;
} 
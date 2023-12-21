export class Compte {
    constructor(public id?: number, public type_joueur?: string, public email?: string, public login?: string, public password?: string ) {

    }
}

export class Creature {
    constructor(public id?: number, public nom?: string, public description?: string, public dieu?: boolean, public attaque?: number, public pv?: number,  public image?: string, public mythologie?: string, public typeElement?: string ) {

    }
}
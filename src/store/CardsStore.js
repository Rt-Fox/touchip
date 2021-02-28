import {makeAutoObservable} from "mobx";

export default class CardsStore {
    constructor() {
        this._cards = []
        makeAutoObservable(this)
    }

    setCards(cards) {
        this._cards = cards
    }

    get cards() {
        return this._cards
    }

}
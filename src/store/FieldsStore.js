import {makeAutoObservable} from "mobx";

export default class FieldsStore {
    constructor() {
        this._fields = []
        makeAutoObservable(this)
    }

    setFields(fields) {
        this._fields = fields
    }

    get fields() {
        return this._fields
    }

}
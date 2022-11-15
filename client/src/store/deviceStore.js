import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Neveras" },
      { id: 2, name: "Moviles" },
      { id: 3, name: "TV" },
      { id: 4, name: "Lavadoras" },
    ];
    this._brands = [
      { id: 1, name: "Apple" },
      { id: 2, name: "Samsung" },
    ];
    this._devices = [
      {
        id: 1,
        name: "iPhone 12",
        price: 1200,
        rating: 5,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97309508/fee_194_131_png",
      },
      {
        id: 2,
        name: "iPhone 13",
        price: 1100,
        rating: 5,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97309508/fee_194_131_png",
      },
      {
        id: 3,
        name: "Samsung S21",
        price: 900,
        rating: 4,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97309508/fee_194_131_png",
      },
      {
        id: 4,
        name: "Samsung S20",
        price: 500,
        rating: 3,
        img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97309508/fee_194_131_png",
      }
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrand(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get types() {
    return this._types;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
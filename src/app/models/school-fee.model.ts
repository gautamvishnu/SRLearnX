export interface School {
  billerId: string;
  billerName: string;
  categoryKey: string;
  type: string;
  categoryName: string;
  coverageCity: string;
  coverageState: string;
  coveragePincode: number;
  updatedDate: string;
  billerStatus: string;
  isAvailable: boolean;
  iconUrl: string;
}


  export interface BillerResponse {
    statuscode: string
    status: string
    data: Data
    timestamp: string
    ipayUuid: string
    environment: string
  }


  export interface Data {
    billerId: string
    mode: string
    acceptsAdhoc: string
    paymentAmountExactness: string
    fetchRequirement: string
    supportValidation: string
    billerInfo: BillerInfo
    category: Category
    registeredAddress: RegisteredAddress
    communicationAddress: CommunicationAddress
    coverage: Coverage
    initChannels: InitChannel[]
    paymentModes: PaymentMode[]
    parameters: Parameter[]
    timeout: number
  }

   export interface BillerInfo {
    type: string
    name: string
    description: string
    ownership: string
    effectFrom: number
    effectTo: number
  }
  
  export interface Category {
    key: string
    name: string
  }
  
  export interface RegisteredAddress {
    address: string
    city: number
    state: number
    pincode: number
    country: string
  }
  
  export interface CommunicationAddress {
    address: string
    country: string
  }
  
  export interface Coverage {
    address: string
    countryId: string
    countryCode: string
    country: string
    stateCode: string
    state: string
    city: string
    pincode: number
  }
  
  export interface InitChannel {
    name: string
    desc: string
    commercialType: string
    deviceInfo: DeviceInfo[]
  }
  
  export interface DeviceInfo {
    name: string
    desc: string
    minLength: number
    maxLength: number
    inputType: string
    regex: string
  }
  
  export interface PaymentMode {
    name: string
    desc: string
    paymentInfo: PaymentInfo[]
  }
  
  export interface PaymentInfo {
    name: string
    desc: string
    minLength: number
    maxLength: number
    inputType: string
    regex: string
  }
  
  export interface Parameter {
    name: string
    desc: string
    minLength: number
    maxLength: number
    inputType: string
    mandatory: number
    regex: string
  }
  
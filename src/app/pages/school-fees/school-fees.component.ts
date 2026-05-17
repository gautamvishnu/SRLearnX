import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RazorpayService } from "../../services/razorpay.service";
import { InstantPayService } from "../../services/instant-pay.service";
import { EaseBuzzPaymentService } from "../../services/ease-buzz-payment.service";
import { BillerResponse, School } from "../../models/school-fee.model";
// import { NgSelectModule } from "@ng-select/ng-select";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import schoolJsonData from "../../../assets/school.json";
import { map, switchMap } from "rxjs";
import { AutoPayServiceService } from "../../services/auto-pay-service.service";
import {
  AutoPayRequest,
  AutoPayResponse,
  AutoPayResponseData,
} from "../../models/comman.model";
import { E } from "@angular/cdk/keycodes";

@Component({
  selector: "app-school-fees",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: "./school-fees.component.html",
  styleUrls: ["./school-fees.component.css"],
})
export class SchoolFeesComponent implements OnInit {
  // studentUniqueID: string = "";
  // schoolName: string = "";
  // dateOfBirth: string = "";
  paymenAmount: number = 0;
  showPaymentOptions: boolean = false;

  fetchForm!: FormGroup;
  fastagePayment!: FormGroup;
  schools: School[] = [];
  selectedSchool: School | null = null;
  // vehicleDetails: FASTagDetail | null = null;
  billerDetails: BillerResponse | null = null;
  isLoading = false;
  isPaymentLoading = false;

  @Output() schoolSelected = new EventEmitter<School>();
  http: any;
  outletResponse: any;

  constructor(
    private readonly fb: FormBuilder,
    private readonly easeBuzzPaymentService: EaseBuzzPaymentService,
    private instantPayService: InstantPayService,
    private razorpayService: RazorpayService,
    private autoPayService: AutoPayServiceService
  ) {}
  ngOnInit() {
    this.initForm();
    this.loadSchools();
  }

  private initForm(): void {
    this.fetchForm = this.fb.group({
      school: [null, Validators.required],
      studentUniqueID: ["", Validators.required],
      dateOfBirth: ["", Validators.required],
      parentMobile: ["", Validators.required],
      //  amount: [{ value: "", disabled: true }], // 🔒 Initially disabled
    });
  }

  private loadSchools(): void {
    this.instantPayService
      .getBillerList()
      .pipe(
        switchMap((billerRes: any) => {
          const billerList = billerRes?.data ?? [];
          return this.instantPayService.getSchoolList().pipe(
            map((schoolRes: any) => {
              const schoolList = schoolRes ?? [];
              return [...billerList, ...schoolList];
            })
          );
        })
      )
      .subscribe({
        next: (combinedList) => {
          this.schools = combinedList;
        },
        error: (err) => {
          console.error("Failed to load data", err);
        },
      });
  }

  get school() {
    return this.fetchForm.get("school");
  }
  get studentUniqueID() {
    return this.fetchForm.get("studentUniqueID");
  }
  get amount() {
    return this.fetchForm.get("amount");
  }
  get dateOfBirth() {
    return this.fetchForm.get("dateOfBirth");
  }

  get parentMobile() {
    return this.fetchForm.get("parentMobile");
  }

  // Utility function to pause execution
  delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  // Method to verify student details
  async verifyStudent() {
    this.isLoading = true;
    console.log("Waiting...");
    await this.delay(5_000); // Simulate a 10-second delay
    // Simulate a delay of 10 seconds
    this.isLoading = false;
    console.log(this.fetchForm.value);
    // const { school, studentUniqueID, dateOfBirth, parentMobile } =
    //   this.fetchForm.value;
    const jsonString = JSON.stringify(this.fetchForm.value);
    const dataVal = this.schoolData.find(
      (item) =>
        item.schoolName == this.fetchForm.value.school.billerName &&
        item.student.studentUniqueID == this.fetchForm.value.studentUniqueID &&
        // && item.student.dateOfBirth == this.fetchForm.value.dateOfBirth
        item.student.parentMobile == this.fetchForm.value.parentMobile
    );
    if (!dataVal) {
      alert("Invalid student details. Please try again.");
      return;
    }
    console.log("Data found:", dataVal);

    // console.log("JSON:", jsonString);

    // Example: save to local storage
    localStorage.setItem("myFormData", jsonString);
    this.showPaymentOptions = true;
    // this.fetchForm.patchValue({ amount: 25000 });
    this.paymenAmount = this.generateRandomAmount();
  }

  // Method to process payment
  processPayment(amount: number = 100): void {
    this.isPaymentLoading = true;

    const payload = {
      billerId: "SBIC00000NATDN",
      initChannel: "AGT",
      externalRef: "DMCPAY1748284483",
      inputParameters: {
        param1: "2545",
        param2: "7228800953",
      },
      deviceInfo: {
        ip: "192.168.1.10",
        mac: "00:1A:2B:3C:4D:5E",
      },
      remarks: {
        param1: 7228800953,
      },
      transactionAmount: amount,
    };

    this.instantPayService.fetchBillDetails(payload).subscribe({
      next: (res: any) => {
        this.isPaymentLoading = false;

        if (res?.data?.statuscode !== "TXN") {
          console.error("Error fetching bill details");
          alert("Error fetching bill details");
        } else {
          // this.vehicleDetails = res?.data;
          sessionStorage.setItem("vehicleDetails", res?.data);
          // const fetchedAmount = this.vehicleDetails?.data?.billAmount ?? 200;
          //this.onSubmit(amount);
        }
      },
      error: (err) => {
        console.error("Error fetching bill details", err);
        // this.vehicleDetails = null;
        this.isPaymentLoading = false;
      },
    });
  }

  onSubmitInstantPay(paymenAmount: number = 100): void {
    this.isPaymentLoading = true;

    const payload = {
      amount: paymenAmount,
      firstName: "Vishnu",
      mobile: "9654584747",
      email: "techy.vishnu007@gmail.com",
      txnId: "",
      sUrl: "http://localhost/Success.aspx",
    };
    console.log("✅ Payment payload:", payload);
    //
    this.instantPayService.easeBuzzInitiatePaymentGateway(payload).subscribe({
      next: (res: any) => {
        // Extract the token from the URL
        this.isPaymentLoading = false;

        const url = res.data.data;
        const token = url.split("/").pop();
        this.easeBuzzPaymentService.initiateEaseBuzzPayment(
          token,
          this.paymentCallback,
          this
        );
      },
      error: (err) => {
        console.error("Error fetching bill details", err);
        this.isPaymentLoading = false;

        // this.isLoading = false;
      },
    });
    // alert('💳 Payment feature coming soon.');
  }

  // Generate a random amount for demo purposes
  // private generateRandomAmount(): number {
  //   // Generate a random amount between 5000 and 25000
  //   return Math.floor(Math.random() * 30000) + 10000;
  // }
  private generateRandomAmount(): number {
    const min = 30000;
    const max = 40000;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  paymentCallback(response: any, component: this) {
    console.log("Payment Response:", response);

    if (response.status === "success") {
      // Handle successful payment
      console.log("Payment successful:", response.easepayid);
      console.log("Payment successful:", response.bank_ref_num);

      // In payment callback component
      component.paymentSettal(response, component);
      alert();
    } else if (response.status === "userCancelled") {
      console.warn("Payment cancelled by user");
      alert("Payment cancelled by user");
    } else {
      console.error("Payment failed:", response);
      alert("Payment failed");
    }
  }

  paymentSettal(value: any, component: this) {
    try {
      console.log("value : ", value);

      const payload = {
        billerId: "bank.billerId",
        externalRef: "",
        enquiryReferenceId: "DMCPAY1748284483",
        inputParameters: { param1: "2545", param2: "7228800953" },
        initChannel: "AGT",
        deviceInfo: {
          terminalId: "12813923",
          mobile: "9654584747",
          postalCode: "110044",
          geoCode: "28.6326,77.2175",
        },
        paymentMode: "UPI",
        paymentInfo: { Remarks: "VPA", VPA: "DIGISEVA@paytm" },
        remarks: {
          param1: "9990662544",
        },
        transactionAmount: this.paymenAmount,
        customerPan: "Demo School",
      };

      console.log("payload : ", payload);

      this.instantPayService.InstantPayBillPay(payload).subscribe({
        next: (res: any) => {
          // Extract the token from the URL
          console.log("InstantPayBillPay", res);
          alert(
            "Bill Payment Success. Easepay Id" +
              value.easepayid +
              "Bank Ref No. : " +
              value.bank_ref_num
          );
        },
        error: (err) => {
          console.error("Error fetching bill details", err);
          // this.isLoading = false;
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  autoPePaymentProcess(paymenAmount: number = 100): void {
    {
      console.log("Auto Pay Fees");
      this.isPaymentLoading = true;

      const { school, studentUniqueID, dateOfBirth, parentMobile } =
        this.fetchForm.value;
      const payload: AutoPayRequest = {
        amount: paymenAmount,
        name: "Vishnu Gautam",
        mobile: parentMobile,
        email: "techy.vishnu007@gmail.com",
        redirectUri: "https://srlearnx.co.in/school-fees",
      };
      this.autoPayService.initiateAutoPayPayment(payload).subscribe({
        next: (response: AutoPayResponseData) => {
          console.log("Auto Pay Response:", response);

          if (response?.status === true) {
            const autoPayResponse = response.data as AutoPayResponse;
            window.location.href = autoPayResponse.checkoutUrl;
          } else {
            alert("Failed to initiate auto pay");
          }
          this.isPaymentLoading = false;
        },
        error: (err) => {
          console.error("Error initiating auto pay", err);
          this.isPaymentLoading = false;
        },
      });
    }
  }

  schoolData = [
    {
      schoolName: "A A M Childrens Academy",
      address: "-",
      pincode: 854105,
      student: {
        studentUniqueID: "739184620157",
        parentMobile: "9654584747",
        dateOfBirth: "2017-01-12",
      },
    },
    {
      schoolName: "The Mother'S International School",
      address: "-",
      pincode: 110016,
      student: {
        studentUniqueID: "184720395618",
        parentMobile: "8868429625",
        dateOfBirth: "2011-06-26",
      },
    },
    {
      schoolName: "St Columbas School",
      address: "-",
      pincode: 110001,
      student: {
        studentUniqueID: "620493871502",
        parentMobile: "7042144133",
        dateOfBirth: "2015-08-15",
      },
    },
    {
      schoolName: "Sardar Patel Vidyalaya",
      address: "-",
      pincode: 110003,
      student: {
        studentUniqueID: "957301284610",
        parentMobile: "8130815097",
        dateOfBirth: "2013-11-05",
      },
    },
  ];
}

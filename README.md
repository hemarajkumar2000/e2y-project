Reactive form

import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';



addressForm: FormGroup;
  
this.addressForm = new FormGroup(
      {
        id: new FormControl(''),
        titleCode: new FormControl('', Validators.required),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        companyName: new FormControl(''),
        apartment: new FormControl(''),
        houseName: new FormControl(''),
        line2: new FormControl(''),
        line1: new FormControl('', Validators.required),
        district: new FormControl(''),
        town: new FormControl('', Validators.required),
        county: new FormControl(''),
        region: new FormControl(null),
        postalCode: new FormControl('', Validators.required),
        country: new FormGroup({
          isocode: new FormControl('GB', Validators.required),
        }),
        defaultAddress: new FormControl(''),
      },
      { validators: this.houseValidator() }
    );


this.addressForm.patchValue(this.addressData);

this.submitted = true;
    if (this.addressForm.valid) {
}



 <form (ngSubmit)="verifyAddress()" [formGroup]="addressForm">
        <input type="hidden" name="id" formControlName="id" />

        <ng-container *ngIf="titles$ | async as titles">
          <div class="form-group row" [ngClass]="{ formError: addressForm.controls.titleCode.invalid && submitted }">
            <label
              class="col-lg-8 col-12 control-label"
              for="titleCode"
              [innerHTML]="'account.forms.title' | cxTranslate"
            ></label>

            <div class="col-lg-8 col-12">
              <select
                id="title-select"
                class="notDefault custom-select"
                formControlName="titleCode"
                [attr.aria-label]="'account.forms.select' | cxTranslate: { field: 'account.forms.title' | cxTranslate }"
              >
                <option *ngFor="let title of titles" [ngValue]="title.code">{{ title.name }}</option>
              </select>

              <div
                class="formError"
                *ngIf="addressForm.controls.titleCode.invalid && submitted"
                [innerHTML]="'general.fieldRequired' | cxTranslate"
              ></div>
            </div>
          </div>
        </ng-container>

        <div class="form-group row" [ngClass]="{ formError: addressForm.controls.firstName.invalid && submitted }">
          <label
            class="col-lg-8 col-12 control-label"
            for="firstName"
            [innerHTML]="'account.forms.firstName' | cxTranslate"
          ></label>

          <div class="col-lg-8 col-12">
            <input
              formControlName="firstName"
              name="firstName"
              class="accountInputField inputField"
              [attr.aria-label]="
                'account.forms.enter' | cxTranslate: { field: 'account.forms.firstName' | cxTranslate }
              "
            />

            <div
              class="formError"
              *ngIf="addressForm.controls.firstName.invalid && submitted"
              [innerHTML]="'general.fieldRequired' | cxTranslate"
            ></div>
          </div>
        </div>

        <div class="form-group row" [ngClass]="{ formError: addressForm.controls.lastName.invalid && submitted }">
          <label
            class="col-lg-8 col-12 control-label"
            for="lastName"
            [innerHTML]="'account.forms.lastName' | cxTranslate"
          ></label>

          <div class="col-lg-8 col-12">
            <input
              formControlName="lastName"
              name="lastName"
              class="accountInputField inputField"
              [attr.aria-label]="'account.forms.enter' | cxTranslate: { field: 'account.forms.lastName' | cxTranslate }"
            />

            <div
              class="formError"
              *ngIf="addressForm.controls.lastName.invalid && submitted"
              [innerHTML]="'general.fieldRequired' | cxTranslate"
            ></div>
          </div>
        </div>

        <div class="form-group row" [ngClass]="{ formError: addressForm.controls.phone.invalid && submitted }">
          <label
            class="col-lg-8 col-12 control-label"
            for="phone"
            [innerHTML]="'account.addressForm.phone' | cxTranslate"
          ></label>

          <div class="col-lg-8 col-12">
            <input
              formControlName="phone"
              name="phone"
              class="accountInputField inputField"
              [attr.aria-label]="
                'account.forms.enter' | cxTranslate: { field: 'account.addressForm.phone' | cxTranslate }
              "
            />

            <div
              class="formError"
              *ngIf="addressForm.controls.phone.invalid && submitted"
              [innerHTML]="'general.fieldRequired' | cxTranslate"
            ></div>
          </div>
        </div>

        <div class="form-group row">
          <label
            class="col-lg-8 col-12 control-label"
            for="apartment"
            [innerHTML]="
              'account.addressForm.optional' | cxTranslate: { field: 'account.addressForm.appartment' | cxTranslate }
            "
          ></label>

          <div class="col-lg-8 col-12">
            <input
              formControlName="apartment"
              name="apartment"
              class="accountInputField inputField"
              [attr.aria-label]="
                'account.forms.enter' | cxTranslate: { field: 'account.addressForm.appartment' | cxTranslate }
              "
            />
          </div>
        </div>

        <div class="form-group row" [ngClass]="{ formError: addressForm.errors?.houseRequired && submitted }">
          <label
            class="col-lg-8 col-12 control-label"
            for="houseName"
            [innerHTML]="
              'account.addressForm.optional' | cxTranslate: { field: 'account.addressForm.houseName' | cxTranslate }
            "
          ></label>

          <div class="col-lg-8 col-12">
            <input
              formControlName="houseName"
              name="houseName"
              class="accountInputField inputField"
              [attr.aria-label]="
                'account.forms.enter' | cxTranslate: { field: 'account.addressForm.houseName' | cxTranslate }
              "
            />
          </div>
        </div>

        <div class="form-group row" [ngClass]="{ formError: addressForm.errors?.houseRequired && submitted }">
          <label
            class="col-lg-8 col-12 control-label"
            for="line2"
            [innerHTML]="
              'account.addressForm.optional' | cxTranslate: { field: 'account.addressForm.houseNumber' | cxTranslate }
            "
          ></label>

          <div class="col-lg-8 col-12">
            <input
              formControlName="line2"
              name="line2"
              class="accountInputField inputField"
              [attr.aria-label]="
                'account.forms.enter' | cxTranslate: { field: 'account.addressForm.houseNumber' | cxTranslate }
              "
            />

            <div
              class="formError"
              *ngIf="addressForm.errors?.houseRequired && submitted"
              [innerHTML]="'account.addressForm.houseRequired' | cxTranslate"
            ></div>
          </div>
        </div>

        <div class="form-group row">
          <label
            class="col-lg-8 col-12 control-label"
            for="companyName"
            [innerHTML]="
              'account.addressForm.optional' | cxTranslate: { field: 'account.addressForm.company' | cxTranslate }
            "
          ></label>

          <div class="col-lg-8 col-12">
            <input
              formControlName="companyName"
              name="companyName"
              class="accountInputField inputField"
              [attr.aria-label]="
                'account.forms.enter' | cxTranslate: { field: 'account.addressForm.company' | cxTranslate }
              "
            />
          </div>
        </div>

        <div class="form-group row" [ngClass]="{ formError: addressForm.controls.line1.invalid && submitted }">
          <label
            class="col-lg-8 col-12 control-label"
            for="line1"
            [innerHTML]="'account.addressForm.line1' | cxTranslate"
          ></label>

          <div class="col-lg-8 col-12">
            <input
              formControlName="line1"
              name="line1"
              class="accountInputField inputField"
              [attr.aria-label]="
                'account.forms.enter' | cxTranslate: { field: 'account.addressForm.line1' | cxTranslate }
              "
            />

            <div
              class="formError"
              *ngIf="addressForm.controls.line1.invalid && submitted"
              [innerHTML]="'general.fieldRequired' | cxTranslate"
            ></div>
          </div>
        </div>

        <div class="form-group row">
          <label
            class="col-lg-8 col-12 control-label"
            for="district"
            [innerHTML]="
              'account.addressForm.optional' | cxTranslate: { field: 'account.addressForm.line2' | cxTranslate }
            "
          ></label>

          <div class="col-lg-8 col-12">
            <input
              formControlName="district"
              name="district"
              class="accountInputField inputField"
              [attr.aria-label]="
                'account.forms.enter' | cxTranslate: { field: 'account.addressForm.line2' | cxTranslate }
              "
            />
          </div>
        </div>

        <div class="form-group row" [ngClass]="{ formError: addressForm.controls.town.invalid && submitted }">
          <label
            class="col-lg-8 col-12 control-label"
            for="town"
            [innerHTML]="'account.addressForm.town' | cxTranslate"
          ></label>

          <div class="col-lg-8 col-12">
            <input
              formControlName="town"
              name="town"
              class="accountInputField inputField"
              [attr.aria-label]="
                'account.forms.enter' | cxTranslate: { field: 'account.addressForm.town' | cxTranslate }
              "
            />

            <div
              class="formError"
              *ngIf="addressForm.controls.town.invalid && submitted"
              [innerHTML]="'general.fieldRequired' | cxTranslate"
            ></div>
          </div>
        </div>

        <div class="form-group row">
          <label
            class="col-lg-8 col-12 control-label"
            for="county"
            [innerHTML]="
              'account.addressForm.optional' | cxTranslate: { field: 'account.addressForm.county' | cxTranslate }
            "
          ></label>

          <div class="col-lg-8 col-12">
            <input
              formControlName="county"
              name="county"
              class="accountInputField inputField"
              [attr.aria-label]="
                'account.forms.enter' | cxTranslate: { field: 'account.addressForm.county' | cxTranslate }
              "
            />
          </div>
        </div>

        <div class="form-group row" [ngClass]="{ formError: addressForm.controls.postalCode.invalid && submitted }">
          <label
            class="col-lg-8 col-12 control-label"
            for="postalCode"
            [innerHTML]="'account.addressForm.postalCode' | cxTranslate"
          ></label>

          <div class="col-lg-8 col-12">
            <input
              formControlName="postalCode"
              name="postalCode"
              class="accountInputField inputField"
              [attr.aria-label]="
                'account.forms.enter' | cxTranslate: { field: 'account.addressForm.postalCode' | cxTranslate }
              "
            />

            <div
              class="formError"
              *ngIf="addressForm.controls.postalCode.invalid && submitted"
              [innerHTML]="'general.fieldRequired' | cxTranslate"
            ></div>
          </div>
        </div>

        <ng-container *ngIf="countries$ | async as countries">
          <div *ngIf="countries.length > 1" class="form-group row">
            <label class="col-lg-8 col-12 control-label" for="postcode">country</label>

            <div class="col-lg-8 col-12">
              <label>
                <!-- <span class="label-content required">{{
                                    'addressForm.country' | cxTranslate
                                  }}</span> -->

                <!-- <ng-select [inputAttrs]="{ required: 'true' }" class="country-select" id="country-select" formControlName="isocode"
                                    [searchable]="true" [clearable]="false" [items]="countries" bindLabel="name" bindValue="isocode" placeholder="''">  
                                  </ng-select> -->
              </label>
            </div>
          </div>

          <div formGroupName="country">
            <input
              *ngIf="countries.length === 1"
              type="hidden"
              name="isocode"
              formControlName="isocode"
              [value]="countries[0].isocode"
            />
          </div>
        </ng-container>

        <div class="form-group row form-group-defaultAddress">
          <label class="col-lg-8 col-12 control-label">
            <input type="checkbox" class="defaultAddressCheckbox" formControlName="defaultAddress" />
            {{ 'account.addressForm.makeDefault' | cxTranslate }}
          </label>
        </div>

        <button
          class="btn primaryButton"
          type="submit"
          [innerHTML]="'account.addressForm.saveAddress' | cxTranslate"
        ></button>

        <ng-container *ngIf="addressData?.id && addressData?.defaultAddress !== true">
          <button
            class="btn secondaryButton"
            type="button"
            (click)="deleteAddressAcion()"
            [innerHTML]="'account.addressForm.deleteAddress' | cxTranslate"
          ></button>
        </ng-container>
      </form>






import { AurumCustomFormValidators } from 'src/app/validators/aurum-custom-form-validators';

   this.registerForm = new FormGroup(
      {
        titleCode: new FormControl('', Validators.required),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, CustomFormValidators.emailValidator]),
        password: new FormControl('', [Validators.required, AurumCustomFormValidators.passwordValidator]),
        confirmPassword: new FormControl('', Validators.required),
        termsAndConditionsCheckbox: new FormControl('', Validators.requiredTrue),
        mailCheckbox: new FormControl(''),
        emailCheckbox: new FormControl(''),
        phoneCheckbox: new FormControl(''),
        recaptchaBox: new FormControl(null, Validators.required),
      },
      { validators: AurumCustomFormValidators.passwordsMustMatch('password', 'confirmPassword') }
    );


@Injectable({
  providedIn: 'root',
})


export class AurumCustomFormValidators extends CustomFormValidators {
  static passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value as string;
    const PASSWORD_PATTERN = /^.{8,}$/;

    return password && (!password.length || password.match(PASSWORD_PATTERN)) ? null : { cxInvalidPassword: true };
  }

  static atLeastOneRequired(fields: string[]) {
    return (fg: FormGroup): ValidationErrors | null => {
      const controls = fields.map((field) => fg.get(field) as AbstractControl);
      if (!controls.some((control) => control.value !== '')) {
        controls.forEach((control) => control.setErrors({ allEmpty: true }));
      } else {
        controls.forEach((control) => control.setErrors(null));
      }
      return null;
    };
  }

  static checkForHash(control: AbstractControl): ValidationErrors | null {
    const password: string = control.value;
    if (password && password.includes('#')) {
      return { hashPresent: true };
    }
    return null;
  }
}

            <form [formGroup]="registerForm" (ngSubmit)="onRegister()">
              <h2 [innerHTML]="'account.createAccount' | cxTranslate"></h2>

              <ng-container *ngIf="titles$ | async as titles">
                <div
                  class="form-group row"
                  [ngClass]="{ formError: registerForm.controls.titleCode.errors?.required && submitted }"
                >
                  <label
                    class="col-12 control-label"
                    for="titleCode"
                    [innerHTML]="'account.forms.title' | cxTranslate"
                  ></label>

                  <div class="col-12">
                    <select
                      id="title-select"
                      class="notDefault custom-select lg-font"
                      formControlName="titleCode"
                      [attr.aria-label]="
                        'account.forms.select' | cxTranslate: { field: 'account.forms.title' | cxTranslate }
                      "
                    >
                      <option disabled selected="selected" value="">
                        {{ 'account.forms.pleaseSelect' | cxTranslate }}
                      </option>
                      <option *ngFor="let title of titles" [ngValue]="title.code">{{ title.name }}</option>
                    </select>

                    <div
                      class="formError"
                      *ngIf="registerForm.controls.titleCode.errors?.required && submitted"
                      [innerHTML]="'general.titleRequired' | cxTranslate"
                    ></div>
                  </div>
                </div>
              </ng-container>

              <div
                class="form-group row"
                [ngClass]="{ formError: registerForm.controls.firstName.errors?.required && submitted }"
              >
                <label
                  class="col-12 control-label"
                  for="firstName"
                  [innerHTML]="'account.forms.firstName' | cxTranslate"
                ></label>

                <div class="col-12">
                  <input
                    name="firstName"
                    formControlName="firstName"
                    class="accountInputField"
                    [attr.aria-label]="
                      'account.forms.enter' | cxTranslate: { field: 'account.forms.firstName' | cxTranslate }
                    "
                  />

                  <div
                    class="formError"
                    *ngIf="registerForm.controls.firstName.errors?.required && submitted"
                    [innerHTML]="'general.nameRequired' | cxTranslate"
                  ></div>
                </div>
              </div>

              <div
                class="form-group row"
                [ngClass]="{ formError: registerForm.controls.lastName.errors?.required && submitted }"
              >
                <label
                  class="col-12 control-label"
                  for="lastName"
                  [innerHTML]="'account.forms.lastName' | cxTranslate"
                ></label>

                <div class="col-12">
                  <input
                    name="lastName"
                    formControlName="lastName"
                    class="accountInputField"
                    [attr.aria-label]="
                      'account.forms.enter' | cxTranslate: { field: 'account.forms.lastName' | cxTranslate }
                    "
                  />

                  <div
                    class="formError"
                    *ngIf="registerForm.controls.lastName.errors?.required && submitted"
                    [innerHTML]="'general.lastnameRequired' | cxTranslate"
                  ></div>
                </div>
              </div>

              <div
                class="form-group row"
                [ngClass]="{
                  formError:
                    (registerForm.controls.email.errors?.cxInvalidEmail === true ||
                      registerForm.controls.email.invalid) &&
                    submitted
                }"
              >
                <label
                  class="col-12 control-label"
                  for="email"
                  [innerHTML]="'account.forms.email' | cxTranslate"
                ></label>

                <div class="col-12">
                  <input
                    type="email"
                    name="email"
                    formControlName="email"
                    class="accountInputField"
                    [attr.aria-label]="
                      'account.forms.enter' | cxTranslate: { field: 'account.forms.email' | cxTranslate }
                    "
                  />

                  <div
                    class="formError"
                    *ngIf="registerForm.controls.email.errors?.required && submitted"
                    [innerHTML]="'general.emailRequired' | cxTranslate"
                  ></div>

                  <div
                    class="formError"
                    *ngIf="
                      registerForm.controls.email.errors?.cxInvalidEmail === true &&
                      submitted &&
                      !registerForm.controls.email.errors?.required
                    "
                    [innerHTML]="'account.registerForm.emailAddressIncorrectFormat' | cxTranslate"
                  ></div>
                </div>
              </div>

              <div
                class="form-group row"
                [ngClass]="{
                  formError:
                    (registerForm.controls.password.errors?.cxInvalidPassword === true ||
                      registerForm.controls.confirmPassword.errors?.cxPasswordsMustMatch === true) &&
                    submitted
                }"
              >
                <label
                  class="col-12 control-label"
                  for="password"
                  [innerHTML]="'account.forms.password' | cxTranslate"
                ></label>

                <div class="col-12">
                  <div class="password-input-container">
                    <input
                      type="{{ showRegisterPassword ? 'text' : 'password' }}"
                      name="password"
                      formControlName="password"
                      class="accountInputField"
                      [attr.aria-label]="
                        'account.forms.enter' | cxTranslate: { field: 'account.forms.password' | cxTranslate }
                      "
                    />
                    <label
                      *ngIf="registerForm.controls.password.value !== ''"
                      class="toogle-password-visibility"
                      (click)="showRegisterPassword = !showRegisterPassword"
                      >{{ (showRegisterPassword ? 'general.hide' : 'general.show') | cxTranslate }}</label
                    >
                  </div>

                  <div
                    class="formError"
                    [innerHTML]="'account.registerForm.passwordSupportingMessage' | cxTranslate"
                  ></div>
                </div>
              </div>

              <div
                class="form-group row"
                [ngClass]="{
                  formError:
                    (registerForm.controls.confirmPassword.errors?.cxPasswordsMustMatch === true ||
                      registerForm.controls.confirmPassword.errors?.required) &&
                    submitted
                }"
              >
                <label
                  class="col-12 control-label"
                  for="confirmPassword"
                  [innerHTML]="'account.forms.confirmPassword' | cxTranslate"
                ></label>

                <div class="col-12">
                  <div class="password-input-container">
                    <input
                      type="{{ showRegisterConfirmPassword ? 'text' : 'password' }}"
                      name="confirmPassword"
                      formControlName="confirmPassword"
                      class="accountInputField"
                      [attr.aria-label]="
                        'account.forms.enter' | cxTranslate: { field: 'account.forms.confirmPassword' | cxTranslate }
                      "
                    />
                    <label
                      *ngIf="registerForm.controls.confirmPassword.value !== ''"
                      class="toogle-password-visibility"
                      (click)="showRegisterConfirmPassword = !showRegisterConfirmPassword"
                      >{{ (showRegisterConfirmPassword ? 'general.hide' : 'general.show') | cxTranslate }}</label
                    >
                  </div>

                  <div
                    class="formError"
                    *ngIf="registerForm.controls.confirmPassword.errors?.cxPasswordsMustMatch === true && submitted"
                    [innerHTML]="'account.registerForm.passwordsDontMatch' | cxTranslate"
                  ></div>

                  <div
                    class="formError"
                    *ngIf="registerForm.controls.confirmPassword.errors?.required === true && submitted"
                    [innerHTML]="'general.confirmPassword' | cxTranslate"
                  ></div>
                </div>
              </div>

              <div class="form-group row marketingConsentGroup">
                <div class="col-12 consentIntroductionMessage">
                  {{ 'account.consentMessaging.marketingConsentMessage' | cxTranslate }}
                </div>

                <div class="col-4">
                  <input type="checkbox" class="emailCheckbox" formControlName="emailCheckbox" />
                  <label
                    class="col-12 control-label pr-0"
                    [innerHTML]="'account.consentMessaging.emailMarketing' | cxTranslate"
                  ></label>
                </div>
                <div class="col-4">
                  <input type="checkbox" class="phoneCheckbox" formControlName="phoneCheckbox" />
                  <label
                    class="col-12 control-label pr-0"
                    [innerHTML]="'account.consentMessaging.phoneMarketing' | cxTranslate"
                  ></label>
                </div>
                <div class="col-4">
                  <input type="checkbox" class="mailCheckbox" formControlName="mailCheckbox" />
                  <label
                    class="col-12 control-label pr-0"
                    [innerHTML]="'account.consentMessaging.mailMarketing' | cxTranslate"
                  ></label>
                </div>

                <div
                  class="col-12 consentPrivacyAndSecurityPolicy"
                  [innerHTML]="
                    'account.consentMessaging.privacyAndSecurityPolicyMessage'
                      | cxTranslate: { consentPrivacyAndSecurityPolicyLink: consentPrivacyAndSecurityPolicyLink }
                  "
                ></div>
              </div>

              <div
                class="form-group row"
                [ngClass]="{
                  formError: registerForm.controls.termsAndConditionsCheckbox.errors?.required && submitted
                }"
              >
                <div class="col-12">
                  <input
                    type="checkbox"
                    class="termsAndConditionsCheckbox"
                    formControlName="termsAndConditionsCheckbox"
                  />
                  <label
                    class="col-12 control-label checkboxLabel"
                    [innerHTML]="
                      'account.registerForm.termsAndConditions'
                        | cxTranslate: { termsAndConditions: termsAndConditions }
                    "
                  ></label>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-12 recaptchaContainer">
                  <re-captcha
                    class="recaptcha"
                    formControlName="recaptchaBox"
                    [disabled]="registerForm.invalid"
                    [siteKey]="googleRecaptchaKey"
                  ></re-captcha>
                </div>
              </div>

              <button
                class="btn btn-block primaryButton"
                type="submit"
                [disabled]="
                  registerForm.controls.recaptchaBox.invalid || registerForm.controls.termsAndConditionsCheckbox.invalid
                "
                [innerHTML]="'account.createAccount' | cxTranslate"
              ></button>
            </form>


    this.submitted = true;

    if (!this.registerForm.valid) {
      if (this.registerForm.controls.termsAndConditionsCheckbox.errors?.required) {
        this.globalMessageService.add(
          'Please accept our terms and conditions to continue',
          GlobalMessageType.MSG_TYPE_ERROR,
          30000
        );
      }
      if (this.registerForm.controls.recaptchaBox.errors?.required) {
        this.globalMessageService.add(
          'Please check the recaptcha checkbox to continue',
          GlobalMessageType.MSG_TYPE_ERROR,
          30000
        );
      }

      this.scroller.scrollToPosition([0, 0]);

      this.registerForm.markAllAsTouched();
      return;
    }

    const userSignup = {
      firstName: this.registerForm.get('firstName')?.value,
      lastName: this.registerForm.get('lastName')?.value,
      titleCode: this.registerForm.get('titleCode')?.value,
      uid: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      termCheck: this.registerForm.get('termsAndConditionsCheckbox')?.value,
      mailConsent: this.registerForm.get('mailCheckbox')?.value,
      emailConsent: this.registerForm.get('emailCheckbox')?.value,
      phoneConsent: this.registerForm.get('phoneCheckbox')?.value,
      recaptchaResponse: this.registerForm.get('recaptchaBox')?.value,
    };



    this.form = new FormGroup(
      {
        password: new FormControl('', [Validators.required, AurumCustomFormValidators.passwordValidator]),
        confirmPassword: new FormControl('', [Validators.required, Validators.required]),
      },
      {
        validators: CustomFormValidators.passwordsMustMatch('password', 'confirmPassword'),
      }
    );


    this.addressForm = new FormGroup({
      id: new FormControl(''),
      titleCode: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      region: new FormControl(null, Validators.required),
      defaultAddress: new FormControl('true'),
      shippingAddress: new FormControl('true'),
    });

    <div class="spCheckoutFormGroup spCheckoutFormGroupCheckbox">
      <input type="checkbox" class="defaultAddressCheckbox" formControlName="defaultAddress" />
      <label [innerHTML]="'account.addressForm.makeDefaultAddress' | cxTranslate"></label>
    </div>


  form.addControl(
      'country',
      new FormGroup({
        isocode: new FormControl('GB', Validators.required),
      })
    );




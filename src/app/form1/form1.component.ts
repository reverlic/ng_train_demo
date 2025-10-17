import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-form1',
    imports: [JsonPipe, ReactiveFormsModule],
    templateUrl: './form1.component.html',
    styleUrl: './form1.component.scss'
})
export class Form1Component {
    isFormNested = false;
    userForm: FormGroup;
    submitValue: any;
    nestedForm: FormGroup;
    addressForm: FormGroup;

    constructor() {
        this.userForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email])
        })
        this.addressForm = new FormGroup({
            country: new FormControl(''),
            province: new FormControl('')
        })
        this.nestedForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            address: this.addressForm
        })
    }

    onSubmit() {
        this.submitValue = this.isFormNested ? this.nestedForm.value : this.userForm.value;
    }

}

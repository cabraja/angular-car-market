import { Component, OnInit } from '@angular/core';
import { CreateCar,Make,PaginatedResponse,SpecificationInsert } from 'src/app/types';
import { CarService } from '../services/car.service';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit{

  makes:Make[] = [];
  specifications:SpecificationInsert[] = [];
  additionalImages:string[] = [];

  carForm:any = null;


  ngOnInit(): void {
    this.getMakes();
    this.getSpecifications();
  }

  constructor(private carService:CarService,private fb: FormBuilder){}

  getMakes(){
    this.carService.getMakes().subscribe(
      response => {
        this.makes = response.data;
        
      },
      error => {
        console.log(error);
        
      }
    )
  }

  cleanSpecificationName(name: string): string {
    return name.replace(/\s/g, '');
  }

  getSpecifications(){
    this.carService.getSpecifications().subscribe(
      response => {
        // SET FORM GROUP
       this.specifications = response;
       const controlsConfig: { [key: string]: any } = {};
       this.specifications.forEach(item => {
         
         controlsConfig[item.specificationName] = ['', Validators.required];
       });
       
   
       this.carForm = this.fb.group({
         make: ['',[Validators.required]],
         model: ['',[Validators.required]],
         variant: ['',[Validators.required]],
         engineCapacity: ['', [Validators.required]],
         mileage: ['', [Validators.required]],
         power: ['',Validators.required],
         imageUrl:['',Validators.required],
         price:['', Validators.required],
         ...controlsConfig
       })
       
      },
      error => {
        console.log(error);
        
      }
    )
  }

  onSubmit(){
    let data:CreateCar;
    const {make,model,variant,engineCapacity,mileage,power,price} = this.carForm.value;

    let specifications:any[] = [];

    // PREPARE SPECS
    this.specifications.forEach(spec => {
      specifications.push({
        specificationId: spec.id,
        specificationValueId: this.carForm.controls[spec.specificationName].value
      })
    })

    // PREPARE IMAGES
    let files = [{path:this.carForm.controls['imageUrl'].value}]
    if(this.additionalImages){
      this.additionalImages.forEach(img => {
        if(img.trim().length > 0){
          files.push({path: img})
        }
      })
    }
    

    data = {
      makeId:make,
      model,
      variant,
      engineCapacity,
      mileage,
      power,
      price,
      specificationValues: specifications,
      files:files
    }

    this.carService.createCar(data).subscribe(
      response => {
        alert('Success!');
        this.carForm.reset();
        this.additionalImages = [];
        
      },
      error => {
        // API IS IN SERBIAN, SO ERRORS HERE ARE DISPLAYED IN SERBIAN
        alert(error)
        
        
      }
    )
    
    
  }

  addImage(){
    this.additionalImages.push('');
  }
}

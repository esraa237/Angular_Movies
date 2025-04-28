import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Trending } from '../trending';
import { Router } from 'express';
import { RouterLink } from '@angular/router';
import { People } from '../people';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-people',
  imports: [RouterLink,DecimalPipe],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @ViewChild('details') details!: ElementRef;
  people!: People[];
  selectedOne!: People;
  loading:boolean = true;

  constructor(private _apiservice: ApiService) {}

  ngOnInit(): void {
    this.getAllPeople();
  }

  ngAfterViewInit(): void {
    if (this.details) {
      console.log(this.details.nativeElement.textContent); // Accessing the text content
    }
  }

  getAllPeople(): void {
    this._apiservice.getAllPeople().subscribe({
      next: (data) => {
        this.people = data.results;
        console.log(this.people);
      },
      error: (err) => {
        console.error('Error occurred:', err);
        this.loading = false;  
      },
      complete: () => {
        console.log('Request completed');
        this.loading = false;
      }
    });
  }

  getDetails(id: number): void {
    if (this.details) {
      this.details.nativeElement.style.display = 'flex'; // Show the details section
    }
    this.selectedOne = this.people.find(selectedOne => selectedOne.id === id)!;
    console.log(this.selectedOne);
  }

  // Close functionality, if you plan to hide the details section
  closeDetails(): void {
    if (this.details) {
      this.details.nativeElement.style.display = 'none';
    }
  }
}

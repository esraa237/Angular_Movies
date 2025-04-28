import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Tv } from '../tv';
import { ApiService } from '../api.service';
import { Router } from 'express';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-tv',
  imports: [DecimalPipe,RouterLink],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent implements OnInit, AfterViewInit {
  @ViewChild('details') details!: ElementRef;
  tvShows!:Tv[]
  selectedOne!: Tv;
  loading:boolean = true;

  constructor(private _apiservice: ApiService) {}

  ngOnInit(): void {
    this.getAllTvShows();
  }

  ngAfterViewInit(): void {
    if (this.details) {
      console.log(this.details.nativeElement.textContent); // Accessing the text content
    }
  }

  getAllTvShows(): void {
    this._apiservice.getAllTvShows().subscribe({
      next: (data) => {
        this.tvShows = data.results;
        console.log(this.tvShows);
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
    this.selectedOne = this.tvShows.find(selectedOne => selectedOne.id === id)!;
    console.log(this.selectedOne);
  }

  // Close functionality, if you plan to hide the details section
  closeDetails(): void {
    if (this.details) {
      this.details.nativeElement.style.display = 'none';
    }
  }
}

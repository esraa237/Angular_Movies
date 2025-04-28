import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {Movie} from'../movie'
import { ApiService } from '../api.service';
import { Router, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-movie',
  imports: [RouterLink,DecimalPipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit, AfterViewInit {
  @ViewChild('details') details!: ElementRef;
  movies!:Movie[]
  selectedOne!: Movie;
  loading:boolean = true;

  constructor(private _apiservice: ApiService) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  ngAfterViewInit(): void {
    if (this.details) {
      console.log(this.details.nativeElement.textContent); // Accessing the text content
    }
  }

  getAllMovies(): void {
    this._apiservice.getAllMovies().subscribe({
      next: (data) => {
        this.movies = data.results;
        console.log(this.movies);
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
    this.selectedOne = this.movies.find(selectedOne => selectedOne.id === id)!;
    console.log(this.selectedOne);
  }

  // Close functionality, if you plan to hide the details section
  closeDetails(): void {
    if (this.details) {
      this.details.nativeElement.style.display = 'none';
    }
  }
}

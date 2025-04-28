import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Trending } from '../trending';
import { ApiService } from '../api.service';
import { Router, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [RouterLink,DecimalPipe],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit {
  @ViewChild('details') details!: ElementRef;
  trendings!: Trending[];
  trend!: Trending;
  loading: boolean = true;

  constructor(private _apiservice: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getAllTrending();
  }

  ngAfterViewInit(): void {
    if (this.details) {
      console.log(this.details.nativeElement.textContent); // Accessing the text content
    }
  }

  getAllTrending(): void {
    this._apiservice.getAllTrending().subscribe({
      next: (data) => {
        this.trendings = data.results;
        console.log(this.trendings);
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
    this.trend = this.trendings.find(trend => trend.id === id)!;
    console.log(this.trend);
  }

  // Close functionality, if you plan to hide the details section
  closeDetails(): void {
    if (this.details) {
      this.details.nativeElement.style.display = 'none';
    }
  }
}

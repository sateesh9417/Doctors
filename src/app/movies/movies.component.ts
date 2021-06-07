import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(public http:HttpClient) { }
movies:any=[];
search:any=[];
mName="robo"
  ngOnInit(): void {
    this.searchMovie()
  }
  searchMovie(){
    this.movies=this.http.get<any>("http://www.omdbapi.com/?&apikey=ff29e831&s="+this.mName).subscribe(data =>{
      this.movies=data;
      this.search=this.movies.Search
      // console.log(this.search);
      // console.log(this.movies);
    })
  }

}

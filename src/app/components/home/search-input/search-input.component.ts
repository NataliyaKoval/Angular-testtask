import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, pluck} from "rxjs/operators";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef;
  @Output() searchTerm: EventEmitter<string> = new EventEmitter<string>();
  @Input() errorMessage = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    fromEvent(this.searchInput!.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        pluck('target', 'value'),
        distinctUntilChanged(),
        filter((value: string) => value.length > 3)
      )
      .subscribe((value) => {
        this.searchTerm.emit(value);
      });
  }
}

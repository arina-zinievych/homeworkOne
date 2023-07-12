import { Component } from '@angular/core';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})

export class PersonInfoComponent {
  mainQuote: string = 'Patience is a key element of success';
  quotes: string[] = [
    'If you think your teacher is tough, wait till you get boss',
    'Life is not fair — get used to it!',
    'Success is a lousy teacher. The seduces smart people in thinking they can\'t lose',
    'Be nice to nerds..'
  ];
  image: string = 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg';
  born: string = 'William Henry Gates III October 28, 1955 (age 67) Seattle, Washington, U.S.';
  education: string = 'Harvard University (dropped out)';
  occupations: string[] = [
    'Businessman',
    'investor',
    'philanthropist',
    'programmer',
    'writer'
  ];
  yearsActive: string = '1972–present';
  founded: string = 'Co-founder of Microsoft and Bill & Melinda Gates Foundation';
  awards: string[] = [
    'Knight Commander of the Order of the British Empire (2005)',
    'Padma Bhushan (2015)',
    'Presidential Medal of Freedom (2016)',
    'Hilal-e-Pakistan (2022)'
  ];
  links: string[] = [
    'https://en.wikipedia.org/wiki/Bill_Gates',
    'https://www.gatesfoundation.org/',
    'https://www.gatesnotes.com/',
    'https://twitter.com/billgates'
  ]
  age: number = 67;
}

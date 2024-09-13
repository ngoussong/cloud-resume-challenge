import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'andresjosehr-portfolio';
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{
    
    this.languageService.initLanguage()


    this.titleService.setTitle( "Arthur Fonda | Cloud Engineer" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Cloud, software, developer'},
      {name: 'description', content: 'In 4 years of experience I have covered many roles: Backend Developer, Frontend Developer and Fullstack Developer. I love contributing my knowledge to create new things that help solve problems.'},
    ]);
    
    
    AOS.init(); 

  }
}

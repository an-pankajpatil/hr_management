import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Greet } from 'src/app/models/greet';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';
import { Subscription } from 'rxjs';
import { QuotesService } from 'src/app/services/quotes.service';
import { Quotesresponse } from 'src/app/models/quoteresponse';
@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage implements OnInit, OnDestroy {
  currentHour: number;
  partOfDay: string; //four parts of day ===> Morning · Afternoon · Evening.
  Greet = Greet;
  intervalId: any;
  interval;
  weatherData: WeatherData;
  randomQuote: string="Intelligence without ambition is a bird without wings.";

  subscription: Subscription[] = [];
  constructor(
    private menu: MenuController,
    private weatherService: WeatherService,
    private quotesService: QuotesService
  ) {
    this.menu.enable(false);
  }
   /**
   * @description check current hours and set the partOfDay
   */
  setTiming(currentHour: number) {
    const afternoon = 12;
    const evening = 17;
    if (currentHour >= afternoon && currentHour <= evening) {
      this.partOfDay = Greet.Afternoon;
    } else if (currentHour >= evening) {
      this.partOfDay = Greet.Evening;
    } else {
      this.partOfDay = Greet.Morning;
    }
  }
  /**
   * @description getting the current weather information
   */
  getCurrentWeatherInfo() {
    this.subscription.push(
      this.weatherService.getWeather().subscribe((response: WeatherData) => {
        this.weatherData = response;

      })
    );
  }
  getRandomQuotes() {
    this.subscription.push(this.quotesService.getQuotes().subscribe((allQuotes: Quotesresponse) => {
      this.interval = setInterval(() => {
        this.randomQuote = this.genrateRamdomQuote(allQuotes.data);
      }, 1000*60);
    })
    );
  }

  genrateRamdomQuote(quotes) {
    let random = Math.floor(Math.random() * 30);
    return quotes[random].text;
  }
  /**
   * @description getting current hour for every second
   */
  getCurrentHours(): void {
    this.intervalId = setInterval(() => {
      this.currentHour = new Date().getHours();
      this.setTiming(this.currentHour);
    }, 5000);
  }
  ngOnInit() {
    this.getCurrentHours();
    this.getCurrentWeatherInfo();
    this.getRandomQuotes();
  }
  /**
   * @description Clear Interval
   */
  ngOnDestroy(): void {
    clearInterval(this.intervalId );
    clearInterval(this.interval);
    this.subscription.map((s) => s.unsubscribe);
  }
}




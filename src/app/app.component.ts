import { Component, ViewChild, HostListener } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService, BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  locale = 'pt-br';
  @ViewChild(BsDatepickerDirective) datepicker: BsDatepickerDirective;
  bsConfig: Partial<BsDatepickerConfig>;

  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker.hide();
  }

  constructor(private localeService: BsLocaleService) {

    defineLocale(this.locale, ptBrLocale);
    this.localeService.use(this.locale);

    this.bsConfig = Object.assign({}, { containerClass: 'theme-blue' });
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import vi from '@angular/common/locales/vi';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NZ_I18N, vi_VN } from 'ng-zorro-antd/i18n';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PipeModule } from './pipes/pipe.module';
import { BaseTableService } from './services/base-table-service.service';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzSelectModule } from 'ng-zorro-antd/select';
registerLocaleData(vi);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
const NZ_MODULE = [
  NzButtonModule,
  NzTableModule,
  NzPaginationModule,
  NzModalModule,
  NzSelectModule,
  NzIconModule.forRoot(icons)
]
@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
    PokemonItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PipeModule,
    ...NZ_MODULE

  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    BaseTableService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

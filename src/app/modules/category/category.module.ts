import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { CommonModule } from "../_common/common.module";
import { CategoryIndexComponent } from "./components/index/category-index.component";
import { CategoryService } from "./services/category.service";

@NgModule({
    declarations: [
        CategoryIndexComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        CommonModule,
    ],
    exports: [
        CategoryIndexComponent
    ],
    providers: [CategoryService]
})
export class CategoryModule {

}
import { Component } from "@angular/core";
import { Category } from "../../models/category.model";
import { CategoryService } from "../../services/category.service";

@Component({
    selector: 'category-index',
    templateUrl: './category-index.component.html',
    styleUrls: ['./category-index.component.css'],
})
export class CategoryIndexComponent {
    categories: Array<Category> = new Array<Category>();

    constructor(private cateogryService: CategoryService) {
        this.cateogryService.getCategories().subscribe(categories => this.categories = categories);
    }
}
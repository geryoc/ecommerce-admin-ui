import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Category } from "../models/category.model";

@Injectable()
export class CategoryService {

    categoryUrl: string = "https://localhost:44314/api/category";

    constructor(private http: HttpClient) { }

    getCategories() {
        return this.http.get<Array<Category>>(this.categoryUrl);
    }
}
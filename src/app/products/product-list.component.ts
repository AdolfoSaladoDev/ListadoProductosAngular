import {Component} from '@angular/core'

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Listado de producto'
    showImage: boolean = false;

    products: any[] = [
        {
            "productId": 2,
            "productName": "Enrollador jardinera",
            "productCode": "GND-0023",
            "releaseDate": "18 de Marzo de 2023",
            "description": "Maravilloso enrollador de jardín",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/android.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "21 de Mayo de 2023",
            "description": "Maravilloso hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/android.png"
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
import {Component, Input} from '@angular/core';
import {IJob} from "../../../models/job.model";

@Component({
	selector: 'app-listing-details',
	templateUrl: './listing-details.component.html',
	styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent {
	@Input()
	public job!: IJob;
}

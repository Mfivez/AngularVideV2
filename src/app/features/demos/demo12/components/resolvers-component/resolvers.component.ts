import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../tools/models/user.models';

@Component({
  selector: 'app-resolvers',
  templateUrl: './resolvers.component.html',
  styleUrl: './resolvers.component.scss'
})
export class ResolversComponent {

  user!: User | null;

  constructor (private route: ActivatedRoute) { }

  ngOnInit (): void {
    this.route.data.subscribe(data => { this.user = data['user'] })
  }

}

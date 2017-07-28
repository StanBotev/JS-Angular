import { Component, Input } from '@angular/core'
import { GitHubContributorsInfo } from '../GitHubContributorsInfo'

@Component ({
  selector: 'contributor',
  template: 
  `
  <div class='contributor-form'>
  <li>Contributors name: <font color='green'>{{contributor.login}}</font></li>
  <a href='{{contributor.avatar_url}}'>Avatar</a>
  <li>Contributions: <font color='green'>{{contributor.contributions}}</font></li>
  <br/>
  </div>
  `,
  styleUrls: ['./contributor.component.css']
})

export class ContributorComponent {
  @Input() contributor: GitHubContributorsInfo
}
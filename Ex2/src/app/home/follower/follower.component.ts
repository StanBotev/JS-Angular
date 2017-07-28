import { Component, Input } from '@angular/core'
import { GitHubFollowersInfo } from '../GitHubFollowersInfo'

@Component ({
  selector: 'follower',
  template: 
  `
  <br />
  <a href='{{follower.avatar_url}}'>Avatar</a>
  <br />
  <a href="{{follower.url}}">{{follower.login}}</a>
  <br />
  `
  
})

export class FollowerComponent {
  @Input() follower: GitHubFollowersInfo
}